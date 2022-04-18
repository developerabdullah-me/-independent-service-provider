import React from "react";
import me from "./me.png";
const About = () => {
  return (
    <div>
      <div className="">
        <img className="w-96 mx-auto " src={me} alt="" />
      </div>
      <div className="">
          <h1 className="text-4xl text-center py-5">Abdullah Talha</h1>
        <p className="md:px-56 mx-auto sm:px-3 text-center">
          I am a front-end developer. Generally, I feel comfortable working with
          these in HTML, CSS, SASS, JAVASCRIPT, BOOTSTRAP, TAILWIND, and REACT.
          I did some projects. I am currently studying Background Computer
          Science and Technology. My vision for the future is to see myself as a
          great programmer in the future. , My hard work will lead me to my
          goal, InshaAllah
        </p>
      </div>
    </div>
  );
};

export default About;
