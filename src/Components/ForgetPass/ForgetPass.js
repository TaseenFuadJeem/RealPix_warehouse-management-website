import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const ForgetPass = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    return (
        <div>

            <div className="min-h-screen flex flex-col justify-center sm:py-12">

                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">

                    <div className="bg-white  border-2 w-full rounded-lg  shadow-2xl">

                        <img className='w-32 mx-auto mt-5' src={logo} alt="" />
                        <h1 className="font-semibold text-center text-xl">RESET PASSWORD</h1>

                        <form className="px-5 pt-7">

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Your existing e-mail</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" required />

                            <input onClick={async () => {
                                await sendPasswordResetEmail(email);
                                alert('Sent email');
                            }}
                                type="submit" value="Reset Password" className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" />

                        </form>

                        <div className="py-5">

                            <div className="grid grid-cols-1 gap-1">

                                <div className="text-center  whitespace-wrap">

                                    <Link to='/login'>
                                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                            <span className="inline-block ml-1"><BiLeftArrowAlt className='inline text-xl' />Go back to <span className='text-blue-600 font-semibold'>Login</span></span>

                                        </button>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ForgetPass;