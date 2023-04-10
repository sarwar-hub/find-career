import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import CategorySection from '../CategorySection/CategorySection';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategorySection></CategorySection>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;