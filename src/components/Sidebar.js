import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <ul className="sidebar-ul">
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="help">Help</Link>
                </li>
            <button className="sidebar-button">Click me</button>
            </ul>
        </>

    )
}

export default Sidebar