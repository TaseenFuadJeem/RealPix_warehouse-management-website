import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Modal from 'react-modal/lib/components/Modal';
import { toast } from 'react-toastify';

const Item = ({ item, items, setItems }) => {

    const { _id, img, name, price, seller, qnt, email, description } = item;

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
        const url = `http://localhost:5000/my-items/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(p => p._id !== id);
                setItems(remaining);
            })
    }

    return (
        <div>
            <div class="max-w-lg mx-auto">
                <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mx-auto mb-5">

                    <img class="rounded-t-lg mx-auto p-4 w-60" src={img} alt="" />

                    <div class="p-5">

                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{name}</h5>

                        <p title={description} className="font-normal text-gray-700 my-5">{description.length > 100 ? description.slice(0, 200) + "..." : description}</p>

                        <p class="font-normal text-gray-700">Price : $ {price}</p>
                        <p class="font-normal text-gray-700">Seller : {seller}</p>
                        <p class="font-normal text-gray-700">Item left : {qnt}</p>
                        <p class="text-gray-400 text-sm">{email}</p>
                        <button onClick={openModal} class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Delete <MdDeleteForever className='text-xl ml-1' />
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
    );
};

export default Item;