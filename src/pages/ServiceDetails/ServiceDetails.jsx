import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useSearchParams()
    return (
        <div>
            <h1>welcome{serviceId}</h1>
            <Link to='/checkout'>
                <button className='btn '>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;