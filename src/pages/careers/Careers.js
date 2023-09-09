import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title} <span className="salary">(USD {career.salary.toLocaleString()})</span></p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

export const careersLoader = async () => {
    try {
        console.log("Fetching data...")
        const res = await fetch('http://localhost:4000/careers');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log("Fetched data: ", data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}