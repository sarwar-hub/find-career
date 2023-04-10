import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);
    
    


    useEffect(()=>{
        try{
            const loadData = async() => {
                const res = await fetch(`/jobs.json`);
                const data = await res.json();
                if(showAll) {
                    setJobs(data);
                } else {
                    const lessData = data.slice(0, 4)
                    setJobs(lessData);
                }
            }
            loadData();
        } 
        catch(error) {
            console.log(error);
        }
    },[showAll])
    return (
        <div className='mt-20 w-[95%] md:w-[70%] mx-auto'>
            <h1 className='text-center text-5xl font-bold'>Featured Jobs</h1>
            <p className='text-[#A3A3A3] text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-8 justify-between items-center'>
            {
                jobs.map(job=><Job job={job} key={job.id}></Job>)
            }
            </div>
            <div className='flex justify-center mt-5'>

            <button onClick={()=>setShowAll(!showAll)} className='text-center text-white font-bold py-3 px-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{showAll?'See Less':'Show All'}</button>
            </div>
        </div>
    );
};

export default Jobs;