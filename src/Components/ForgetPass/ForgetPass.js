import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { toast } from 'react-toastify';
import LoadingPage from '../LoadingPage/LoadingPage';
import Modal from 'react-modal';

const ForgetPass = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const errorMessage = () => {
        if (error?.message === "Firebase: Error(auth / user - not - found)." || error === undefined) {
            toast.error("User not found. Please check the email and try again.")
            closeModal();
        } else {

            toast.success('Sent reset link. Check your E-mail');
            closeModal();
        }
    }
    console.log(error?.message);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            border: "6px solid #5EA4FA",
            backgroundColor: '#2563EB',
            padding: "35px",

        },
    };

    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleResetPass = event => {
        event.preventDefault();
    }

    return (
        <div>

            {
                sending ?

                    <LoadingPage></LoadingPage>

                    :

                    <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-cover bg-no-repeat" style={{
                        backgroundImage: "url('https://i.ibb.co/F5ZTJdb/ezgif-com-gif-maker-1.gif')"
                    }} >

                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">

                            <div className="bg-white  border-2 w-full rounded-lg  shadow-2xl">

                                <img className='w-32 mx-auto mt-5' src={logo} alt="" />
                                <h1 className="font-semibold text-center text-xl">RESET PASSWORD</h1>

                                <form onSubmit={handleResetPass} className="px-5 pt-7">

                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Your existing e-mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" />

                                    <input onClick={openModal} type="submit" value="Reset Password" className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" />

                                </form>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >

                                    <h1 className='text-center text-white text-xl font-bold'>🤔 Are you sure for reset your password? 🔐</h1>

                                    <div className='flex justify-evenly mt-10'>

                                        <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={async () => {

                                            errorMessage()
                                            await sendPasswordResetEmail(email);

                                        }} >Yes!!</button>

                                        <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={closeModal}>cancel</button>

                                    </div>

                                </Modal>

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
            }

        </div>
    );
};

export default ForgetPass;