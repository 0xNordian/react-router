import React from 'react';
import { Link } from 'react-router-dom';

const CareerDetailsError = () => {
    return (
        <div className="career-details-error">
            <h2>Oops! Career details couldn't be loaded.</h2>
            <p>Please check the URL or try again later.</p>
            <Link to="/careers">Back to Careers</Link>
            {/* You can add a link to go back to a previous page or a home page here */}
        </div>
    );
};

export default CareerDetailsError;
