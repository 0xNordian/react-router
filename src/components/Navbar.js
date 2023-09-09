import {  Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="root-header">
                <nav>
                    <h1><Link to="/">Jobarouter</Link></h1>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Navbar