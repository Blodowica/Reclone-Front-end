import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginButton from './LoginComponent';
import LogoutButton from './LogoutComponent';
import Popover from 'react-bootstrap/Popover';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Button, Col, Container, OverlayTrigger, Row } from 'react-bootstrap';
import { BsBookmarkFill, BsFillGearFill } from 'react-icons/bs';
import { IoLogOut } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';



export default function SideBarComponent() {

    const popover = (
        <Popover id="popover-basic" style={{ backgroundColor: '#708090', width: '100%' }}>

            <Popover.Body>
                <Button className='' variant='secondary' style={{ width: '100%' }}>
                    <Link to={'/settings'} style={{ color: 'white', }}>
                        <Row style={{ height: '2rem' }}>
                            <Col lg={3} xs={3} className='d-flex justify-content-start align-items-center' >
                                <BsFillGearFill style={{ width: '1.5rem', height: '1.5rem' }} />
                            </Col>
                            <Col lg={6} xs={6}>
                                Settings
                            </Col>
                            <Col className=' d-flex align-self-center justify-content-end' lg={3} xs={3} >
                                <MdOutlineKeyboardArrowRight style={{ height: '1rem', width: '1rem' }} />
                            </Col>
                        </Row>
                    </Link>
                </Button>
                <Button className='mt-1' variant='secondary' style={{ width: '100%' }}>
                    <Link to={'/profile'} style={{ color: 'white', }}>
                        <Row style={{ height: '2rem' }}>
                            <Col lg={3} xs={3} className='d-flex justify-content-start align-items-center' >
                                <BsBookmarkFill style={{ width: '1.5rem', height: '1.5rem' }} />
                            </Col>
                            <Col lg={6} xs={6}>
                                Saved
                            </Col>
                            <Col className=' d-flex align-self-center justify-content-end' lg={3} xs={3} >
                                <MdOutlineKeyboardArrowRight style={{ height: '1rem', width: '1rem' }} />
                            </Col>
                        </Row>
                    </Link>
                </Button>
                <Button className='mt-1' variant='secondary' style={{ width: '100%' }}>
                    <Link to={'/'} style={{ color: 'white', }}>
                        <Row style={{ height: '2rem' }}>
                            <Col lg={3} xs={3} className='d-flex justify-content-start align-items-center' >
                                <IoLogOut style={{ width: '1.5rem', height: '1.5rem' }} />
                            </Col>
                            <Col lg={6} xs={6}>
                                Logout
                            </Col>
                            <Col className=' d-flex align-self-center justify-content-end' lg={3} xs={3} >
                                <MdOutlineKeyboardArrowRight style={{ height: '1rem', width: '1rem' }} />
                            </Col>
                        </Row>
                    </Link>
                </Button>


            </Popover.Body>
        </Popover >
    );

    return (
        <Container className='d-flex p-0' style={{ height: '100%' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333" className="d-flex flex-column">
                <CDBSidebarHeader prefix={<i className=""></i>}>
                    <NavLink
                        to="/home"
                        className="text-decoration-none"
                        style={{
                            color: 'inherit',
                            fontFamily: 'Dancing Script',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '3.5rem',
                        }}
                    >
                        Reclone
                    </NavLink>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content flex-grow-1">
                    <CDBSidebarMenu className='d-flex align-self-stretch'>
                        <Row>
                            <NavLink to="/home" end>
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/search" end>
                                <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/explore" end>
                                <CDBSidebarMenuItem icon="compass">Explore</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/upload" end>
                                <CDBSidebarMenuItem icon="plus">Create</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/profile" end>
                                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                            </NavLink>
                        </Row>
                        <Row lg={12} xs={12} style={{ height: '48vh' }}>
                            <Col lg={12} className='align-self-end'>
                                <CDBSidebar textColor="#fff" backgroundColor="#333" className="d-flex flex-column">
                                    <CDBSidebarContent className="sidebar-content flex-grow-1">
                                        <CDBSidebarMenu className='d-flex align-self-stretch'>
                                            <Col className='align-self-end'>
                                                <OverlayTrigger trigger="focus" placement="top" overlay={popover}

                                                >
                                                    <CDBSidebarMenuItem icon="list" >More</CDBSidebarMenuItem>
                                                </OverlayTrigger>
                                            </Col>
                                        </CDBSidebarMenu>
                                    </CDBSidebarContent>
                                </CDBSidebar>
                            </Col>
                        </Row>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>


        </Container>
    );
}
