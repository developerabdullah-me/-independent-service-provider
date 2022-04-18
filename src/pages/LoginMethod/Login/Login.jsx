import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate,useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMethod from "../SocialMethod/SocialMethod";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  // if (user) {
  //   navigate("/about");
  // }
  const location=useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handelLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handelPasswordReset = async (event) => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div>
      <h1 className="text-center">Please Login</h1>
      <div className="">
        <div className="text-center">
          <SocialMethod></SocialMethod>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
            <p className="px-2">or</p>
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
          </div>
        </div>
      </div>
      <form onSubmit={handelLogin}>
       
        <input ref={emailRef}
          className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
          type="email"
          name="email"
          placeholder="type your email"
          required
        />
        <input ref={passwordRef}
          className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto"
          type="password"
          name="password"
          placeholder="type your password"
          required
        />
        
        <input className="btn w-80 mx-auto block" type="submit" value="login" />
      </form>
      <div className="text-center">
        <button className=' ' onClick={handelPasswordReset}>Reset password</button>
      </div>

      <div className="pt-2 font-medium text-center">
        <p>
          {" "}
          please first register ?{" "}
          <Link to="/register" className="border-b">
            Register{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
