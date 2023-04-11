import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({job}) => {
    const {id, companyLogo, companyName, fulltimeOrPartTime, jobTitle, remoteOrOnsite, location, salary } = job;

    return (
    <div className='flex gap-y-5 md:gap-y-0 flex-col md:flex-row items-center gap-x-5 border-2 border-gray-200 p-5 rounded-md mb-5'>
        <div className='w-[150px] px-3 py-10 bg-[#7E90FE]/10'>
            <img className='w-[100%]' src={companyLogo} alt="" />
        </div>
        <div className='flex-grow flex flex-col gap-y-2'>
            <h2 className='text-xl text-[#474747] font-bold'>{jobTitle}</h2>
            <p className='text-[#757575] font-medium'>{companyName}</p>
            <div className='flex gap-x-2'>
                <span className='text-[#7E90FE] font-medium px-5 py-2 rounded border-[1px] border-[#7E90FE]'>{remoteOrOnsite}</span>
                <span className='text-[#7E90FE] font-medium px-5 py-2 rounded border-[1px] border-[#7E90FE]'>{fulltimeOrPartTime}</span>
            </div>
            <div className='flex gap-x-5'>
                <span className='text-[#757575] font-medium flex items-center'><img className='mr-2 w-5 h-5' src="/pin.png" alt="" /> {location}</span>
                <span className='text-[#757575] font-medium flex items-center'><img className='mr-2 w-5 h-5' src="/dollar.png" alt="" /> {salary}</span>
            </div>
        </div>
        <Link to={`/jobs/${id}`}><button className='w-[150px] text-white font-bold py-3 px-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</button></Link>
    </div>
    );
};

export default AppliedJob;