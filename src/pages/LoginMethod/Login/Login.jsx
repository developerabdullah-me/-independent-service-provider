import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialMethod from '../SocialMethod/SocialMethod';

const Login = () => {
  const emailRef=useRef()
  const passwordRef=useRef()
    const navigate=useNavigate()
 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
      );
      if (user){
        navigate('/about')
    }
    const handelLogin = (event) => {
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
     signInWithEmailAndPassword(email,password);
      };

      const handelPasswordReset=async(event)=>{
        const email=emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
       }
    return (
        <div>
            <h1>please Login</h1>
            <form onSubmit={handelLogin}>
            <input type="name" placeholder="Name" />
        <input ref={emailRef} type="email" name="email" placeholder="type your email" required/><br />
        <input ref={passwordRef} type="password" name="password" placeholder="type your password" required/><br />
        <input  type="submit" value="Login" />
      </form>
      <div className="">
   <button onClick={handelPasswordReset}>reset password</button>
      </div>
      <div>
      <div className='pt-2 font-medium text-center'>
        please first register?<Link to='/register' className='border-b'>Register</Link>
                    </div>
      </div>
            <SocialMethod></SocialMethod>
        </div>
    );
};

export default Login;