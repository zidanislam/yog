import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound p-5">
           <img className="mb-4 img-fluid w-75" src="https://i.ibb.co/VC8PLL2/404.jpg" alt=""/>
           <br/>
           <Link to="/home">Goto home page ?</Link>
        </div>
    );
};

export default NotFound;