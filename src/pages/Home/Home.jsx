import React from 'react';
import Banner from './Banner';
import Carousel from '../../components/Carousel';

const Home = () => {
    return (
        <div>
               {/* Banner Section */}
               <Carousel></Carousel>
               {/* Why Choose Us Section */}
               <h2 className='text-4xl text-center  font-bold'>Why Choose US </h2>
               {/* Recent Listings */}
               <h2 className='text-4xl text-center font-bold'>Recent Listings</h2>
               {/* Extra Sections */} 
               <h2 className='text-4xl text-center font-bold'>Extra Sections(With Animations)</h2>
               {/* Special Offers */} 
               <h2 className='text-4xl text-center font-bold'>Special offers</h2>
               <h2></h2>
        </div>
    );
};

export default Home;