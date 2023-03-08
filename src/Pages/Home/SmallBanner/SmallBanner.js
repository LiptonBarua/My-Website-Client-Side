import React from 'react';
import banner from '../../../assets/Image/Black Modern 3D Artist Twitter Header.png';
import './SmallBanner.css'

const SmallBanner = () => {
    return (
        <div className='bannerDesign mb-28 pt-8 md:pt-0'>
            <div className="px-16 h-44 text-white md:flex items-center md:justify-between">
            <h1 className="text-2xl font-bold">Are you ready to hire me for <br></br> your next Project ?</h1>
            <a href='#contact'><button class="text-white border mt-5 md:mt-0   border-white hover:bg-white hover:text-[navy] active:bg-white font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Contact Me</button></a>
</div>
        </div>
    );
};

export default SmallBanner;