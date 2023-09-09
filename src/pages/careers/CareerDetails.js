import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import CareerDetailsError from './CareerDetailsError';

const CareerDetails = () => {
    // const { id } = useParams();
    const {data, error} = useLoaderData();
    console.log("data", data)

    if (error) {
        // Handle the case where the data is not available (e.g., loading or error)
        return <CareerDetailsError />;
    }

    return (
        <div className="career-details">
            <h2>Career Details for {data.title}</h2>
            <p>Starting salary: {data.salary}</p>
            <p>Location: {data.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
    )
}

export default CareerDetails

export const careerDetailsLoader = async ({ params, navigate }) => {
    const { id } = params;
    try {
        const res = await fetch(`http://localhost:4000/careers/${id}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { data: null, error };
    }
}