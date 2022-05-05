import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const navigate = useNavigate();


    const onSubmit = data => {

        const url = "https://rocky-mesa-14972.herokuapp.com/cam";

        fetch(url, {
            method: 'POST',
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

        toast.success("Data added successfully 😄");

        navigate('/manage-inventory');

    };


    return (
        <div className='lg:px-32'>
            <div className='md:w-1/2 bg-white mx-auto border-2 rounded-xl shadow-xl p-11 mb-36 mt-20'>
                <h1 className='text-center text-4xl font-semibold my-5 text-blue-600'>Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Model name</label>
                    <input type="text" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("name", { required: true, maxLength: 10000 })} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">User email</label>
                    <input type="email" value={user.email} className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("email", { required: true, maxLength: 10000 })} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Seller</label>
                    <input type="text" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("seller", { required: true, maxLength: 10000 })} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Price</label>
                    <input type='number' className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("price", { required: true, maxLength: 10000 })} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Quantity</label>
                    <input type="number" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("qnt", { required: true, maxLength: 10000 })} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Image URL</label>
                    <input type="url" className="outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("img", { required: true, maxLength: 10000 })} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Product Description</label>
                    <textarea className="outline-none border h-52 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" {...register("description", { required: true, maxLength: 10000 })} />

                    <input className="relative px-4 py-2 mt-5 mx-auto focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 bg-blue-600 hover:bg-blue-700 text-gray-50 rounded-xl flex items-center gap-2 " type="submit" value='Add new product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;