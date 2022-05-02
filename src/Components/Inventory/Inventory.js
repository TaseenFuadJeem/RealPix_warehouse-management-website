import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import LoadingPage from '../LoadingPage/LoadingPage';

const Inventory = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const url = "http://localhost:5000/cam";

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