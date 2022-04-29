import React from 'react';
import loading from '../../Assets/loading.gif';

const LoadingPage = () => {
    return (


        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">

                <img className='w-20' src={loading} alt="" />

                <h1 className='text-2xl font-semibold'>Loading ...</h1>
            </div>
        </div>


    );
};

export default LoadingPage;