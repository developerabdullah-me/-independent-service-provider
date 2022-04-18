import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {name,id,img,price,description}=props.service;
    const navigate= useNavigate()
     const handelprams=()=>{
        navigate(`/serviceDetails/${id}`)
    }
    console.log(props);
    
    return (
        <div id="services" className=" border p-5 ">
            <img className='h-52 mx-auto' src={img} alt="" />
           <div className="">
           <h1 className='text-white'>Service: {name}</h1>
            <p>${price}</p>
            <p className=''>{description}</p>
            <button className='btn' onClick={()=>handelprams(id)}>go to details</button>
           </div>
        </div>
    );
};

export default Service;