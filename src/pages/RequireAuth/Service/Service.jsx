import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {name,id}=props.service;
    const navigate= useNavigate()
     const handelprams=()=>{
        navigate(`/checkOut/${id}`)
    }
    console.log(props);
    
    return (
        <div id="services">
            <h1>{name}</h1>
            <button onClick={()=>handelprams(id)}>{name}</button>
        </div>
    );
};

export default Service;