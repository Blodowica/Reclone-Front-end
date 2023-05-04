import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/ProfileStyling.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BsChat, BsHeart } from 'react-icons/bs';

const ProfilePage = () => {
    return (
        <div className="main">

            <header>

                <Container>

                    <div className="profile">

                        <div className="profile-image">

                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                                alt="" />

                        </div>

                        <div className="profile-user-settings">

                            <h1 className="profile-user-name">janedoe_</h1>

                            <button className="btn profile-edit-btn">Edit Profile</button>

                            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog"
                                aria-hidden="true"></i></button>

                        </div>

                        <div className="profile-stats">

                            <ul>
                                <li><span className="profile-stat-count">164</span> posts</li>
                                <li><span className="profile-stat-count">188</span> followers</li>
                                <li><span className="profile-stat-count">206</span> following</li>
                            </ul>

                        </div>

                        <div className="profile-bio">

                            <p className='bio-text'><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur
                                adipisicing
                                elit 📷✈️🏕️</p>

                        </div>

                    </div>
                    {/* <!-- End of profile section --> */}

                </Container>
                {/* <!-- End of container --> */}

            </header>


            <Container>
                <Row className="justify-content-center" xs={9} lg={6}>
                    <Col className="p-1" md={3} lg={4} style={{ height: '309px', width: '309px' }} >
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">
                                <Image className="explore-image" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" fluid />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <Row>
                                            <Col>
                                                <p>
                                                    <BsHeart /> <span className='pr-5 pl-1'>10</span>
                                                    <BsChat /> <span className='pr-3 pl-1'>5</span>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col className="p-1" md={3} lg={4} style={{ height: '309px', width: '309px' }} >
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">


                                <Image className='explore-image' src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" fluid />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <Row>
                                            <Col>
                                                <p>
                                                    <BsHeart /> <span className='pr-5 pl-1'>10</span>
                                                    <BsChat /> <span className='pr-3 pl-1'>5</span>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-1" lg={4} style={{ height: '309px', width: '309px' }}>

                        <div className="explore-image-wrapper">
                            <div className="explore-image-wrapper image-container" >

                                <video className="explore-video" style={{ width: '100vw', objectFit: 'cover' }}>
                                    <source src="https://res.cloudinary.com/dlivi0v24/video/upload/v1681902979/my_video3.mp4" type="video/mp4" style={{ height: '100vh', width: '100vw', }} />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <Row>
                                            <Col>
                                                <p>
                                                    <BsHeart /> <span className='pr-5 pl-1'>10</span>
                                                    <BsChat /> <span className='pr-3 pl-1'>5</span>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>




                </Row>

            </Container>

        </div >
    )
}
export default ProfilePage