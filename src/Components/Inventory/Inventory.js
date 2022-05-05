import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import LoadingPage from '../LoadingPage/LoadingPage';
import { MdManageAccounts } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Inventory = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const url = "https://rocky-mesa-14972.herokuapp.com/cam";

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <div>
            {
                products.length === 0 ?

                    <LoadingPage></LoadingPage>

                    :

                    <>
                        <h1 className='text-center text-4xl font-semibold my-5'>Our Inventory</h1>

                        <Link to="/manage-inventory">
                            <button className="relative px-4 py-2 mt-5 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 ">
                                Manage Inventory <MdManageAccounts className='text-xl' />
                            </button>
                        </Link>

                        <div className='grid lg:grid-cols-3 gap-8 lg:px-32 my-16'>

                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                            }
                        </div></>
            }
        </div>
    );
};

export default Inventory;