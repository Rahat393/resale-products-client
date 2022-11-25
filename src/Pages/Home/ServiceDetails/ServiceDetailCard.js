import React from 'react';
import BookingModal from '../../BookingModal/BookingModal';

const ServiceDetailCard = ({ product }) => {
    const { name, img, location, resale_price, orginal_price, years_of_use, sellers_name } = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10 max-w-7xl mx-auto">

            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: ${resale_price}</p>
                <p className='text-xl'>Orginal Price : ${orginal_price}</p>
                <p className='text-xl'>Years of Use: {years_of_use}</p>
                <p className='text-xl'>Seller name: {sellers_name}</p>
                <p className='text-xl'  > location: {location} </p>
                <div className="card-actions justify-end">
                </div>
                <div className="  w-full justify-center">

                    <label htmlFor="booking-Modal" className="btn btn-success w-full   text-white">Book Now</label>

                </div>
            </div>
            {
                <BookingModal></BookingModal>
            }
        </div>
    );
};

export default ServiceDetailCard;