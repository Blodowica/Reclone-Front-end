import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function LoginPageComponent() {
    return (
        <Container fluid style={{ height: '100%' }}>
            <Row className='pl-0'>
                <Col className='d-flex align-items-center pl-0' lg={6} xs={12} >
                    <img className='reclone-illustration-img' src='../../Reclone-illustration.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Col>
                <Col className='' lg={6} >
                    <Row className='d-flex justify-content-center' xs={12}>
                        <Col className='d-flex justify-content-center' xs={12}>
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
                    <Row className='d-flex mt-5 justify-content-center align-items-end pb-3' lg={6} xs={6}>
                        <Link to={'/home'}>
                            <Button>Login</Button>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPageComponent;
