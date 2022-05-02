import React from 'react';
import { Slide } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const ManageProduct = ({ product }) => {
    const { _id, img, name, seller, price, qnt, description } = product;
    // const navigate = useNavigate();

    // const navigateToServiceDetails = id => {
    //     navigate(`/inventory/${id}`);
    // }

    return (

        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mx-auto mb-5">

                <img className="rounded-t-lg mx-auto" src={img} alt="" />

                <div className="p-5">

                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{name}</h5>

                    <p title={description} className="font-normal text-gray-700 my-5">{description.length > 100 ? description.slice(0, 200) + "..." : description}</p>
                    <p className="font-normal text-gray-700">Price : $ {price}</p>
                    <p className="font-normal text-gray-700">Seller : {seller}</p>
                    <p className="font-normal text-gray-700">Item left : {qnt}</p>
                    <div className='flex justify-evenly'>
                        <button className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Update
                        </button>
                        <button className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ManageProduct;