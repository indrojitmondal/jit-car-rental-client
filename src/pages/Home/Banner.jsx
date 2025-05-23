import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1 from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero bg-[#e9ece6]  min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    {/* <motion.img src={team1}

                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className='max-w-sm w-64 rounded-t-[40px] border-l-4  border-b-4 border-blue-400 rounded-br-[40px] shadow-2xl' alt="" />

                   */}
                   <img className='' src={team1} alt="" />
               
                </div>

                <div className='flex-1'>

                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Drive your <motion.span animate={{
                            color: ['#d56627', '#86d527', '#d5bb27']
                        }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Dreams</motion.span> today! 

                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary text-orange-600 bg-header_bg">View Available Cars</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;