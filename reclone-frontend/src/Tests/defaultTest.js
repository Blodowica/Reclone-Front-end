import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
    ext: {
        loadimpact: {
            // Project: Recloe
            projectID: 3644416,
            // Test runs with the same name groups test runs together
            name: 'YOUR TEST NAME'
        }
    }
};

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}