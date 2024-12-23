import React, { useContext, useEffect, useState } from 'react';
import { CgMenu } from "react-icons/cg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

import logo from '../assets/images/logo.png'
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from '../providers/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  const [menu, setMenu] = useState(false);
  const handleMenuBar = () => {

    setMenu(!menu);
  }
  const links = (
    <div className='flex flex-col md:flex-row items-center text-lg gap-5'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/available-cars'}>Available Cars</NavLink>
      <NavLink to={'/add-car'}>Add Car</NavLink>
      <NavLink to={'/my-cars'}>My Cars</NavLink>
      <NavLink to={'/my-bookings'}>My Bookings</NavLink>
      {/* {
        path === '/' &&
        <DarkModeSwitch
          className='ml-5 '
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
        />
      } */}
    </div>
  );
 

  return (
    <div>
      <div className="navbar py-5 bg-header_bg text-white">
        <div className="navbar-start">
        
          <div onClick={handleMenuBar} className=" lg:hidden">
            <div className="btn btn-ghost border-1 lg:hidden lg:bg-orange-400 text-lg">
              
              <IoMdMenu className='text-orange-400 ' />
              <i className="fa-solid fa-x text-primary hidden" id="cross"></i>
            </div>
          </div>
          <img src={logo} className='w-16 h-16 md:w-40 md:h-36' alt="logo" />
           <h2 className='text-xl lg:text-2xl ml-1 font-bold text-orange-300'>JIT CAR HOUSE</h2>
        
        </div>
        <div className="navbar-center hidden lg:flex lg:flex-col">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
          {path === '/' && (
            <div className='App'>
              <h1 className='pt-4 font-normal text-orange-400'>
                Here, you can {' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  <Typewriter
                    words={['rent car', 'add car', 'see your bookings']}
                    loop={7}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                car
              </h1>
            </div>
          )}

        </div>
        {user ? (
          <div className="navbar-end md:text-lg flex gap-5 items-center">
             {/* User and Logout */}
             <div>
            <div className='flex items-center justify-between '>



               
                <div className="">
                    <div
                        className="w-14 h-14  avatar tooltip rounded-full border-2 border-gray-200"
                        data-tip={user.displayName }
                    >
                        <img
                            className="rounded-full"
                            src={user.photoURL }
                            alt="UserAvatar"
                        />
                    </div>
                </div>

         





                <button onClick={logOut} className='px-4 py-1 text-white lg:text-lg'>Log Out</button>
            </div>
           
        </div>
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-5">
            <Link to={'/login'} className='text-yellow-300 mr-4 text-lg'>Login</Link>
           
          </div>
        )}
      </div>
      {path === '/' && (
        <div className='App bg-header_bg lg:hidden'>
          <h1 className='py-5 text-center font-normal text-orange-400'>
            Here, you can {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              <Typewriter
                words={['rent car', 'add car', 'see watchList']}
                loop={7}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            car
          </h1>
        </div>
      )}

     <div className='lg:hidden'>
     <section className={`${menu? 'block ': 'hidden'} `} >
        <ul
          id="menuDropdown"
          className=" bg-gray-300  text-center space-y-4 w-full p-2 shadow text-base lg:flex lg:flex-col gap-5"
        >
        
          {links}
        </ul>
      </section>
     </div>

    </div>
  );
};

export default Navbar;