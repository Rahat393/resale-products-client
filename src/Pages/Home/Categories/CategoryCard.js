import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { title, image, _id } = category
    return (
        <div>
            <div className="card card-compact  w-80 bg-base-100 shadow-xl my-8 mb-10">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className="card-actions justify-end">

                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-success text-white">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CategoryCard;