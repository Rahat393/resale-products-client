import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
// import { Toast } from 'react-toastify/dist/components';


const BookingModal = ({ product, setOrders }) => {
    console.log(product);
    const { name: product_name, resale_price } = product
    const { user } = useContext(AuthContext)
    // const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const resale_price = form.resale_price.value
        const product_name = form.product_name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {

            product_name,
            resale_price,
            email,
            phone,
            location
        }

        fetch('http://localhost:4000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('booking confirm')
                    setOrders(null)
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
        console.log(booking);
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

                        <input className='btn btn-accent' type="submit" value="Submit" />
                        {/* <input className='btn btn-accent' type="submit">Submit</input> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;