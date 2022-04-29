import React from 'react';
import { Fade } from 'react-reveal';
import cat1 from '../../Assets/cat1.png'
import cat2 from '../../Assets/cat2.png'
import cat3 from '../../Assets/cat3.png'
import cat4 from '../../Assets/cat4.png'
import cat5 from '../../Assets/cat5.png'
import cat6 from '../../Assets/cat6.jpg'

const Category = () => {
    return (
        <div className='my-32 lg:px-32 sm:px-5'>

            <h1 className='text-center text-3xl font-semibold my-5'>SHOP BY CATEGORY</h1>

            <div className='grid lg:grid-cols-3 gap-3'>

                <Fade left>
                    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">

                        <img className="w-full h-56 rounded-lg object-cover object-center border-4" src={cat3} alt="avatar" />

                        <div className="flex items-center px-6 py-3 bg-blue-600">

                            <h1 className="mx-3 text-white font-semibold text-lg">DSLR Cameras</h1>

                        </div>

                    </div>
                </Fade>

                <Fade top>
                    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">

                        <img className="w-full h-56 rounded-lg object-cover object-center border-4" src={cat5} alt="avatar" />

                        <div className="flex items-center px-6 py-3 bg-blue-600">

                            <h1 className="mx-3 text-white font-semibold text-lg">Mirrorless Cameras</h1>

                        </div>

                    </div>
                </Fade>

                <Fade right>
                    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">

                        <img className="w-full h-56 rounded-lg object-cover object-center border-4" src={cat4} alt="avatar" />

                        <div className="flex items-center px-6 py-3 bg-blue-600">

                            <h1 className="mx-3 text-white font-semibold text-lg">Camera Lenses</h1>

                        </div>

                    </div>
                </Fade>

            </div>

            <div className='grid lg:grid-cols-3 gap-3'>

                <Fade left>
                    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">

                        <img className="w-full h-56 rounded-lg object-cover object-center border-4" src={cat1} alt="avatar" />

                        <div className="flex items-center px-6 py-3 bg-blue-600">

                            <h1 className="mx-3 text-white font-semibold text-lg">Camera Accessories</h1>

                        </div>

                    </div>
                </Fade>

                <Fade bottom>
                    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">

                        <img className="w-full h-56 rounded-lg object-cover object-center border-4" src={cat2} alt="avatar" />

                        <div className="flex items-center px-6 py-3 bg-blue-600">

                            <h1 className="mx-3 text-white font-semibold text-lg">Compact Cameras</h1>

                        </div>

                    </div>
                </Fade>

                <Fade right>
                    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">

                        <img className="w-full h-56 rounded-lg object-cover object-center border-4" src={cat6} alt="avatar" />

                        <div className="flex items-center px-6 py-3 bg-blue-600">

                            <h1 className="mx-3 text-white font-semibold text-lg">Video Cameras</h1>

                        </div>

                    </div>
                </Fade>

            </div>

        </div>
    );
};

export default Category;