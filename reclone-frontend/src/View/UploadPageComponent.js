import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BsCloudUpload } from 'react-icons/bs';
import AddPostInfoPageComponent from './AddPostInfoPageComponent';

const UploadPageComponent = () => {
    const [dragging, setDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAddPostInfoPage, setShowAddPostInfoPage] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
        document.getElementById('formFile').value = '';
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const clearFiles = () => {
        const file = null;
        document.getElementById('formFile').value = '';
        setSelectedFile(file);
    };

    const handleNext = () => {
        setShowAddPostInfoPage(true);
    };

    const handleCancel = () => {
        setShowAddPostInfoPage(false);
    };

    return (
        <Container className="mt-5">
            {!showAddPostInfoPage ? (
                <Form>
                    <Row className="text-center">
                        <Col>
                            <h1 style={{ fontFamily: 'Dancing Script', fontStyle: 'normal', fontWeight: 700, fontSize: '3.0rem' }}>
                                Create your new post
                            </h1>
                            <p>Png, Jpeg, Mp4, Mv</p>
                        </Col>
                    </Row>
                    <Row
                        className={`d-flex text-center justify-content-center mt-5 mb-3 ${dragging ? 'dragging' : ''
                            }`}
                        style={{ outline: '#c4c4c4 dashed 2px', borderRadius: '2%' }}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <Col lg="auto">
                            <BsCloudUpload style={{ fontSize: '35vh', color: 'c4c4c4' }} />
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Drop and drag or browse to choose a file</Form.Label>
                                <Form.Control type="file" size="sm" onChange={handleFileInputChange} />
                                {selectedFile && <Form.Text>{selectedFile.name}</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col className="d-flex justify-content-end">
                        <Button onClick={clearFiles} style={{ backgroundColor: 'gray', marginRight: '1vw' }}>
                            Cancel
                        </Button>
                        <Button disabled={!selectedFile} onClick={handleNext}>
                            Next
                        </Button>
                    </Col>
                </Form>
            ) : (
                <AddPostInfoPageComponent file={selectedFile} onCancel={handleCancel} />
            )}
        </Container>
    );
};

export default UploadPageComponent;
