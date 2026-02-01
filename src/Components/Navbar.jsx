import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';


const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);

    const handleLogout = () => {
        toast("logout");
        logoutUser();
    }



    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm px-10 flex items-center justify-between">
                <div className="">
                    <Link className="btn text-blue-600 btn-ghost text-xl">ToyTopia</Link>

                </div>
                <div className='flex gap-3'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>Home</NavLink>
                    <NavLink to={'/QnA'} className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>QnA</NavLink>

                </div>
                <div className="">
                    {
                        user ? <div className="flex items-center gap-2">
                            <img
                                className="w-10 rounded-full cursor-pointer"
                                alt={user.displayName || "User"}
                                src={user.photoURL}
                                title={user.displayName} // <-- This shows the name on hover
                            />

                            <button
                                onClick={handleLogout}
                                className="btn bg-blue-500 px-4 w-25 text-white hover:bg-blue-600 scale-105 transition-transform shadow-lg"
                            >
                                Logout
                            </button>
                        </div>
                            :

                            <Link to='/signin'>
                                <button className='btn w-25  px-4 bg-blue-500 text-white hover:bg-blue-600 scale-105 transition-transform shadow-lg'>
                                    Sign In
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;