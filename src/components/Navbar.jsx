import React, { useContext, useEffect, useState } from 'react';
import { CgMenu } from "react-icons/cg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

import logo from '../assets/images/logo.png'
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  const [menu, setMenu] = useState(false);
  const handleMenuBar = () => {

    setMenu(!menu);
  }

  const links = (
    <div className='flex flex-col md:flex-row items-center text-lg gap-5'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/reviews'}>Available Cars</NavLink>
    
    </div>
  );

  return (
    <div>
      <div className="navbar py-5 bg-header_bg text-white">
        <div className="navbar-start">



          <div className='flex gap-1 items-center'>
            <img src={logo} className='w-16 h-16 ' alt="logo" />
           

            <h2 className='text-lg  text-orange-400'>JIT Car House</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:flex-col">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>


        </div>
        {user ? (
          <div className="navbar-end md:text-lg flex gap-5 items-center">
            <button className='btn'>log Out</button>
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-5">
            <Link to={'/login'} className='text-orange-400 text-lg hidden lg:block'>Log-in</Link>
            <Link to={'/register'} className='text-orange-400 text-lg hidden lg:block'>Register</Link>
         
          </div>
        )}

        <div onClick={handleMenuBar} className=" lg:hidden">
          <div className="btn btn-ghost border-1 lg:hidden lg:bg-orange-400 text-lg">

            <IoMdMenu className={` ${!menu? 'block text-orange-400': 'hidden'}  `} />
            
            <RxCross1 className={` ${menu? 'block text-orange-400': 'hidden'}  `} />
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        <section className={`${menu ? 'block ' : 'hidden'} `} >
          <ul
            id="menuDropdown"
            className=" bg-gray-300  text-center space-y-4 w-full p-2 shadow text-base lg:flex lg:flex-col gap-5"
          >

            {/* {links} */}

            <div className='flex flex-col md:flex-row items-center text-lg gap-5'>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/reviews'}>Available Cars</NavLink>
              <NavLink to={'/login'} className=''>Log-in</NavLink>
              <NavLink to={'/register'} className=''>Register</NavLink>
         
            </div>

          </ul>
        </section>
      </div>

    </div>
  );
};

export default Navbar;