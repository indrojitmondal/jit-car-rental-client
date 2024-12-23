import React from 'react';
import Banner from './Banner';
import Carousel from '../../components/Carousel';
import WhyChooseUS from './WhyChooseUS';
import RecentListings from './RecentListings';
import SpecialOffers from './SpecialOffers';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
               {/* Banner Section */}
               <Carousel></Carousel>
               {/* Why Choose Us Section */}
                <WhyChooseUS></WhyChooseUS>
               {/* Recent Listings */}
               <RecentListings></RecentListings>
               {/* Extra Sections */} 
               <Testimonials></Testimonials>
                {/* Special offer section */}
               <SpecialOffers></SpecialOffers>
               <h2></h2>
        </div>
    );
};

export default Home;