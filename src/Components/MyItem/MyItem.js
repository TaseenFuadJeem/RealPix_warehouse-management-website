import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Item from '../Item/Item';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/my-items?email=${email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user.email])

    return (
        <div className='lg:px-32'>
            {
                items.length === 0 ? <h1 className='text-4xl text-center my-6 font-semibold text-red-500'>Sorry!! You have not added any items yet</h1> : <h1 className='text-4xl text-center my-6 font-semibold'> My Items</h1>
            }

            <div className='grid lg:grid-cols-3 mb-48 mt-9 gap-8'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default MyItem;