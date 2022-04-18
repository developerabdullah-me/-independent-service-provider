import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h1>Are you ready for checkout</h1>
            <p>{serviceId}</p>
            <Link to='/checkout'>
                <button className='btn '>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;