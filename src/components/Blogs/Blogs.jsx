import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Qna from '../Qna/Qna';

const Blogs = () => {
    const loadedQnas = useLoaderData();
    const [qnas, setQnas] = useState(loadedQnas);
    return (
        <>
            <Banner>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-3xl md:text-5xl font-semibold text-center mt-[50px]'>Featured QnA</h1>
                    </div>
            </Banner>
            <div className='w-[95%] md:w-[70%] mx-auto mt-20'>
                <div>
                    {
                        qnas.map(qna=><Qna qna={qna} key={qna.id}></Qna>)
                    }
                </div>
            </div>
        </>
    );
};

export default Blogs;