import React from 'react';
import SocialMethod from '../SocialMethod/SocialMethod';

const Register = () => {
    return (
        <div className="">
            <h1>please register</h1>
            <form>
                <input type="name" placeholder='Name'  />
                <div className='ab h-9 w-9'></div>
            </form>
            <SocialMethod></SocialMethod>
        </div>
    );
};

export default Register;