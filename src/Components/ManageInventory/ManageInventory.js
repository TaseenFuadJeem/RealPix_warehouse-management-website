import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import './ManageInventory.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import userPhoto from '../../Assets/profile-user.png';

const ManageInventory = () => {

    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        const url = "https://rocky-mesa-14972.herokuapp.com/cam";

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <div className='mobile-dev'>

            {
                products.length === 0 ?

                    <LoadingPage></LoadingPage>

                    :

                    <>
                        <h1 className='text-center text-4xl font-semibold my-5'>Manage Inventory</h1>

                        <div className='border-2 border-black p-4 w-80 mx-auto flex justify-center rounded-xl mt-5'>
                            <div>
                                <p className='text-center mb-2 font-bold underline  underline-offset-4'>USER INFO</p>
                                <div className="flex items-center mx-auto space-x-4">
                                    <img className="w-10 h-10 rounded-full" src={user?.photoURL ? user.photoURL : userPhoto} alt="" />
                                    <div className="space-y-1 font-medium">
                                        <div>{user?.displayName ? user.displayName : "Unknown User"}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <Link to='/add-product'>
                                <button className="mr-3 relative px-4 py-2 mt-5 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 ">
                                    Add Product <MdAddCircle className='text-xl' />
                                </button>
                            </Link>
                            <Link to='/my-items'>
                                <button className="ml-3 relative px-4 py-2 mt-5 mx-auto m-0 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 ">
                                    My Items
                                </button>
                            </Link>
                        </div>

                        <div className='grid lg:grid-cols-3 gap-8 lg:px-32 my-16'>

                            {
                                products.map(product => <ManageProduct
                                    key={product._id}
                                    product={product}
                                    setProducts={setProducts}
                                    products={products}
                                ></ManageProduct>)
                            }
                        </div>
                    </>
            }

        </div>
    );
};

export default ManageInventory;