import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id, companyLogo, companyName, fulltimeOrPartTime, jobTitle, remoteOrOnsite, location, salary } = job;
    return (
        <div className='flex flex-col gap-y-3 border-2 border-gray-200 p-8 rounded-md shadow transition hover:shadow-md'>
            <div className='w-[150px] h-[80px]'>
                <img className='w-[100%]' src={companyLogo} alt="" />
            </div>
            <h2 className='text-xl text-[#474747] font-bold'>{jobTitle}</h2>
            <p className='text-[#757575] font-medium'>{companyName}</p>
            <div className='flex gap-x-5'>
                <span className='text-[#7E90FE] font-medium px-5 py-2 rounded border-[1px] border-[#7E90FE]'>{remoteOrOnsite}</span>
                <span className='text-[#7E90FE] font-medium px-5 py-2 rounded border-[1px] border-[#7E90FE]'>{fulltimeOrPartTime}</span>
            </div>
            <div className='flex gap-x-5'>
                <span className='text-[#757575] font-medium flex'><img className='mr-2 w-6 h-6' src="/pin.png" alt="" /> {location}</span>
                <span className='text-[#757575] font-medium flex'><img className='mr-2 w-6 h-6' src="/dollar.png" alt="" /> {salary}</span>
            </div>
            <Link to={`/jobs/${id}`}><button className='w-[150px] text-white font-bold py-3 px-5 rounded bg-gradient-to-r hover:bg-gradient-to-l transition-all from-[#7E90FE] to-[#9873FF]'>View Details</button></Link>
        </div>
    );
};

export default Job;