import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function LoginPageComponent() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>

            <Container fluid style={{ height: '100%' }}>
                <Row className='  '>

                    <Col className='d-flex  p-0 overflow-hidden' lg={6} xs={{ order: 'last' }} style={{ height: '100vh' }} >
                        <img className='reclone-illustration-img' src='../../Reclone-illustration.svg' />
                    </Col>
                    <Col className='p-0 overflow-hidden' lg={6} style={{ height: '100vh' }}>
                        <Row className='d-flex justify-content-center ' xs={12}>
                            <Col className='d-flex justify-content-center ' xs={12}>
                                <img className='' src="../../RecloneLogo.png" />
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <p className='slogon-text' style={{ fontFamily: 'dancing script', fontWeight: 700, fontSize: '2rem' }}>
                                    Join our global community and start connecting with users from around the world effortlessly.
                                    Let's bridge the gaps and bring people together, one click at a time.
                                </p>
                            </Col>
                        </Row>
                        <Row className='d-flex mt-5 justify-content-center align-items-end pb-3' lg={12} >
                            <Col className='text-center' xs={12}>
                                <Link to={'/home'}>
                                    <Button style={{ width: '25vw' }}>Login</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default LoginPageComponent;
