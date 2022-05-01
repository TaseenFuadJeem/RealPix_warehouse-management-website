import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../Assets/banner.jpeg';
import { BiWorld } from 'react-icons/bi';
import { Slide } from 'react-reveal';

const Banner = () => {
    return (
        <div>
            <div className='w-full h-screen bg-cover bg-center relative overflow-hidden'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay' src={banner} alt="" />
                <div className='flex items-center justify-center h-screen'>
                    <div>
                        <Slide left>
                            <h1 className="text-center text-6xl text-white font-bold">Welcome to World's largest <br /> camera inventory</h1>
                        </Slide>

                        <Slide right>
                            <h2 className='text-white text-center text-xl my-10'>Make sure you have the right equipment, and use it properly!</h2>

                            <Link to="/inventory">
                                <button className="relative px-4 py-2 mb-32 mt-5 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 ">
                                    Explore our inventory <BiWorld className='text-xl mt-1' />
                                </button>
                            </Link>
                        </Slide>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;