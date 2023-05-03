import React, { useRef } from 'react';
import { Col, Container, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { BsChat, BsHeart } from 'react-icons/bs';





function ExplorePage() {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const renderPostStats = (likes, comments) => (
        <div className="post-stats">
            <span className="likes">
                <BsHeart /> {likes}
            </span>
            <span className="comments">
                <BsChat /> {comments}
            </span>
        </div>
    );

    return (

        <div>


            <Container>
                <Row className="justify-content-center" xs={9} lg={6}>
                    <Col className="p-1" lg={3}>
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
                    <Col className="p-1" lg={3}>
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
                    <Col className="p-1" lg={3}>
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">


                                <Image className='explore-image' src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6" fluid />
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
            <Container>
                <Row className="justify-content-center" xs={9} lg={6}>
                    <Col className="p-1" lg={3}>
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">
                                <Image className="explore-image" src="https://wallpapershome.com/images/wallpapers/love-image-7680x4320-8k-21486.jpg" fluid />
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
                    <Col className="p-1" lg={3}>
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">


                                <Image className='explore-image' src="https://cc-prod.scene7.com/is/image/CCProdAuthor/how_to_cut_out_images_photoshop_P1_mobile_360x270?$pjpeg$&jpegSize=200&wid=720" fluid />
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
                    <Col className="p-1" lg={3}>
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">


                                <Image className='explore-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU" fluid />
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
            <Container>
                <Row className="justify-content-center" xs={9} lg={6}>
                    <Col className="p-1" lg={3}>
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">
                                <Image className="explore-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8GHj6pzjP_HXBnBnLUsylWX3SjGj_nWF1Q&usqp=CAUs" fluid />
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
                    <Col className="p-1" lg={3}>
                        <div className="explore-image-wrapper">

                            <div className="explore-image-wrapper image-container">


                                <Image className='explore-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiF7TCk8SrvxxqZgsC29k1sOHcevZgNzoZPQ&usqp=CAU" fluid />
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
                    <Col className="p-1" lg={3}>
                        <div
                            className="explore-image-wrapper"
                            onMouseEnter={playVideo}

                            onMouseLeave={pauseVideo}
                        >
                            <div className="explore-image-wrapper image-container">
                                <video className="explore-video" ref={videoRef} controls>
                                    <source src="https://res.cloudinary.com/dlivi0v24/video/upload/v1681902979/my_video3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default ExplorePage;