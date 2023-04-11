import React, { useEffect, useState } from 'react';
import { getData } from '../../utlities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import Banner from '../Banner/Banner';

const AppliedJobs = () => {
    const storedAppliedJobs = getData();
    const loadedAllJobs = useLoaderData();
    const [storedJobs, setStoredJobs] = useState(storedAppliedJobs);
    const [loadedJobs, setLoadedJobs] = useState(loadedAllJobs);

    const [appliedJobs, setAppliedJobs] = useState([]);
    
    useEffect(()=>{
        const storedAppliedJobs = getData();

        let getappliedJobs = [];
        for (const id in storedAppliedJobs) {
            const job = loadedJobs.find(jobb=>jobb.id == id);
            if(job in getappliedJobs) {
                return;
            } else {
                getappliedJobs.push(job);
            }
        }
        setAppliedJobs(getappliedJobs)


    },[loadedJobs])




    



    return (
        <>
        <Banner>
                <div className='flex justify-center items-center'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-center mt-[50px]'>Applied Jobs</h1>
                </div>
        </Banner>
        <div className='w-[95%] md:w-[70%] mx-auto mt-20'>
            
            <div className='flex justify-end'>
                <select className='bg-[#7E90FE]/30 py-2 px-5 rounded mb-5' name="" id="">
                    <option value="filter">Filter by</option>
                    <option onClick={filterByRemote} value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
            </div>
            <div>
                {
                    appliedJobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
        </>
    );
};

export default AppliedJobs;