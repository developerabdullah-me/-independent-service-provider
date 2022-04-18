import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CoustomActiveLink from "../CoustomActiveLink/CoustomActiveLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex  items-center justify-between mx-10 py-5">
      <h1 className="text-2xl font-bold border-l-2 border-b-2  border-gray-300">
        web site build
      </h1>
      <nav className="flex items-center">
        <CoustomActiveLink
          className="ml-5 hover:text-red-500 font-bold"
          to="/home"
        >
          Home
        </CoustomActiveLink>
        <CoustomActiveLink
          className="ml-5 hover:text-red-500 font-bold"
          to=""  href="#services"
        >
          Services
        </CoustomActiveLink>
        <CoustomActiveLink
          className="ml-5 hover:text-red-500 font-bold"
          to="/CheckOut"
        >
          CheckOut
        </CoustomActiveLink>
        <CoustomActiveLink
          className="ml-5 hover:text-red-500 font-bold"
          to="/about"
        >
          About
        </CoustomActiveLink>
        <CoustomActiveLink
          className="ml-5 hover:text-red-500 font-bold"
          to="/blogs"
        >
          Blogs
        </CoustomActiveLink>
        <CoustomActiveLink
          className="ml-5 hover:text-red-500 font-bold"
          to="/login"
        >
          Login
        </CoustomActiveLink>

        {user ? (
          <button  className="btn ml-5 font-bold  py-2 px-4 rounded-full" onClick={handelSignOut}>
            signOut{" "}
          </button>
        ) : (
          <CoustomActiveLink
            className="btn ml-5 font-bold  py-2 px-4 rounded-full"
            to="/register"
          >
            Register
          </CoustomActiveLink>
        )}
      </nav>
     
    </div>
  );
};

export default Header;
