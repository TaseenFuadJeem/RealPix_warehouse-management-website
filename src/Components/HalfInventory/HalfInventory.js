import React, { useEffect, useState } from 'react';
import ProductForHome from '../ProductForHome/ProductForHome';

const HalfInventory = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/cam";

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const sixProducts = products.slice(0, 6);

    return (
        <div>

            <h1 className='text-center text-4xl font-semibold mt-32'>Inventory</h1>

            <section className='mt-10 mb-36'>
                <div className="flex flex-col justify-center h-full">

                    <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-lg border-2 border-gray-200">
                        <header className="px-5 py-4 border-b-2 border-gray-100">
                            <h2 className="font-semibold text-gray-800 text-center">Available Products in inventory</h2>
                        </header>
                        <div className="p-3">
                            <div className=" overflow-hidden">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-800 bg-gray-300">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Camera</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Seller</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Price</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Item left</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y-2 divide-gray-100">

                                        {
                                            sixProducts.map(eachProduct => <ProductForHome
                                                key={eachProduct._id}
                                                product={eachProduct}
                                            ></ProductForHome>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default HalfInventory;