import React, { useEffect, useState } from 'react';
import AvailableCarCard from '../../components/AvailableCarCard';

const AvailableCars = () => {
    const [cars, setCars] = useState([]);
   
    useEffect(() => {
        fetch('https://jit-car-rental-server.vercel.app/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto pt-5'>
            <h2 className='text-2xl text-center font-bold'>Available Cars: {cars.length} </h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 '>
                {
                    cars.map(car=><AvailableCarCard key={car._id}></AvailableCarCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCars;