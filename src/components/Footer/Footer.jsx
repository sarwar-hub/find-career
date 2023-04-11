import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20 py-10 px-2 md:px-[10%] bg-[#1A1919] text-white/50'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 justify-between gap-5'>
                <div className='flex flex-col gap-y-2 '>
                    <h2 className='text-white text-3xl font-semibold'>FindCareer</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.</p>
                    <img className='w-[120px]' src="/social.png" alt="" />
                </div>
                <div className='flex flex-col gap-y-2 '>
                    <h3 className='text-white text-xl font-semibold'>Company</h3>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Career</p>
                </div>
                <div className='flex flex-col gap-y-2 '>
                    <h3 className='text-white text-xl font-semibold'>Product</h3>
                    <p>Prototype</p>
                    <p>Plans&Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='flex flex-col gap-y-2 '>
                    <h3 className='text-white text-xl font-semibold'>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className='flex flex-col gap-y-2 '>
                    <h3 className='text-white text-xl font-semibold'>Contact</h3>
                    <p>534 Broadway, NYC</p>
                    <p>+777-978-5570</p>
                </div>
            </div>
            <hr className='my-10 border-[#7E90FE]/20' />
            <div className='flex justify-between'>
                 <div><p>@2023 <span className='font-semibold'>FindCareer</span>. All rights Reserved</p></div>
                 <div><p>Powered By <span className='font-semibold'>FindCareer</span></p></div>
            </div>
        </div>
    );
};

export default Footer;