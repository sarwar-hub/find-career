import React from 'react';

const Category = ({category}) => {
    const{cat, jobs, img} = category;
    return (
        <div className='bg-[#7E90FE]/10 rounded-lg  p-10 shadow transition hover:shadow-md'>
            <img src={img} alt="" />
            <h1 className='text-xl text-[#474747] font-semibold mt-8 mb-2'>{cat}</h1>
            <p className='text-[#A3A3A3]'>{jobs} Jobs available</p>
        </div>
    );
};

export default Category;