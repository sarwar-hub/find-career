import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#7E90FE]/10 flex flex-col md:flex-row justify-between items-center py-5 gap-y-5 px-2 md:px-[10%]'>
            <h1 className='text-2xl md:text-5xl font-semibold'><Link to='/'>FindCareer</Link></h1>
            <nav className='text-[#757575] font-semibold flex gap-x-5'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/applied'>Applied jobs</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
                <CustomLink to='/statistics/'>Statistics</CustomLink>
            </nav>
            <button className='text-white font-bold py-3 px-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Start Applying</button>
        </div>
    );
};

export default Header;