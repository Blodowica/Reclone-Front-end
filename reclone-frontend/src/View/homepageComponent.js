import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BsBookmark, BsChat, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>

            <Container fluid='xs' className='mx-auto custom-post-container'>

                <Row className='mt-3' style={{ backgroundColor: '#c4c4c4' }}>
                    <Col lg={2} sm={1} md={1} xl={1} xs={2}>
                        <Image className=' mt-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' roundedCircle />
                    </Col>
                    <Col className='d-flex mt-3' >
                        <p><strong>BoMamadu$hi</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='d-flex justify-content-center '>
                        <div id='PostImageContainer'>
                            <Image className='home-post-image' src='https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='picture of angel' />
                        </div>
                    </Col>

                </Row>
                <Row className='mt-2' >
                    <Col lg={1}>
                        <BsHeart />
                    </Col>
                    <Col>
                        <BsChat />
                    </Col>
                    <Col>
                        <BsBookmark className='mr-5' style={{ float: 'right' }} />
                    </Col>
                </Row>
                <Row>
                    345 likes
                </Row>
                <Row>
                    Coachpatato69 ~ insert nice caption here
                </Row>
                <Row className='mb-4'>
                    View all comments...
                </Row>

            </Container >
            <Container fluid='xs' className='mx-auto custom-post-container' >

                <Row className='mt-3' style={{ backgroundColor: '#c4c4c4' }}>
                    <Col lg={2} sm={1} md={1} xl={1} xs={2}>
                        <Image className='mt-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' roundedCircle />
                    </Col>
                    <Col className='d-flex mt-3' >
                        <p><strong>BoMamadu$hi</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='d-flex justify-content-center'>
                        <div style={{ outline: 'green dashed 1px' }}>
                            <Image className='home-post-image' src='https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?cs=srgb&dl=pexels-pixabay-220769.jpg&fm=jpg' alt='picture of angel' />
                        </div>
                    </Col>

                </Row>
                <Row className='mt-2' >
                    <Col lg={1}>
                        <BsHeart />
                    </Col>
                    <Col>
                        <BsChat />
                    </Col>
                    <Col>
                        <BsBookmark className='mr-5' style={{ float: 'right' }} />
                    </Col>
                </Row>
                <Row>
                    345 likes
                </Row>
                <Row>
                    Coachpatato69 ~ insert nice caption here
                </Row>
                <Row className='mb-4'>
                    View all comments...
                </Row>

            </Container >
            <Container fluid='xs' className='mx-auto custom-post-container'>

                <Row className='mt-3' style={{ backgroundColor: '#c4c4c4' }}>
                    <Col lg={2} sm={1} md={1} xl={1} xs={2}>
                        <Image className='mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' roundedCircle />
                    </Col>
                    <Col className='d-flex mt-3' >
                        <p><strong>CouchPatato5</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='d-flex justify-content-center'>
                        <div style={{ outline: 'green dashed 1px' }}>
                            <Image className='home-post-image' src='https://images.unsplash.com/photo-1500577329392-f0af6d7dd827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='picture of angel' />
                        </div>
                    </Col>

                </Row>
                <Row className='mt-2' >
                    <Col lg={1}>
                        <BsHeart />
                    </Col>
                    <Col>
                        <BsChat />
                    </Col>
                    <Col>
                        <BsBookmark className='mr-5' style={{ float: 'right' }} />
                    </Col>
                </Row>
                <Row>
                    345 likes
                </Row>
                <Row>
                    Coachpatato69 ~ insert nice caption here
                </Row>
                <Row className='mb-4'>
                    View all comments...
                </Row>

            </Container >
        </div >
    )
}
export default HomePage