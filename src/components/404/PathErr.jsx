import React from 'react';
import { Link } from 'react-router-dom';

const PathErr = () => {
    return (
        <div className='text-center bg-gray-500 h-[100vh] flex justify-center items-center'>
            <h1 className='text-9xl text-gray-800'>404</h1>
            <p className='text-gray-200'>Path Not Found. Return to <span className='text-white underline'><Link to='/'>Home</Link></span></p>
        </div>
    );
};

export default PathErr;