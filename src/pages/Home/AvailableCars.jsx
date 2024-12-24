import React, { useEffect, useState } from 'react';

const AvailableCars = () => {
    const [cars, setCars] = useState([]);
    // useEffect(()=>{
    //      fetch('http://localhost:7000/cars')
    //      .then(res=>res.json())
    //      .then(data=>{
    //         setCars(data);
    //      })
    // },[])
    useEffect(()=>{
        fetch('https://jit-car-rental-server.vercel.app/cars')
        .then(res=>res.json())
        .then(data=>{
           setCars(data);
        })
   },[])
    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Available Cars: {cars.length} </h2>
            
        </div>
    );
};

export default AvailableCars;