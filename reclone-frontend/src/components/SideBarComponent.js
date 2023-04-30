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
                <NavLink to="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily: 'Dancing Script', fontStyle: 'normal', fontWeight: 500, fontSize: '4.0rem' }}>
                    Reclone
                </NavLink>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content flex-grow-1">
                <CDBSidebarMenu>
                    <NavLink to="/" end>
                        <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/search" end>
                        <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/feed" end>
                        <CDBSidebarMenuItem icon="compass">Explore</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/upload" end>
                        <CDBSidebarMenuItem icon="plus">Create</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/profile" end>
                        <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    );
}
