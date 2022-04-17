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
    <div className=" mx-auto">
       
      <h1 className='text-center'>please register</h1>
     
      <div className ='mx-auto'>
            <div className ='text-center'>
            <SocialMethod></SocialMethod>
            </div>
            
         <div>
          
           <div className="flex items-center justify-center">
           <div className="h-1 bg-slate-700 w-28 rounded "></div>
            <p className="px-2">or</p>
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
          
          </div>
        </div>
      <form onSubmit={handleRegister}>
        <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="name" placeholder="Name" />
        <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="email" name="email" placeholder="type your email" required/>
        <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your password" required/>
        <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your confirm password" required/>
        <input className='btn w-80 mx-auto block'  type="submit" value="Register" />
      </form>
      </div>

      <div className='pt-2 font-medium text-center'>
     <p> Already have an account ?   <Link to='/login' className='border-b'>please login </Link></p>
      </div>
      
    </div>
  );
};

export default Register;
