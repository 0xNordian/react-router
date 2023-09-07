import React from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
    const location = useLocation();
    const pathsToRenderSidebar = ['/']; // Add more paths as needed

    // Check if the current location pathname is in the pathsToRenderSidebar array
    const shouldRenderSidebar = pathsToRenderSidebar.includes(location.pathname);
    return (
        <div className="root-layout">
            <header className="root-header">
                <nav>
                    <h1>Jobarouter</h1>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="about">About</NavLink>
                </nav>
            </header>
            <div className="home-layout">
                {shouldRenderSidebar && (
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                )}
                <main>
                    <Outlet />
                </main>
            </ div>
        </div>
    )
}

export default RootLayout