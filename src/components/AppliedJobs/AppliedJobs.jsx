import React, { useEffect, useState } from 'react';
import { getData } from '../../utlities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import Banner from '../Banner/Banner';

const AppliedJobs = () => {
    //const storedAppliedJobs = getData(); // used inside of useEffect
    const loadedAllJobs = useLoaderData();
    //const [storedJobs, setStoredJobs] = useState(storedAppliedJobs); 
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
        setAppliedJobs(getappliedJobs);


    },[loadedJobs])


    let [filterBy, setFilterBy] = useState();
    //console.log(filterBy)

    let filteredJobs = appliedJobs.filter((singlejob)=>{
        if (filterBy == 'remote') {
            return singlejob.remoteOrOnsite === "Remote";
        } else if (filterBy == 'onsite') {
            return singlejob.remoteOrOnsite === "Onsite";
        } else {
            return singlejob;
        }
    })
    //console.log(filteredJobs)


    const jobFilterBy = (event) => {
        setFilterBy(event.target.value);
    }
    
 



    return (
        <>
        <Banner>
                <div className='flex justify-center items-center'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-center mt-[50px]'>Applied Jobs</h1>
                </div>
        </Banner>
        <div className='w-[95%] md:w-[70%] mx-auto mt-20'>
            
            <div className='flex justify-end'>
                <select onChange={jobFilterBy} className='bg-[#7E90FE]/30 py-2 px-5 rounded mb-5' name="" id="">
                    <option value="all">All</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
            </div>
            <div>
                {
                    filteredJobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
        </>
    );
};

export default AppliedJobs;