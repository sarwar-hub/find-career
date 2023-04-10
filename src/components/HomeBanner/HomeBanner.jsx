import React from 'react';

const HomeBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center md:pt-[100px] px-2 md:px-[10%] bg-[#7E90FE]/10'>
            <div>
                <h1 className='text-5xl md:text-8xl font-semibold'>One Step <br /> Closer To Your <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span></h1>
                <p className='text-[#757575] my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='text-white font-bold py-3 px-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={'/src/assets/All Images/P3OLGJ1 copy 1.png'} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;