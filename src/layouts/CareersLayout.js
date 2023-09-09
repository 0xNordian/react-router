import { Link, Outlet } from "react-router-dom"

export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <div className="career-layout-header">
                <h2>Career Details</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
            </div>
            <div className="main-careers">
                <Outlet />
            </div>
        </div>
    )
}