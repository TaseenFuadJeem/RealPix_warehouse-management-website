import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        const url = `http://localhost:5000/update-product/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])

    console.log(product);

    const onSubmit = data => {
        const url = `http://localhost:5000/update-product/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });

        reset();

        toast.success("Data updated successfully 😄");

        navigate('/manage-inventory');

    }

    return (
        <div>
            <div className='lg:px-32'>
                <div className='md:w-1/2 bg-white mx-auto border-2 rounded-xl shadow-xl p-11 mb-36 mt-20'>
                    <h1 className='text-center text-4xl font-semibold my-5 text-blue-600'>Update Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">User name</label>
                        <input type="text" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("name", { required: false, maxLength: 10000 })} />

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Seller</label>
                        <input type="text" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("seller", { required: false, maxLength: 10000 })} />

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Price</label>
                        <input type='number' className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("price", { required: false, maxLength: 10000 })} />

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Quantity</label>
                        <input type="number" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("qnt", { required: false, maxLength: 10000 })} />

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Image URL</label>
                        <input type="url" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("img", { required: false, maxLength: 10000 })} />

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Product Description</label>
                        <textarea className="outline-none border h-52 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("description", { required: false, maxLength: 10000 })} />

                        <input className="relative px-4 py-2 mt-5 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 " type="submit" value='Update' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;