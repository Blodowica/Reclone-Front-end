import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginComponent';
import LogoutButton from './LogoutComponent';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Col, Container, Modal, Row } from 'react-bootstrap';

export default function SideBarComponent() {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

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
                                                <CDBSidebarMenuItem icon="list" onClick={handleModalOpen}>More</CDBSidebarMenuItem>
                                            </Col>
                                        </CDBSidebarMenu>
                                    </CDBSidebarContent>
                                </CDBSidebar>
                            </Col>
                        </Row>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>

            <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>More</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal content goes here...</p>
                </Modal.Body>
            </Modal>
        </Container>
    );
}
