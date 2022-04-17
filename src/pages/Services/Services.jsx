import React from 'react';
import useServices from '../Hooks/useService';
import Service from '../RequireAuth/Service/Service';

const Services = () => {
    const [services]=useServices()
    return (
        <div>
            {/* <h1>Our Services {services.length}</h1> */}
          {
              services.map(service => <Service service={service} key={service.id}></Service>)
          }
        </div>
    );
};

export default Services;