import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from '../../../assets/Image/contact.svg'
import { toast } from 'react-toastify';
// import { Player } from '@lottiefiles/react-lottie-player';



const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbch8yl', 'template_gwmk065', form.current, 'Mwbeb29rmiwI4XusA')
            .then((result) => {
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
            
        e.target.reset();
        toast.success('message success')
    }
    return (
        <div className='bg-[#e6ebf6] py-20' id='contact'>
           <section className="py-6  dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
		<div className="py-6 md:py-0 md:px-6">
            <p className="pt-2 pb-4 text-[navy] font-bold">Contact Me</p>
			<h1 className="text-4xl text-black pb-4 font-bold">Get in Touch</h1>
			<div className="space-y-4">
                	<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>01638776808</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>liptonbarua274@gmail.com</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Kadalpur, Raozan, Chittagong, Bangladesh</span>
				</p>
			
			</div>
		</div>
        <form ref={form} onSubmit={sendEmail}>
                                <div className=''>
                                    <div>
                                        <p>Name</p>
                                        <input className='block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' type="text" name='user_name' placeholder="Name" required />
                                    </div>
                                    <div>
                                        <p>Email</p>
                                        <input className='block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' type="email" name='user_email' placeholder="Email" required />
                                    </div>

                                    <div>
                                        <p>Phone</p>
                                        <input className='block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' type="phone" name="user_phone" placeholder="Phone" required />
                                    </div>
                                    <div>
                                        <p>Message</p>
                                        <textarea className='block w-full pl-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' rows="4" name='message' placeholder="Message" required></textarea>
                                    </div>
                                    <div className='mt-3'>
                                        <button className='text-white border border-[navy] bg-[navy]  font-bold uppercase text-xs px-7 py-3 rounded  mr-1 mb-1'>Submit</button>

                                    </div>

                                </div>
                            </form>
	</div>
</section>
        </div>
    );
};

export default EmailContactForm;




// <div className="bg-[#DDE4F8] mt-32 px-16" id='contact'>
// <div className=''>
//     <div>
//     <h2 className="lg-view">Contact Me</h2>
//     </div>
// </div>

//                 <div className="form-container flex justify-between">
//                     <div >
//                         <div className=" px-4">
//                             <div className="flex py-5 pl-5 space-x-4 bg-[#b7c0d9] w-full items-center">
//                                 <div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 bg-white p-1">
//                                         <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
//                                     </svg>

//                                 </div>
//                                 <div>
//                                     <h4 className="text-gray-600">01638776808</h4>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className="flex justify-between p-4">
//                             <div className="flex py-5 pl-5 space-x-4 bg-[#b7c0d9] w-full items-center">
//                                 <div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 bg-white p-1">
//                                         <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//                                         <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
//                                     </svg>


//                                 </div>
//                                 <div>
//                                     <h4 className="text-gray-600">liptonbarua274@gmail.com</h4>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className="flex justify-between px-4">
//                             <div className="flex py-5 pl-5 space-x-4 bg-[#b7c0d9] w-full items-center">
//                                 <div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 bg-white p-1">
//                                         <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//                                     </svg>


//                                 </div>
//                                 <div>
//                                     <h4 className="text-gray-600">Kadalpur,Raozan,Chittagong,Bangladesh</h4>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                     <div >
//                     <form ref={form} onSubmit={sendEmail}>
//                                 <div className=''>
                                    


//                                     <div>


//                                         <p>Name</p>
//                                         <input className='w-full' type="text" name='user_name' placeholder="Name" required />
//                                     </div>
//                                     <div>
//                                         <p>Email</p>
//                                         <input type="email" name='user_email' placeholder="Email" required />
//                                     </div>

//                                     <div>
//                                         <p>Phone</p>
//                                         <input type="phone" name="user_phone" placeholder="Phone" required />
//                                     </div>
//                                     <div>
//                                         <p>Message</p>
//                                         <textarea rows="4" name='message' placeholder="Message" required></textarea>
//                                     </div>
//                                     <div className=''>
//                                         <button className='text-[navy] border border-[navy] hover:bg-[navy] hover:text-white  font-bold uppercase text-xs px-4 py-3 rounded outline-none  mr-1 mb-1'>Submit</button>

//                                     </div>

//                                 </div>
//                             </form>
//                     </div>
//                 </div>
//             </div>