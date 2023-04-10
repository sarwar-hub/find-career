import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between items-center w-[1280px] mx-auto py-5'>
            <h1 className='text-3xl font-semibold'>FindCareer</h1>
            <nav className='text-[#757575] font-medium flex gap-x-5'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/applied'>Applied jobs</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
                <CustomLink to='/statistics'>Statistics</CustomLink>
            </nav>
            <button className='py-3 px-5 font-bold text-white rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Start Applying</button>
        </div>
    );
};

export default Header;