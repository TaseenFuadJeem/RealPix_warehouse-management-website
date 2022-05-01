import React from 'react';

const ProductForHome = ({ product }) => {

    const { img, name, seller, price, qnt } = product;

    return (

        <tr>
            <td className="p-2 whitespace-nowrap w-96">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img src={img} width="40" height="40" alt="Alex" /></div>
                    <h1 title={name} className="font-medium text-gray-800">{name.length > 15 ? name.slice(0, 35) + "..." : name}</h1>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <h2 className="text-left">{seller}</h2>
            </td>
            <td className="p-2 whitespace-nowrap">
                <h2 className="text-left font-medium text-green-500">$ {price}</h2>
            </td>
            <td className="p-2 whitespace-nowrap">
                <h2 className="text-lg text-center">{qnt}</h2>
            </td>
        </tr>

    );
};

export default ProductForHome;