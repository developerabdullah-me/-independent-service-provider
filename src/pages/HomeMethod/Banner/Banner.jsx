import React from 'react';
import banner from'../../Images/web-design-concept-with-drawings.jpg'
const Banner = () => {
    return (
        <div>
            <div className=" mx-24 grid  md:grid-cols-2  sm:grid-cols-1  items-center justify-evenly">
               
                <div className="">
                    <h1>Are you need a developer</h1>
                   <p>
                   Thanks for visiting my website! I am Abdullah Talha, I am a web developer, if you need a web developer then you have come to the right place. i provide a variety of web sites, such as HTML, CSS, Tailwind CSS, Bootstrap CSS, SAS, JavaScript, React js,
                   MongoDB. if you need a website contact me ? right now
                   </p>
                </div>
                <div className="">
               <img className="w-80" src={banner} alt=""/>
             </div>
            </div>
        </div>
    );
};

export default Banner;