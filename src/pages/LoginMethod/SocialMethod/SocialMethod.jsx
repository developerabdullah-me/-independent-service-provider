import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialMethod = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle
    (auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
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
            <button onClick={() => signInWithGoogle()}>Sign in Google</button>
            <button onClick={() => signInWithFacebook()}>Sign in facebook</button>
            <button onClick={() => signInWithGithub()}>Sign in github</button>
        </div>
    );
};

export default SocialMethod;