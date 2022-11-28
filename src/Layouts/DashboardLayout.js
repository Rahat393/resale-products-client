import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSellers from '../hooks/useSellers';
import Navbar from '../Pages/Home/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSellers(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80   text-base-content">
                        {/* <li><Link to="/dashboard">My Appointments</Link></li> */}

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allbuyers'>All userss</Link></li>
                                <li><Link to='/dashboard/allsellers'>All seller</Link></li>

                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;