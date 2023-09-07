import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h3>Welcome to the help center!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugit.</p>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}

export default HelpLayout