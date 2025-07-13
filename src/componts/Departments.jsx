import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Departments() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="background-image">
                <div className="relative">
                    <img 
                        src={require('../img/back.png')} 
                        alt="Background" 
                        className="w-full h-[200px] md:h-[324px] object-cover transition-all duration-500 hover:scale-105" 
                        data-aos="fade"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#223A66] opacity-90 hover:opacity-85 transition-opacity duration-300"></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4">
                        <span className="text-white text-base md:text-lg hover:text-[#E12454] transition-colors duration-300" data-aos="fade-up">All Department</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454] transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">Care Department</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="section-award w-full h-auto py-10 md:py-20 px-4 sm:px-6">
                <div className="container max-w-[1140px] mx-auto h-auto">
                    {/* Header Section */}
                    <div className="flex justify-center">
                        <div className="w-full md:w-[655px] h-auto text-center space-y-5 md:space-y-7 px-4 mb-10 md:mb-20">
                            <div className="section-title">
                                <h2 className='text-[#223A66] text-2xl md:text-[40px] mb-3 md:mb-4 font-exo font-bold hover:text-[#E12454] transition-colors duration-300' data-aos="fade-up">
                                    Award winning patient care
                                </h2>
                            </div>

                            <div className="line-div flex justify-center mb-4 md:mb-5" data-aos="fade-up" data-aos-delay="100">
                                <div className="bg-[#E12454] w-10 h-1 hover:w-12 transition-all duration-300"></div>
                            </div>

                            <div className="text-award" data-aos="fade-up" data-aos-delay="200">
                                <p className='text-slate-500 text-sm md:text-base mb-4 hover:text-[#223A66] transition-colors duration-300'>
                                    Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Department Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
                        {[
                            { img: 'img1.jpg', title: 'Child care' },
                            { img: 'img2.jpg', title: 'Child care' },
                            { img: 'img3.jpg', title: 'Child care' },
                            { img: 'img4.jpg', title: 'Child care' },
                            { img: 'img5.jpg', title: 'Child care' },
                            { img: 'img6.jpg', title: 'Child care' }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="card1 w-full h-auto px-2 sm:px-4 mb-8 sm:mb-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img 
                                    className='w-full h-[200px] sm:h-[220px] md:h-[251px] object-cover rounded-lg transition-all duration-500 hover:scale-105'
                                    src={require(`../img/${item.img}`)} 
                                    alt={item.title} 
                                />
                                <h4 className='font-exo font-bold text-lg md:text-xl mb-2 mt-4 hover:text-[#E12454] transition-colors duration-300'>{item.title}</h4>
                                <p className='text-slate-500 text-sm md:text-base mb-4 md:mb-5 hover:text-[#223A66] transition-colors duration-300'>
                                    Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                </p>
                                <a 
                                    href="department-single.html" 
                                    className="font-roboto font-semibold text-sm md:text-base inline-flex items-center gap-1 hover:text-[#E12454] transition-all duration-300 group"
                                >
                                    Learn More 
                                    <i className='text-xl transform group-hover:translate-x-1 transition-all duration-300'><BiChevronRight/></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Departments