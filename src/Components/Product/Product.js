import React from 'react';
import { Slide } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, img, name, seller, price, qnt } = product;
    const navigate = useNavigate();

    const navigateToServiceDetails = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <Slide bottom>
            <div class="max-w-lg mx-auto">
                <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mx-auto mb-5">

                    <img class="rounded-t-lg mx-auto p-4 w-60" src={img} alt="" />

                    <div class="p-5">

                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{name}</h5>

                        <p class="font-normal text-gray-700">Price : $ {price}</p>
                        <p class="font-normal text-gray-700">Seller : {seller}</p>
                        <p class="font-normal text-gray-700">Item left : {qnt}</p>
                        <button onClick={() => navigateToServiceDetails(_id)} class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            View full detail
                        </button>
                    </div>
                </div>

            </div>
        </Slide>
    );
};

export default Product;