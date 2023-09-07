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
                    <a href="https://www.as.com">as.com</a>
                    </li>
            </ul>
        </>

    )
}

export default Sidebar