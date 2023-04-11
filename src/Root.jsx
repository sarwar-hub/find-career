import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <span className='flex justify-center'>{navigation.state === 'loading' && <span className='text-[#7E90FE] text-xl bg-gray-800 py-2 px-5 rounded-md absolute'>Loading...</span>}</span>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;