import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ product }) => {
    console.log(product);
    const { name: product_name, resale_price } = product
    const { user } = useContext(AuthContext)
    // const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const resale_price = form.name.value
        const product_name = form.email.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            // appointmentDate: date,
            // treatment: treatmentName,
            product_name,
            slot,
            email,
            phone,
            location
        }
    }
    return (
        <div>
            <input type="checkbox" id="booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> </h3>
                    <form onSubmit={handleBooking} className='grid gap-5 grid-cols-1 mt-10'>
                        {/* <input name="text" disabled value={date} className="input  " /> */}

                        <input name="product_name" type='text' defaultValue={product_name} disabled placeholder="Your name" className="input input-bordered " />
                        <input name="resale_price" type='text' defaultValue={resale_price} disabled className="input input-bordered " />
                        <input name="email" type='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered " />
                        <input name="phone" type='text' placeholder="Phone Number" className="input input-bordered " />
                        <input name="location" type='text' placeholder="Meeting Location" className="input input-bordered " />

                        <input className='btn btn-accent' type="submit" value="SUBMIT" />
                        {/* <input className='btn btn-accent' type="submit">Submit</input> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;