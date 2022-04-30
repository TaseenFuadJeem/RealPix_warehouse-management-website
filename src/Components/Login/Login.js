import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { FcGoogle } from 'react-icons/fc'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingPage from '../LoadingPage/LoadingPage';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
        toast.error("You closed the popup");
    }

    if (error?.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("You entered a wrong password");
    }

    if (error?.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid Email");
    }

    if (error?.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("No user found. Please check your E-mail");
    }

    if (googleUser || user) {
        navigate('/home');
    }

    const handleLogin = event => {

        event.preventDefault();

    }

    return (
        <div>

            {
                googleLoading || loading ?

                    <LoadingPage></LoadingPage>

                    :

                    <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-cover bg-no-repeat" style={{
                        backgroundImage: "url('https://i.ibb.co/F5ZTJdb/ezgif-com-gif-maker-1.gif)"
                    }}>

                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">

                            <div className="bg-white  border-2 w-full rounded-lg  shadow-2xl">

                                <img className='w-32 mx-auto mt-5' src={logo} alt="" />
                                <h1 className="font-semibold text-center text-xl">USER LOGIN</h1>

                                <form onSubmit={handleLogin} className="px-5 py-7">

                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" required />

                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" required />

                                    <input onClick={() => signInWithEmailAndPassword(email, password)} type="submit" value="Login" className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" />

                                </form>

                                <div className="px-5">

                                    <p className='text-center text-sm text-gray-400 mb-2'>Continue with</p>

                                    <div className="grid grid-cols-1 gap-1">


                                        <button onClick={() => signInWithGoogle()} type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex items-center justify-center"><FcGoogle style={{ fontSize: "25px", marginRight: "5px" }} />Google</button>


                                    </div>

                                </div>

                                <div className="py-5">

                                    <div className="grid grid-cols-2 gap-1">

                                        <div className="text-center sm:text-left whitespace-wrap">

                                            <Link to="/reset-password">
                                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                                    <span className="inline-block ml-1">Forgot Password?</span>

                                                </button>
                                            </Link>

                                        </div>

                                        <div className="text-center sm:text-right whitespace-wrap">

                                            <Link to='/signup'>
                                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                                    <span className="inline-block ml-1">Create new account</span>

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

export default Login;