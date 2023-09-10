import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import CareerDetailsError from './CareerDetailsError';

const CareerDetails = () => {
    const {data, error} = useLoaderData();
    console.log("data", data)

    if (error) {
        return <CareerDetailsError />;
    }

    return (
        <div className="career-details">
            <h2>{data.title}</h2>
            <p>Starting salary: USD${data.salary.toLocaleString()}</p>
            <p>Location: {data.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing!</p>
            </div>
            <span><Link to="/careers">⬅️</Link></span>
        </div>
    )
}

export default CareerDetails

export const careerDetailsLoader = async ({ params }) => {
    // console.log("params", params)
    const { id } = params;
        const res = await fetch(`http://localhost:4000/careers/${id}`);
        if (!res.ok) {
            throw Error('Network response was not ok');
        }
        const data = await res.json();
        return { data, error: null };
}