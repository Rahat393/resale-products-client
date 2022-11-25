import React from 'react';

const ServiceDetailCard = ({ product }) => {
    const { name } = product
    return (
        <div>
            {name}
        </div>
    );
};

export default ServiceDetailCard;