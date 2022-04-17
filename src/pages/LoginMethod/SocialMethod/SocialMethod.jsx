import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loding from '../../Share/Loding/Loding';
import google from '../SocialMethod/sosial-logo/google-logo.png'
import github from '../SocialMethod/sosial-logo/github-log.png'
import facebook from '../SocialMethod/sosial-logo/Facebook-logo.png'
const SocialMethod = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle
    (auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
   
   if(loading || loading1 || loading3){
     return <Loding></Loding>
   }
    let elementErrors ;
    if (error || error1  || error3) {
        return (
            elementErrors= <div>
            <p>Error:  {error?.message} {error1?.message}  {error3?.message}</p>
          </div>
        );
      }
    return (
        <div>
            {elementErrors}
            <button className=" m-4" stroke="currentColor" onClick={() => signInWithGoogle()}> <img  className="bg-white rounded-full p-1 " src={google} alt="" /> </button>
            <button className=" m-4" stroke="currentColor" onClick={() => signInWithFacebook()}><img className="bg-white rounded-full p-1 " src={facebook} alt="" /></button>
            <button className=" m-4" stroke="currentColor" onClick={() => signInWithGithub()}> <img  className="bg-white rounded-full p-1 " src={github} alt="" /> </button>
        </div>
    );
};

export default SocialMethod;