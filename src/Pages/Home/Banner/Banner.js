import React, { useEffect, useState } from 'react';
import image from '../../../assets/Image/Lipton.jpg'
import darkimage from '../../../assets/Image/LiptonDarkPic.jpg'

import {GrFacebookOption, GrLinkedinOption, GrGithub, GrFacebook } from "react-icons/gr";
import './Banner.css'
import { useTheme } from 'next-themes';

const Banner = () => {
    const{theme} = useTheme()


    return (
        <div>
{
    theme === "dark" ? 
    <div className="darkBackgroundImage py-28 md:py-32 " >


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className='relative'>
                        <img src={darkimage} className="w-60  rounded-lg lg:ml-80  mb-0" alt='' />
                    </div>
                    <div>
                        <h1 className=" font-bold text-lg text-[#077612]">Hello, i'm</h1>
                        <h1 className="text-4xl md:text-6xl font-bold text-white">Lipton Barua</h1>
                        <div className=' text-black mt-2 font-semibold'>
                            Creative Web Designer & Full-Stack-Developer
                        </div>
                        <div className='mt-4'>
                            <button className="text-[#077612] border border-[#077612] hover:bg-[#077612] hover:text-black  font-bold text-sm px-8 py-3 rounded-3xl outline-none  mr-1 mb-1 ease-linear transition-all duration-150" type="button">Hire Me</button>
                            <a href='Lipton Barua Resume.pdf' download='Lipton Barua Resume.pdf'>   <button class="text-black border border-[#077612] hover:bg-[black] hover:text-[#077612] active:bg-[#077612] bg-[#077612] font-bold text-sm px-8 py-3 rounded-3xl  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Get Resume</button></a>
                        </div>

                        <div className='mt-3'>
                            <p>
                                <div className='flex'>
                                  
                                    <a href="https://www.linkedin.com/in/lipton-barua-2818b1259/" target='_blank' className='m-2 text-xl text-black bg-[#077612] p-1 rounded-full'><GrLinkedinOption></GrLinkedinOption></a>
                                    <a href="https://github.com/LiptonBarua" target='_blank' className='m-2 text-xl text-black bg-[#077612] p-1 rounded-full'><GrGithub></GrGithub></a>
                                    <a href="https://www.facebook.com/lipton.barua.33/" target='_blank' className='m-2 text-xl text-black bg-[#077612] p-1 rounded-full'><GrFacebookOption></GrFacebookOption></a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        :
        <div className="backgroundImage py-28 md:py-32 " >


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className='relative'>
                        <img src={image} className="w-60  rounded-lg lg:ml-80  mb-0" alt='' />
                    </div>
                    <div>
                        <h1 className=" font-bold text-lg text-[navy]">Hello, i'm</h1>
                        <h1 className="text-4xl md:text-6xl font-bold text-black">Lipton Barua</h1>
                        <div className=' text-black mt-2 font-semibold'>
                            Creative Web Designer & Full-Stack-Developer
                        </div>
                        <div className='mt-4'>
                            <button className="text-[navy] border border-[navy] hover:bg-[navy] hover:text-white  font-bold text-sm px-8 py-3 rounded-3xl outline-none  mr-1 mb-1 ease-linear transition-all duration-150" type="button">Hire Me</button>
                            <a href='Lipton Barua Resume.pdf' download='Lipton Barua Resume.pdf'>   <button class="text-white border border-[navy] hover:bg-[#DDE4F8] hover:text-[navy] active:bg-[navy] bg-[navy] font-bold text-sm px-8 py-3 rounded-3xl  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Get Resume</button></a>
                        </div>

                        <div className='mt-3'>
                            <p>
                                <div className='flex'>
                                  
                                    <a href="https://www.linkedin.com/in/lipton-barua-2818b1259/" target='_blank' className='m-2 text-xl text-white bg-[navy] p-1 rounded-full'><GrLinkedinOption></GrLinkedinOption></a>
                                    <a href="https://github.com/LiptonBarua" target='_blank' className='m-2 text-xl text-white bg-[navy] p-1 rounded-full'><GrGithub></GrGithub></a>
                                    <a href="https://www.facebook.com/lipton.barua.33/" target='_blank' className='m-2 text-xl text-white bg-[navy] p-1 rounded-full'><GrFacebookOption></GrFacebookOption></a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
}
        
        

        </div>
    );
};

export default Banner;