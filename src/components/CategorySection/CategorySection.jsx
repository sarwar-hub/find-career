import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(()=>{
        try {
            const loadData = async() => {
            const response = await fetch(`/categories.json`);   
            const data = await response.json();
            setCategories(data);
            }
            loadData();
        } catch(error) {
            console.log(error);
        }
    }, []);

    return (
        <div className='mt-20 w-[95%] md:w-[70%] mx-auto'>
            <h1 className='text-center text-5xl font-bold'>Job Category List</h1>
            <p className='text-[#A3A3A3] text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between items-center'>
            {
                categories.map(cat=><Category category={cat}></Category>)
            }
            </div>
        </div>
    );
};

export default CategorySection;