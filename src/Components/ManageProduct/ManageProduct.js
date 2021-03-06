import React, { useState } from 'react';
import { MdUpdate, MdDeleteForever } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';

const ManageProduct = ({ product, setProducts, products }) => {
    const { _id, img, name, seller, price, qnt, description } = product;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            border: "6px solid #5EA4FA",
            backgroundColor: '#2563EB',
            padding: "35px",

        },
    };

    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleDelete = id => {
        const url = `https://rocky-mesa-14972.herokuapp.com/inventory/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(p => p._id !== id);
                setProducts(remaining);
            })
    }

    const [quantity, setQuantity] = useState(qnt);
    const numQuantity = Number(quantity);
    let newNumQuantity = numQuantity - 1;

    const handleQnt = () => {

        const url = `https://rocky-mesa-14972.herokuapp.com/update-quantity/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                qnt: newNumQuantity
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setQuantity(newNumQuantity);

                if (newNumQuantity === 0 || newNumQuantity < 0) {
                    toast.error("Can't deliver. Product is currently out of stock");
                } else {
                    toast.success("Delivery successful");
                }

            });

    }
    console.log(quantity);

    return (

        <Slide bottom>
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg  mb-5">

                    <img className="rounded-t-lg mx-auto p-8 w-60" src={img} alt="" />

                    <div className="p-5">

                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{name}</h5>

                        <p title={description} className="font-normal text-gray-700 my-5">{description.length > 100 ? description.slice(0, 200) + "..." : description}</p>
                        <p className="font-normal">Price : $ {price}</p>
                        <p className="font-normal">Seller : {seller}</p>
                        <p className={`font-normal ${newNumQuantity === 0 || newNumQuantity < 0 ? "text-red-600" : ""}`}>{newNumQuantity === 0 || newNumQuantity < 0 ? "Stock Out" : "Item left : " + newNumQuantity}</p>
                        <div className='flex justify-evenly'>
                            <Link to={`/update-product/${_id}`}>
                                <button className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center">
                                    Update <MdUpdate className='text-xl ml-1' />
                                </button>
                            </Link>
                            <button onClick={openModal} className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                Delete <MdDeleteForever className='text-xl ml-1' />
                            </button>
                            <button onClick={() => handleQnt()} className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                Delivered <FaShippingFast className='text-xl ml-1' />
                            </button>

                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <h1 className='text-center text-white text-xl font-bold'>Are you sure for delete?</h1>

                                <div className='flex justify-evenly mt-10'>

                                    <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={() => {
                                        handleDelete(_id);
                                        closeModal();
                                        toast.success("Deleted successfully");
                                    }} >Yes!!</button>

                                    <button className="border border-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline" onClick={closeModal}>cancel</button>

                                </div>

                            </Modal>

                        </div>
                    </div>
                </div>

            </div>
        </Slide>

    );
};

export default ManageProduct;