import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CardProjects from '../CardProject/CardProject';
import ContactForm from '../ContactForm/ContactForm';
import Skill from '../Skill/Skill';

const Home = () => {
    const cards= useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10'>
              {
                 cards?.map(card=><CardProjects key={card._id} card={card}></CardProjects>)
               }
            </div>
            <Skill></Skill>
            <ContactForm></ContactForm>
          
        </div>
    );
};

export default Home;