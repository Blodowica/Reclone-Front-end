import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 50 }, // simulate ramp-up of traffic from 1 to 50 users over 10 seconds
        { duration: '30s', target: 50 }, // stay at 50 users 30 seconds
        { duration: '10s', target: 0 }, //-down to 0 users 10 seconds
    ],
};

export default function () {
    // Image upload
    const imageParams = {
        headers: {
            'Content-Type': 'multipart/form-data; boundary=boundary123',
        },
    };

    const imageFormData = {
        file: http.file('https://pbs.twimg.com/profile_images/711687178921717760/DLSZLtLQ_400x400.jpg', 'image.jpg', 'image/jpeg'),
    };

    const imageResponse = http.post('https://reclonepostservice.azurewebsites.net/api/Images/upload', imageFormData, imageParams);
    check(imageResponse, {
        'Image upload status is 200': (r) => r.status === 200,
    });
    console.log(`Image upload status: ${imageResponse.body}`);

    sleep(5);

    // Video upload
    const videoParams = {
        headers: {
            'Content-Type': 'multipart/form-data; boundary=boundary123',
        },
    };

    const videoFormData = {
        video: http.file('https://youtu.be/5Q69_9F9hoE', 'video4', 'video/mp4'),
    };
    const videoResponse = http.post('https://reclonepostservice.azurewebsites.net/api/Images/uploadVideo', videoFormData, videoParams);
    check(videoResponse, {
        'Video upload status is 200': (r) => r.status === 200,
    });
    console.log(`Video upload status: ${videoResponse}`);

    sleep(5);
}