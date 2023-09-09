import { Outlet } from "react-router-dom"

export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <div className="career-layout-header">
                <h2>Career Details</h2>
                <p>Join our team and embark on a journey of growth and innovation. We offer a wide range of rewarding career opportunities that cater to diverse skill sets and passions. Whether you're an aspiring developer, a creative designer, a business strategist, or a customer service enthusiast, there's a place for you here.</p>
            </div>
            <div className="main-careers">
                <Outlet />
            </div>
        </div>
    )
}