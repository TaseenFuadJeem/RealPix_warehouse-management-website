import React from 'react';
import logo from '../../Assets/logo.png';
import { FcGoogle } from 'react-icons/fc'
import { GrApple } from 'react-icons/gr'

const Login = () => {
    return (
        <div>

            <div className="min-h-screen flex flex-col justify-center sm:py-12">

                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">

                    <img className='w-32 mx-auto' src={logo} alt="" />
                    <h1 className="font-semibold text-center text-xl mb-5">USER LOGIN</h1>

                    <div className="bg-white  border-2 w-full rounded-lg divide-y divide-gray-200 shadow-2xl">

                        <form className="px-5 py-7">

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input type="email" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input type="password" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" />

                            <button type="button" className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span className="inline-block mr-2">Login</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                        </form>

                        <div className="p-5">

                            <p className='text-center text-sm text-gray-400 mb-2'>login with</p>

                            <div className="grid grid-cols-2 gap-1">


                                <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex items-center justify-center"><FcGoogle style={{ fontSize: "25px", marginRight: "5px" }} />Google</button>

                                <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center  flex items-center justify-center"><GrApple style={{ fontSize: "25px", marginRight: "5px", color: "black" }} />Apple</button>

                            </div>

                        </div>

                        <div className="py-5">

                            <div className="grid grid-cols-2 gap-1">

                                <div className="text-center sm:text-left whitespace-wrap">

                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                        <span className="inline-block ml-1">Forgot Password?</span>

                                    </button>

                                </div>

                                <div className="text-center sm:text-right whitespace-wrap">

                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                        <span className="inline-block ml-1">Create new account</span>

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;