import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
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
                <div className="btn btn-ghost btn-circle avatar mr-6">
                    <Link to='/signin'>
                        <button className='btn w-25  px-4 bg-blue-500 text-white hover:bg-blue-600 scale-105 transition-transform shadow-lg'>
                            Sign In
                        </button>
                    </Link>
                    {/* <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;