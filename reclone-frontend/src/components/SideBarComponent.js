import React from 'react';
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

export default function SideBarComponent() {
    return (
        <CDBSidebar textColor="#fff" backgroundColor="#333" className="d-flex flex-column">
            <CDBSidebarHeader prefix={<i className=""></i>}>
                <NavLink to="/home" className="text-decoration-none" style={{ color: 'inherit', fontFamily: 'Dancing Script', fontStyle: 'normal', fontWeight: 500, fontSize: '3.5rem' }}>
                    Reclone
                </NavLink>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content flex-grow-1" >
                <CDBSidebarMenu className='d-flex align-self-stretch' >
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
                    <NavLink to="/profile" end>
                        <CDBSidebarMenuItem icon="list">More</CDBSidebarMenuItem>
                    </NavLink>

                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    );
}
