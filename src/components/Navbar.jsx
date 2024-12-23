import React, { useContext, useEffect, useState } from 'react';
import { CgMenu } from "react-icons/cg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

import logo from '../assets/images/logo.png'
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  const [menu, setMenu] = useState(false);
  const handleMenuBar = () => {

    setMenu(!menu);
  }

 

  return (
    <div className='navbar bg-header_bg text-white shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-20' src={logo} alt='' />
          <span className='font-bold '>JIT CAR HOUSE</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/available-cars'>Available Cars</NavLink>
          </li>

          {!user && (
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>

        {user  && (
          <div className='dropdown  dropdown-end z-50 mt-1'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu  dropdown-content mt-3 z-[1]  p-2 shadow bg-header_bg  w-52'
            >
              <li>
                <Link to='/add-job' className='justify-between'>
                  Add Car
                </Link>
              </li>
              <li>
                <Link to='/my-posted-jobs'>My Cars</Link>
              </li>
              <li>
                <Link to='/my-bids'>My Bookings</Link>
              </li>
             
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;