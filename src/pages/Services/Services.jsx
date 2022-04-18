import React from 'react';
import useServices from '../Hooks/useService';
import Service from '../RequireAuth/Service/Service';

const Services = () => {
    const [services]=useServices()
    return (
        <div id="services">
            <h1 className='text-center text-3xl p-5' >Our Services </h1>
         <div className="grid md:grid-cols-3 sm:p-5 gap-14 md:mx-32 px-16" >
         {
              services.map(service => <Service service={service} key={service.id}></Service>)
          }
         </div>
        </div>
    );
};

export default Services;