import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMethod from "../SocialMethod/SocialMethod";
import './Register.css'

const Register = () => {
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
      

      if(user){
        navigate(from, { replace: true });
        console.log(user);
      }

      const handleRegister =async ( event )=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName:name });
       alert('Updated profile');

    }
   
  return (
    <div className="">
       
      <h1>please register</h1>
      <form onSubmit={handleRegister}>
        <input type="name" placeholder="Name" />
        <input type="email" name="email" placeholder="type your email" required/><br />
        <input type="password" name="password" placeholder="type your password" required/><br />
        {/* <input type="password" placeholder="type your confirmation password" /> */}
        <input type="submit" value="Register" />
      </form>
      <div>
      <div className='pt-2 font-medium text-center'>
      Already have an account ?   <Link to='/login' className='border-b'>please login </Link>
                    </div>
      </div>
      <SocialMethod></SocialMethod>
    </div>
  );
};

export default Register;
