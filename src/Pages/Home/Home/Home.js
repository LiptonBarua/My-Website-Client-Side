import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CardProjects from '../CardProject/CardProject';
// import CardProjects from '../CardProject/CardProjects';
import EmailContactForm from '../EmailContactForm/EmailContactForm';
import Skill from '../Skill/Skill';
import SmallBanner from '../SmallBanner/SmallBanner';

const Home = () => {
    const cards= useLoaderData();
    return (
        <div className=''>
            <Banner></Banner>
            <About className='lg:max-w-[90%] mx-auto'></About>
            <Skill></Skill>
            <SmallBanner></SmallBanner>
            <div className='lg:max-w-[90%] mx-auto'>
             <h1 className='uppercase text-[navy] font-semibold'>My Works</h1>
             <h2 className='text-2xl font-bold text-black'>Latest Project</h2>
            <div className='px-4 lg:px-0 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
              {
                 cards?.map(card=><CardProjects key={card._id} card={card}></CardProjects>)
               }
            </div>
            </div>
        
            <EmailContactForm></EmailContactForm>
            
        </div>
    );
};

export default Home;