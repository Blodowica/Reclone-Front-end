import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import { Button, Col, Container, Modal, OverlayTrigger, Row } from 'react-bootstrap';

export default function SideBarComponent() {

    const popover = (
        <Popover id="popover-basic">

            <Popover.Body>
                <Col>
                    <Button>Settings</Button>
                </Col>
                <Col>
                    <Button>Saved</Button>
                </Col>
                <Col>
                    <Button>Logout</Button>
                </Col>


            </Popover.Body>
        </Popover>
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
                        <Row lg={12} style={{ height: '100%' }}>
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
