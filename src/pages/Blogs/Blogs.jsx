import React from "react";

const Blogs = () => {
  return (
    <div className="md:mx-36 sm:mx-4">
      <div className="">
        <h1 className="text-center text-2xl mt-5  pb-3 text-white">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className='text-center mx-auto'>
          Firebase is the main authentication system. It is provided by Google.
          mainly we use firebase for authentication. it is an easy way to use
          authentication systems. and we also can use firebase for hosting and
          analyzing our website. Have more options for authentication Alternativ
          firebase, like Auth0, Okta, also have authentication from Microsoft,
        </p>
      </div>

      <div>
        <h1  className="text-center text-2xl mt-5  pb-3 text-white">
          What other services does firebase provide other than authentication ?
        </h1>
        <p className='text-center mx-auto'>
          Many things provide us with Firebase authentication. Provides hosting,
          analytics websites, realtime databases and storage like Firebase.
        </p>
      </div>
      <div>
          <h1  className="text-center text-2xl mt-5  pb-3 text-white">
          Difference between authentication and authorization.
          </h1>
        <p className='text-center mx-auto'>
          Authorization is the process of allowing a user to log in For example,
          if a user wants to sign in to a website with a social ID after calling
          the signup system, the social site allows them to log in. This is
          authentication 7
        </p>
      </div>
    </div>
  );
};

export default Blogs;
