import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
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
    
      if(user){
        navigate(from, { replace: true });
        console.log(user);
      }

      const handleRegister =async ( event )=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
      createUserWithEmailAndPassword(email, password);
      

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
      <SocialMethod></SocialMethod>
    </div>
  );
};

export default Register;
