import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailCard from './ServiceDetailCard';

const ServiceDetails = () => {
    const { title, products } = useLoaderData()
    return (
        <div>
            <p className='text-center text-2xl'>{title}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    products.map((product, i) => <ServiceDetailCard
                        key={i}
                        product={product}
                    ></ServiceDetailCard>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;