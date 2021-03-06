import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { toast } from 'react-toastify';
import LoadingPage from '../LoadingPage/LoadingPage';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (user || googleUser) {
        navigate(from, { replace: true });
        toast.success("Your account created successfully!")
    }

    if (error || googleError) {
        toast.error("Something went wrong. Please try again.");
        return;
    }

    const handleSignup = event => {

        event.preventDefault();

    }

    return (
        <div>

            {
                loading || googleLoading ?

                    <LoadingPage></LoadingPage>

                    :

                    <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-cover bg-no-repeat" style={{
                        backgroundImage: "url('https://i.ibb.co/F5ZTJdb/ezgif-com-gif-maker-1.gif')"
                    }} >

                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">

                            <div className="bg-white  border-2 w-full rounded-lg  shadow-2xl">

                                <img className='w-32 mx-auto mt-5' src={logo} alt="" />
                                <h1 className="font-semibold text-center text-xl">CREATE USER</h1>

                                <form onSubmit={handleSignup} className="px-5 py-7">

                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">User name</label>
                                    <input type="text" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" required />

                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" required />

                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" required />

                                    <input onClick={() => createUserWithEmailAndPassword(email, password)} type="submit" value="Sign Up" className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" />

                                </form>

                                <div className="px-5">

                                    <p className='text-center text-sm text-gray-400 mb-2'>Sign up with</p>

                                    <div className="grid grid-cols-1 gap-1">


                                        <button onClick={() => signInWithGoogle()} type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex items-center justify-center"><FcGoogle style={{ fontSize: "25px", marginRight: "5px" }} />Google</button>


                                    </div>

                                </div>

                                <div className="py-5">

                                    <div className="grid grid-cols-1 gap-1">

                                        <div className="text-center  whitespace-wrap">

                                            <Link to='/login'>
                                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                                    <span className="inline-block ml-1">Already have an account? Then <span className='text-blue-600 font-semibold'>Login</span></span>

                                                </button>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

            }

        </div>
    );
};

export default Signup;