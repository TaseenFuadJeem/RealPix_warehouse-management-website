import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import auth from '../../firebase/firebase.init';
import Modal from 'react-modal';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        closeModal();
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            backgroundColor: '#2563EB',
            border: "6px solid #5EA4FA",
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

    return (
        <div>

            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-blue-600 md:order-1">

                        <img className='w-28' src={logo} alt="" />

                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><NavLink to="/home">Home</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><NavLink to="/">Search</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><NavLink to="/">Explore</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><NavLink to="/">About</NavLink></li>
                            <li className="md:px-4 md:py-2 hover:text-blue-600"><NavLink to="/">Contact</NavLink></li>
                        </ul>
                    </div>




                    <div className={`order-2 md:order-3 ${user ? "" : "hidden"}`}>

                        <button onClick={openModal} className="px-4 py-2 focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>LogOut</span>
                        </button>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <h1 className='text-center text-white text-xl font-bold'>Are you sure for logout? </h1>

                            <div className='flex justify-evenly mt-10'>

                                <Link to="/login">
                                    <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={logout}>Yes, logout</button>
                                </Link>

                                <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={closeModal}>Keep me login!</button>

                            </div>

                        </Modal>


                    </div>



                    <div className={`order-2 md:order-3 ${user ? "hidden" : ""}`}>

                        <Link to='/login'>
                            <button className="px-4 py-2 focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Login</span>
                            </button>
                        </Link>

                    </div>


                </div>
            </nav>

        </div>
    );
};

export default Navbar;