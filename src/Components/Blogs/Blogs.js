import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className='mobile-dev lg:px-32'>
            <div className='border-gray-300 border-2 rounded-xl p-6 my-16'>
                <h1 className='text-3xl font-semibold mb-5'>Difference between Node.JS and Javascript</h1>
                <p>There are a lot of difference between JS and NodeJS. JavaScript is a scripting language and NodeJS is a JavaScript runtime environment based on google chrome V8 engine. The raw JS can run in the browsers only where NodeJS can run JS outside of the browser. The raw JavaScript is mostly used for client side or front-end development. The NodeJS is used for server side or back-end development. JavaScript is capable to add HTML and it can play with DOM. Unless NodeJS can not apply HTML tags. JavaScript has many frameworks or library. But NodeJS has some modules which can be imported from Node Package Management</p>
            </div>
            <div className='border-gray-300 border-2 rounded-xl p-6 my-16'>
                <h1 className='text-3xl font-semibold mb-5'>When should you use nodejs and when should you use mongodb?</h1>
                <p>Node.js is an open source server environment which uses JavaScript on the server to develop backend developments. Frontend development part deals with user interaction or user interface, A user can see only frontend part of an application by the help of web browsers. On the other hand, the database is mainly used as a data storage section of an application. All the data interact with the application is available in this database. This is the work of mongodb. NodeJS is the bridge between server side and client side. With mongodb you can add data base of your website and with NodeJS you can connect with mongodb and and run the JavaScript outside of the browser.</p>
            </div>
            <div className='border-gray-300 border-2 rounded-xl p-6 my-16'>
                <h1 className='text-3xl font-semibold mb-5'>Differences between sql and nosql databases</h1>
                <p>SQL database have fixed o static or predefined schema. NoSQL have dynamic schema. These SQL databases are not suitable for hierarchical data storage. But the No SQL databases are best suited for hierarchical data storage. SQL are best for complex queries. NoSQL database are not good enough for complex queries. The SQL database are vertically scalable and the NoSQL are horizontally scalable.</p>
            </div>
        </div>
    );
};

export default Blogs;