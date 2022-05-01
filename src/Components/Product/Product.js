import React from 'react';

const Product = ({ product }) => {

    const { img, name, seller, price, qnt } = product;

    return (
        <div>

            <div class="flex flex-col items-center rounded-lg border-2 shadow-xl md:flex-row md:max-w-xl mx-auto">
                <img class="object-cover p-5 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight ">{name}</h5>
                    <p class="font-normal text-2xl">Price : $ {price}</p>
                    <p class="font-normal ">Seller : {seller}</p>
                    <p class="font-normal ">Item left : {qnt}</p>
                </div>
            </div>

        </div>
    );
};

export default Product;