import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

// data loader
export const careersLoader = async () => {
    try {
        const res = await fetch('http://localhost:4000/careers');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}