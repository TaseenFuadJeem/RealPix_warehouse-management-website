import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <div className="w-full h-screen mb-64">
                <div className="bg-gradient-to-b  h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className=" w-full border-2 shadow-xl rounded-lg p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center text-blue-600">Add new product</p>
                        <form action="" method="post">
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none ">Name</label>
                                    <input type="text" name='name' className="leading-none  p-3 focus:outline-none focus:border-blue-700 mt-4 border-2  rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none ">Seller</label>
                                    <input type="text" name='seller' className="leading-none  p-3 focus:outline-none focus:border-blue-700 mt-4 border-2  rounded" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none ">Price</label>
                                    <input type="number" name='price' className="leading-none  p-3 focus:outline-none focus:border-blue-700 mt-4 border-2  rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none ">Quantity</label>
                                    <input type="number" name='qnt' className="leading-none  p-3 focus:outline-none focus:border-blue-700 mt-4 border-2  rounded" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none ">Image URL</label>
                                    <input type="text" name='img' className="leading-none  p-3 focus:outline-none focus:border-blue-700 mt-4 border-2  rounded" />
                                </div>

                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none ">Product Description</label>
                                    <textarea type="text" name='description' className="h-40 text-base leading-none p-3 focus:outline-none focus:border-blue-700 mt-4  border-2 rounded"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 text-white font-semibold leading-none  py-4 px-10 bg-blue-600 rounded hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Add product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;