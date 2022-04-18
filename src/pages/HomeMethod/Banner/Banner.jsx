import React from 'react';
import banner from'../../Images/web-design-concept-with-drawings.jpg'
const Banner = () => {
    return (
        <div>
            <div className=" md:mx-40 grid  md:grid-cols-2  sm:grid-cols-1 md:gap-28 sm:gap-8 items-center justify-end">
               
                <div className="">
                    <h1>Are you need
                         a developer</h1>
                   <p>
                   Hey ! this is Abdullah Talha

Thanks for visiting my website! 
 I am a web developer, 
are you searching for a wonderful developer to create your dynamic website
if you need a web developer then you have come to the right place. I provide a variety of websites, such as HTML, CSS, Tailwind CSS, Bootstrap CSS, 
SAS, JavaScript, React js, MongoDB. if you need a website contact me? right now
                   </p>
                </div>
                <div className="">
               <img className="w-80  rounded-lg drop-shadow-lg  md:ml-32" src={banner} alt=""/>
             </div>
            </div>
         
        </div>
    );
};

export default Banner;