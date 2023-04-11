import React from 'react';

const Qna = ({qna}) => {
    const {q, a} = qna;
    return (
        <div className='qnas bg-[#7E90FE]/30 mb-5 p-5'>
            <h2 className='text-gray-500 text-3xl font-bold mb-2'># {q}</h2>
            <p className='text-[#757575] text-3xl pl-10'>{a}</p>
        </div>
    );
};

export default Qna;