import React from 'react'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="w-screen overflow-x-hidden">
            {/* Hero Section */}
            <div className="background-image">
                <div className="relative">
                    <img
                        src={require('../img/back.png')}
                        alt="Background"
                        className="w-full h-[200px] md:h-[324px] object-cover hover:scale-105 transition-transform duration-500"
                        data-aos="fade-in"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#223A66] opacity-90"></div>

                    {/* Centered Text */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <span className="text-white text-base md:text-lg hover:text-[#E12454]">Our services</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold capitalize mt-2 hover:text-[#E12454]">what we do</h1>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="w-full h-auto py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service Card 1 */}
                        <div
                            className="card1 w-full h-auto shadow-xl my-4 md:my-10 p-6 md:p-10 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                        >
                            <img src={require('../img/img1.jpg')} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>Child care</h4>
                            <p className='text-slate-500'>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service Card 2 */}
                        <div
                            className="card1 w-full h-auto shadow-xl my-4 md:my-10 p-6 md:p-10 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img src={require('../img/img2.jpg')} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>Child care</h4>
                            <p className='text-slate-500'>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service Card 3 */}
                        <div
                            className="card1 w-full h-auto shadow-xl my-4 md:my-10 p-6 md:p-10 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img src={require('../img/img3.jpg')} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>Child care</h4>
                            <p className='text-slate-500'>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service Card 4 */}
                        <div
                            className="card1 w-full h-auto shadow-xl my-4 md:my-10 p-6 md:p-10 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <img src={require('../img/img4.jpg')} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>Child care</h4>
                            <p className='text-slate-500'>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service Card 5 */}
                        <div
                            className="card1 w-full h-auto shadow-xl my-4 md:my-10 p-6 md:p-10 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <img src={require('../img/img5.jpg')} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>Child care</h4>
                            <p className='text-slate-500'>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service Card 6 */}
                        <div
                            className="card1 w-full h-auto shadow-xl my-4 md:my-10 p-6 md:p-10 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <img src={require('../img/img6.jpg')} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>Child care</h4>
                            <p className='text-slate-500'>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="relative w-full h-auto hover:scale-105 transition-transform duration-500" data-aos="zoom-in-up">
                <img
                    src={require('../img/banner.jpg')}
                    alt="Health banner"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="container max-w-[1140px] mx-auto absolute top-0 left-0 right-0 py-12 md:py-20 px-4 hover:scale-105 transition-transform duration-500">
                    <div className="w-full md:w-[635px]">
                        <div className="bg-[#E12454] w-10 h-1 mb-4 hover:scale-105 transition-transform duration-500"></div>
                        <h2 className="font-exo font-bold text-3xl md:text-5xl text-black mb-4 hover:scale-105 transition-transform duration-500">
                            We are pleased to offer you the <span className="text-[#223A66]">chance to have the healthy</span>
                        </h2>
                        <button
                            className='uppercase text-white p-3 md:p-4 px-6 md:px-10 font-exo text-xs md:text-sm font-bold rounded-full bg-[#E12454] hover:bg-[#223A66] hover:scale-105 transition-transform duration-300'
                        >
                            <Link to="/appoinment">get appointment</Link>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Services