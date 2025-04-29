import React, { useEffect, useState } from 'react';
import AvailableCarCard from '../../components/AvailableCarCard';
import axios from 'axios';
import { Audio, Circles } from 'react-loader-spinner'
    ;
const AvailableCars = () => {
    const [cars, setCars] = useState([]);

    // useEffect(() => {
    //     fetch('https://jit-car-rental-server.vercel.app/cars')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCars(data);
    //         })
    // }, [])
    const [loading, setLoading] = useState(true); // Loader state

    useEffect(() => {
        axios.get("https://jit-car-rental-server.vercel.app/cars")
            .then((res) => {
                setCars(res.data);
                console.log(res.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Stop loading even if an error occurs
            });
    }, []);

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto pt-5'>

            {loading ? <div className='flex justify-center items-center'>
                <Circles
               
               height="80"
               width="80"
               color="#4fa94d"
               ariaLabel="circles-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
           /> 
                </div> 
           : <>
                <h2 className='text-2xl text-center font-bold'>Available Cars: {cars.length} </h2>

                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 '>
                    {
                        // cars.map(car => <AvailableCarCard image={car.image} key={car._id}></AvailableCarCard>)
                        cars.map(car => <AvailableCarCard car={car} key={car._id}></AvailableCarCard>)

                    }
                </div>
            </>
            }

        </div>
    );
};

export default AvailableCars;