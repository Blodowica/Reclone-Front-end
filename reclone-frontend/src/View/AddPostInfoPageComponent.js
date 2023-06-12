import React from 'react';
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { BsEmojiSmile } from 'react-icons/bs';
import api from '../API/Interceptor';

function AddPostInfoPageComponent(props) {
    const { file, onCancel } = props;

    const renderFilePreview = () => {
        if (file.type.startsWith('image/')) {
            return <Image src={URL.createObjectURL(file)} alt="File Preview" style={{ height: '40rem', width: '41rem' }} />;
        } else if (file.type.startsWith('video/')) {
            return (
                <video controls>
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                </video>
            );
        } else {
            return <p>Unsupported file type</p>;
        }
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleShare = () => {
        if (file.type.startsWith('image/')) {
            // Create a new FormData object
            const formData = new FormData();
            formData.append('file', file);

            // Send the POST request to upload image
            api.post('Images/upload', formData)
                .then(response => {
                    // Handle the response
                    console.log('Image upload successful');
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle the error
                    console.error('Image upload failed');
                    console.error(error);
                });
        } else if (file.type.startsWith('video/')) {
            // Create a new FormData object
            const formData = new FormData();
            formData.append('video', file);

            // Send the POST request to upload video
            api.post('Images/uploadVideo', formData)
                .then(response => {
                    // Handle the response
                    console.log('Video upload successful');
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle the error
                    console.error('Video upload failed');
                    console.error(error);
                });
        } else {
            console.error('Unsupported file type');
        }
    };

    return (
        <Container fluid>
            <Row className='text-center'>
                <Col>
                    <h1 style={{ fontFamily: 'Dancing Script', fontStyle: 'normal', fontWeight: 700, fontSize: '3.0rem' }}>
                        Create your new post
                    </h1>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className=' p-0 m-0' lg={6}>
                    {file && renderFilePreview()}
                </Col>
                <Col lg={6} style={{ border: 'solid black 0.1rem' }}>
                    <Row>
                        <Col lg={2}>
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' alt='profile picture' roundedCircle style={{ height: '3rem', width: '3rem' }} />
                        </Col>
                        <Col className=' d-flex align-items-center'>
                            <strong><p>Username34567</p></strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-4' lg={12}>
                            <InputGroup>
                                <Form.Control placeholder='Write a caption.' as="textarea" aria-label="With textarea" style={{ height: '13rem', resize: 'none' }} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='justify-content-start mt-1'>
                            <BsEmojiSmile />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>Add Tag</Col>
                        <Col className='text-end'></Col>
                    </Row>
                </Col>
            </Row>
            <Row className='pt-3 text-end align-self-bottom'>
                <Col className=''>
                    <Button className='mr-1' variant='secondary' onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleShare}>Share</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddPostInfoPageComponent;
