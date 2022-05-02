import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        const url = `http://localhost:5000/inventory/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId])

    const { img, name, price, seller, qnt, description } = product;

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold mt-5'>Product Detail</h1>
            <div className="flex justify-center mb-40 mt-20">
                <div className="flex flex-col md:flex-row md:max-w-6xl border-2 rounded-lg bg-white shadow-xl">
                    <div className='flex items-center'>
                        <img className="p-3 w-full h-96 md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt="" />
                    </div>
                    <div className="p-6 flex md:w-2/3 flex-col justify-start">
                        <h5 className="text-gray-900 text-2xl font-medium mb-2">{name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {description}
                        </p>
                        <p className="text-gray-600 text-2xl">Price : $ {price}</p>
                        <p className="text-gray-600">Supplier : {seller}</p>
                        <p className="text-gray-600">Item left : {qnt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;