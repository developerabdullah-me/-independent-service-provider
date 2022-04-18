import React from 'react';
import useServices from '../Hooks/useService';
import Service from '../RequireAuth/Service/Service';

const Services = () => {
    const [services]=useServices()
    return (
        <div>
            <h1  id="services">Our Services {services.length}</h1>
         <div className="grid md:grid-cols-3 sm:grid-cols-1 h-96">
         {
              services.map(service => <Service service={service} key={service.id}></Service>)
          }
         </div>
        </div>
    );
};

export default Services;