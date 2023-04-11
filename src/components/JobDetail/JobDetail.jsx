import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { addToDb } from '../../utlities/fakedb';

const JobDetail = () => {
    const {id} = useParams();
    const data = useLoaderData();



    const [job, setJob] = useState({});
    const {jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, phone, email, location} = job;

    useEffect(()=>{
       const singleJob = data.find( job => job.id == id);
       setJob(singleJob);
    },[id, data])


    const handleApply = (id) => {
        addToDb(id);
    }

    return (
        <div>
        <Banner>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl md:text-5xl font-semibold text-center mt-[50px]'>Job Details</h1>
            </div>
        </Banner>
        <div className='w-[95%] md:w-[70%] mx-auto flex flex-col md:flex-row justify-between mt-20'>
            <div>
                <p className='mb-5 text-[#757575]'><span className='text-gray-800 font-bold'>Job Description: </span>{jobDescription}</p>
                <p className='mb-5 text-[#757575]'><span className='text-gray-800 font-bold'>Job Responsibility: </span>{jobResponsibility}</p>
                <p className='mb-5 text-[#757575]'><span className='text-gray-800 font-bold'>Educational Requirements: </span>{educationalRequirements}</p>
                <p className='mb-5 text-[#757575]'><span className='text-gray-800 font-bold'>Experiences: </span>{experiences}</p>
            </div>

            <div >
                <div className='bg-[#7E90FE]/10 p-5 rounded-md'>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Job Information</h3>
                        <hr  className='mb-5'/>
                        <div className='mb-2 flex items-center gap-x-2'><img className='w-4 h-4' src="/dollar.png" alt="" /><p className='text-[#757575]'><span className='font-semibold text-gray-800'>Salary: </span>{salary} (per month)</p></div>
                        <div className='mb-2 flex items-center gap-x-2'><img className='w-4 h-4' src="/date.png" alt="" /><p className='text-[#757575]'><span className='font-semibold text-gray-800'>Job Title: </span>{jobTitle}</p></div>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-lg font-semibold mb-2'>Contact Information</h3>
                        <hr  className='mb-5'/>
                        <div className='mb-2 flex items-center gap-x-2'><img className='w-4 h-4' src="/phone.png" alt="" /><p className='text-[#757575]'><span className='font-semibold text-gray-800'>Phone: </span>{phone}</p></div>
                        <div className='mb-2 flex items-center gap-x-2'><img className='w-4 h-4' src="/email.png" alt="" /><p className='text-[#757575]'><span className='font-semibold text-gray-800'>Email: </span>{email}</p></div>
                        <div className='mb-2 flex items-center gap-x-2'><img className='w-4 h-4' src="/pin.png" alt="" /><p className='text-[#757575]'><span className='font-semibold text-gray-800'>Location: </span>{location}</p></div>
                    </div>
                </div>
                <button onClick={()=>handleApply(id)} className='w-full mt-5 text-white font-bold py-3 px-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Apply Now</button>
            </div>
        </div>
        </div>
    );
};

export default JobDetail;