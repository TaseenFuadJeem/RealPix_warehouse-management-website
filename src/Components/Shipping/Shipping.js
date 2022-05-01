import React from 'react';
import shipping from '../../Assets/delivery.jpg';
import { FaShippingFast } from 'react-icons/fa';
import { Slide } from 'react-reveal';

const Shipping = () => {
    return (
        <div className='lg:px-32'>
            <h1 className='text-center text-4xl font-semibold my-10'>World wide delivery</h1>
            <div className='grid lg:grid-cols-2 gap-4 my-24'>
                <Slide left>
                    <div>
                        <img className='w-full mx-auto' src={shipping} alt="" />
                    </div>
                </Slide>

                <Slide right>
                    <div className='flex items-center justify-center lg:mt-14'>
                        <div>
                            <h1 className='text-center text-3xl font-bold text-blue-600 my-7'>FREIGHT SHIPPING SERVICES</h1>
                            <p>From keeping your costs low to anticipating potential roadblocks, we help your business ship smarter. Our local experts identify the most efficient logistics solutions for your needs — and then put these answers into motion using the power of our international carrier networks and resources.</p>
                            <button className="relative px-4 py-2 mb-32 mt-7 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 ">
                                Discover our shipping services<FaShippingFast className='text-xl text-white' />
                            </button>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Shipping;