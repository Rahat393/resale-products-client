import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    // const url = `http://localhost:4000/bookings?email=${user?.email}`
    return (
        <div>
            <h2>My Orders </h2>
        </div>
    );
};

export default MyOrders;