import React from 'react';
import logo from '../../Assets/logo.png';

const Navbar = () => {
    return (
        <div>

            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-blue-600 md:order-1">

                        <img className='w-28' src={logo} alt="" />

                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><a href="/">Dashboard</a></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><a href="/">Search</a></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><a href="/">Explore</a></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><a href="/">About</a></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <button className="px-4 py-2 focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;