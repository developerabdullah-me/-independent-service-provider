import React from 'react';

const Service = (props) => {
    console.log(props);
    const {name}=props.service;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Service;