import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="bg-gray-50">
            <div className="w-full h-auto py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-col md:flex-row flex-wrap gap-8">
                        {/* About Section */}
                        <div 
                            className="w-full md:w-[350px] h-auto px-4"
                            data-aos="fade-up"
                        >
                            <div className="logo mb-5">
                                <img src={require('../img/novena.png')} alt="Novena Logo" className="h-10" />
                            </div>
                            <p className='text-slate-500 text-base md:text-lg'>
                                Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
                            </p>
                        </div>

                        {/* Department Section */}
                        <div 
                            className="w-full md:w-[200px] h-auto px-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h4 className='text-[#223A66] text-xl md:text-2xl font-exo font-bold mb-4'>Department</h4>
                            <div className="bg-[#E12454] w-10 h-1 mb-4"></div>
                            <ul className='text-slate-500 space-y-3 text-sm md:text-[15px]'>
                                <li>Surgery</li>
                                <li>Wome's Health</li>
                                <li>Radiology</li>
                                <li>Cardioc</li>
                                <li>Medicine</li>
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div 
                            className="w-full md:w-[200px] h-auto px-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h4 className='text-[#223A66] text-xl md:text-2xl font-exo font-bold mb-4'>Support</h4>
                            <div className="bg-[#E12454] w-10 h-1 mb-4"></div>
                            <ul className='text-slate-500 space-y-2 font-roboto text-sm md:text-[16px]'>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Company Support</li>
                                <li>FAQuestions</li>
                                <li>Company Licence</li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div 
                            className="w-full md:w-[255px] h-auto px-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h4 className='text-[#223A66] text-xl md:text-2xl font-exo font-bold mb-4'>Get in Touch</h4>
                            <div className="bg-[#E12454] w-10 h-1 mb-4"></div>
                            <span className='flex items-center text-sm md:text-[16px] font-semibold font-exo text-slate-500 gap-2'>
                                <i><MdEmail /></i>Support Available for 24/7
                            </span>
                            <h3 className='text-black text-lg md:text-xl font-exo font-bold my-3'>Support@email.com</h3>
                            <div className="icon flex items-center gap-2">
                                <i className='text-slate-500 text-xl'><MdOutlineSupportAgent /></i>
                                <span className='text-sm md:text-[16px] font-semibold font-exo text-slate-500'>Mon to Fri : 08:30 - 18:00</span>
                            </div>
                            <h3 className='text-black text-lg md:text-xl font-exo font-bold my-3'>+23-456-6588</h3>
                        </div>
                    </div>

                    <div className="mt-10" data-aos="fade-up">
                        <hr className='border-gray-200' />
                    </div>

                    <div className="main-footer py-6 mt-8 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div 
                            className="text-footer text-center md:text-left"
                            data-aos="fade-right"
                        >
                            <span className='text-slate-500 text-sm md:text-base'>© Copyright Reserved to</span> <span className="text-[#E12454]">Novena</span> by <a className='font-semibold' href="https://themefisher.com/">Themefisher</a>
                        </div>

                        <div 
                            className="w-full md:w-[500px]"
                            data-aos="fade-left"
                        >
                            <div className="relative w-full h-[50px] md:h-[60px]">
                                <input
                                    type="text"
                                    placeholder="Your Email Address"
                                    className="bg-white rounded-full p-4 md:p-6 w-full h-full pr-24 border border-gray-300 focus:border-[#E12454] focus:outline-none transition"
                                />
                                <button
                                    className="absolute uppercase right-1 md:right-2 top-1/2 -translate-y-1/2 text-white bg-[#E12454] font-semibold px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-[#223A66] transition text-xs md:text-sm"
                                >
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="text-center mt-4 md:mt-0"
                        data-aos="fade-up"
                    >
                        <h3 className='text-slate-500 text-sm md:text-base'>
                            Distributed by <a className='font-semibold text-black' href="https://themefisher.com/">Themefisher</a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer