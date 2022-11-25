import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailCard from './ServiceDetailCard';

const ServiceDetails = () => {
    const { title, products } = useLoaderData()
    return (
        <div>
            {title}
            {
                products.map((product, i) => <ServiceDetailCard
                    key={i}
                    product={product}
                ></ServiceDetailCard>)
            }
        </div>
    );
};

export default ServiceDetails;