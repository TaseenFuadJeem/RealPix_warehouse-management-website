import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

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