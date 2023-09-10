import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const CareerDetailsError = (props) => {
    const error = useRouteError();
    // console.log("error", error)
    return (
        <div className="career-details-error">
            <h2>Oops! This page couldn't be loaded.</h2>
            <p>Error message: {error.message}</p>
            <p>Please check the URL or try again later.</p>
            <Link to="/careers">Back to Careers</Link>
            {/* You can add a link to go back to a previous page or a home page here */}
        </div>
    );
};

export default CareerDetailsError;
