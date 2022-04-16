import React from 'react';
import { Link } from 'react-router-dom';
import CoustomActiveLink from '../CoustomActiveLink/CoustomActiveLink';

const Header = () => {

    return (
        <div>
        <nav className="flex ">
        <CoustomActiveLink to='/services'>Services</CoustomActiveLink>
        <CoustomActiveLink to='/login'>Login</CoustomActiveLink>
        <CoustomActiveLink to='/register'>Register</CoustomActiveLink>
        
        </nav>

        </div>
    );
};

export default Header;