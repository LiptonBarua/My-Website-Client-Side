import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbch8yl', 'template_gwmk065', form.current, 'Mwbeb29rmiwI4XusA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className=' my-20'>
            <h1 className='my-10 text-3xl text-center font-bold divider'>Contact From</h1>
            <form ref={form} onSubmit={sendEmail}>

                <div className='md:flex justify-center'>
                    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 py-16 rounded-2xl'>
                        <div className="col-span-full sm:col-span-3 mx-5">
                            <label for="lastname" className="text-black font-bold">Name</label><br></br>
                            <input type="text" name="user_name" placeholder="Name" className="input input-bordered w-full md:w-96" />
                        </div>
                        <div className="col-span-full sm:col-span-3 m-5">
                            <label for="lastname" className="text-black font-bold">Email</label><br></br>
                            <input type="email" name="user_email" placeholder="Email" className="input input-bordered w-full md:w-96" />
                        </div>
                        <div className="col-span-full sm:col-span-3 mx-5">
                            <label for="lastname" className="text-black font-bold">Message</label><br></br>
                            <textarea type="text" name="message" placeholder="Message" className="input input-bordered w-full md:w-96" />
                        </div>
                        <div className="form-control mt-6 mx-5">
                                    <button className="btn btn-warning text-xl">Send</button>
                                </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;