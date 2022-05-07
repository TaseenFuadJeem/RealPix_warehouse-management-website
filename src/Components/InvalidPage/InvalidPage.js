import React from 'react';
import gif from '../../Assets/404.gif';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const InvalidPage = () => {
    return (
        <div className='h-screen' style={{ backgroundColor: "white" }}>
            <img className='mx-auto' src={gif} alt="" />
            <h1 className='text-center text-4xl font-bold text-red-500 mb-5'>404 ERROR!</h1>
            <h1 className='text-center text-xl'>Opps! It looks like you entered a broken page😥</h1>

            <Link to="/home">
                <button className="px-4 py-2 mb-32 mt-5 mx-auto focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2">
                    <BiLeftArrowAlt className='inline text-xl' />
                    Go back to "Home"
                </button>
            </Link>

        </div>
    );
};

export default InvalidPage;