import React, { useEffect, useState } from 'react';

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
                products.map(product => <h1>{product.name}</h1>)
            }
        </div>
    );
};

export default Inventory;