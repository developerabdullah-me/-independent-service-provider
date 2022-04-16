import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialMethod = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle
    (auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>Sign in Google</button>
            <button onClick={() => signInWithFacebook()}>Sign in facebook</button>
        </div>
    );
};

export default SocialMethod;