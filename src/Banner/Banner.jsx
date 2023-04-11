import React from 'react';

const Banner = ({children}) => {
    return (
        <div className='bg-[#7E90FE]/10 relative h-[200px]'>
            {children}
            <img className='absolute bottom-0 left-[10%]' src="/vector.png" alt="" />
        </div>
    );
};

export default Banner;