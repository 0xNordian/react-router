import React from 'react'
import { NavLink, Link, useLocation, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';

const RootLayout = () => {
    const location = useLocation();
    const pathsToRenderSidebar = ['/']; // Add more paths as needed

    // Check if the current location pathname is in the pathsToRenderSidebar array
    const shouldRenderSidebar = pathsToRenderSidebar.includes(location.pathname);
    return (
        <div className="root-layout">
            <Navbar />
            <div className="home-layout">
                {shouldRenderSidebar && (
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                )}
                <main className="main">
                    <Outlet />
                </main>
            </ div>
        </div>
    )
}

export default RootLayout