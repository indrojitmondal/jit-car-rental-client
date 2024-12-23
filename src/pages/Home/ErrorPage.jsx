import React from 'react';

import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='w-8/12 mx-auto'>
               <img src='https://i.ibb.co.com/6Hj1b40/404.jpg' alt="" />
               {/* <h2 className='text-xl'>Not Found Page</h2>
               */}
               <Link to={'/'} className='btn'>Back to  Home</Link>
        </div>
    );
};

export default ErrorPage;