import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const url = "http://localhost:5000/cam";

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <div>

            <h1 className='text-center text-4xl font-semibold my-5'>Manage Inventory</h1>

            <Link to='/add-product'>
                <button className="relative px-4 py-2 mt-5 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 ">
                    Add Product <MdAddCircle className='text-xl' />
                </button>
            </Link>

            <div className='grid lg:grid-cols-3 gap-8 lg:px-32 my-16'>

                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                    ></ManageProduct>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;