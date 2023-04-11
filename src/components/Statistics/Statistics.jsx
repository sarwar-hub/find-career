import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import Banner from '../Banner/Banner';

const Statistics = () => {

    const marks = [
        {
          assignment: "Assignment-1",
          A: 60
        },
        {
          assignment: "Assignment-2",
          A: 60
        },
        {
          assignment: "Assignment-3",
          A: 59
        },
        {
          assignment: "Assignment-4",
          A: 60
        },
        {
          assignment: "Assignment-5",
          A: 60
        },
        {
          assignment: "Assignment-6",
          A: 60
        },
        {
          assignment: "Assignment-7",
          A: 60
        },
        {
          assignment: "Assignment-8",
          A: 60
        }
      ];


    return (
        <>
         <Banner>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl md:text-5xl font-semibold text-center mt-[50px]'>Statistics</h1>
            </div>
        </Banner>
        <h1 className='text-5xl my-5 text-center'>Statistics of my Assingment marks</h1>
        <div className='flex justify-center pb-10'>
            <RadarChart
            cx={300}
            cy={250}
            outerRadius={180}
            width={600}
            height={500}
            data={marks}
            >
            <PolarGrid />
            <PolarAngleAxis dataKey="assignment" />
            <PolarRadiusAxis />
            <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
            />
            </RadarChart>
        </div>
        </>
    );
};

export default Statistics;