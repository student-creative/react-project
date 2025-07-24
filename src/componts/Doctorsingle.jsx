import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoSkype } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { BiChevronRight } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Doctorsingle() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }, []);

    return (
        <div className=" w-screen overflow-x-hidden">
            {/* Hero Section */}
            <div className="background-image">
                <div className="relative">
                    <img 
                        src={require('../img/back.png')} 
                        alt="Background" 
                        className="w-full h-[200px] md:h-[324px] object-cover transition-all duration-500 hover:scale-105"
                        data-aos="fade-in"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#223A66] opacity-90 hover:opacity-85 transition-opacity duration-300"></div>

                    {/* Centered Text */}
                    <div 
                        className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo"
                        data-aos="fade-up"
                    >
                        <span className="text-white text-base md:text-lg hover:text-[#E12454] transition-colors duration-300">Doctor Details</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454] transition-colors duration-300">Alexandar james</h1>
                    </div>
                </div>
            </div>

            {/* Doctor Profile Section */}
            <div className="section-award w-full h-auto py-12 md:py-20 bg-white px-4">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row">
                    <div 
                        className="w-full md:w-[380px] h-auto px-4 mb-8 md:mb-0"
                        data-aos="fade-right"
                    >
                        <div className="image group overflow-hidden rounded-lg">
                            <img 
                                className='object-cover w-full h-[300px] md:h-[350px] rounded-lg transition-all duration-500 group-hover:scale-110' 
                                src={require('../img/team1.jpg')} 
                                alt="Doctor" 
                            />
                        </div>
                        <div className="text-doctor mt-5">
                            <h4 className='font-exo font-bold text-xl md:text-2xl hover:text-[#E12454] transition-colors duration-300'>Alexandar james</h4>
                            <p className='text-slate-500 hover:text-[#223A66] transition-colors duration-300'>Orthopedic Surgary</p>
                        </div>
                        <div className="icon flex mt-5 mb-4 gap-3 text-lg">
                            <GrFacebookOption className="hover:text-[#E12454] hover:scale-125 transition-all duration-300" />
                            <TiSocialTwitter className="hover:text-[#E12454] hover:scale-125 transition-all duration-300" />
                            <IoLogoSkype className="hover:text-[#E12454] hover:scale-125 transition-all duration-300" />
                            <FaLinkedin className="hover:text-[#E12454] hover:scale-125 transition-all duration-300" />
                            <IoLogoPinterest className="hover:text-[#E12454] hover:scale-125 transition-all duration-300" />
                        </div>
                    </div>

                    <div 
                        className="w-full md:w-[760px] h-auto px-4"
                        data-aos="fade-left"
                    >
                        <h2 className='font-exo text-2xl md:text-3xl font-bold mb-2 hover:text-[#E12454] transition-colors duration-300'>Introducing to myself</h2>
                        <div className="bg-[#E12454] w-10 h-1 my-4 md:my-8 hover:w-12 transition-all duration-300"></div>
                        <p className='text-slate-500 mb-4 hover:text-[#223A66] transition-colors duration-300'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi?
                        </p>
                        <p className='text-slate-500 mb-6 hover:text-[#223A66] transition-colors duration-300'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?
                        </p>
                        <button className='uppercase text-white bg-[#E12454] hover:bg-[#223A66] px-6 md:px-8 text-xs md:text-sm font-exo font-bold py-2 md:p-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <Link to="/appoinment">Make appointment</Link> 
                            <i className='text-lg md:text-xl transform hover:translate-x-1 transition-transform duration-300'><BiChevronRight /></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="section-award w-full h-auto py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto">
                    <h2 
                        className='text-xl md:text-2xl font-exo font-bold mb-4 hover:text-[#E12454] transition-colors duration-300'
                        data-aos="fade-up"
                    >
                        My Educational Qualifications
                    </h2>
                    <div 
                        className="bg-[#E12454] w-10 h-1 my-4 md:my-5 hover:w-12 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    ></div>

                    <div 
                        className="flex flex-col md:flex-row"
                        data-aos="fade-up"
                    >
                        <div className="w-full md:w-1/2 h-auto pr-0 md:pr-8">
                            <div className="mb-8 md:mb-10 hover:-translate-y-1 transition-transform duration-300">
                                <span className='text-slate-500 font-bold hover:text-[#223A66] transition-colors duration-300'>Year(2005-2007)</span>
                                <h4 className='text-[#223A66] font-exo font-bold text-xl md:text-2xl mb-4 hover:text-[#E12454] transition-colors duration-300'>MBBS, M.D at University of Wyoming</h4>
                                <p className='mb-5 text-slate-500 hover:text-[#223A66] transition-colors duration-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!
                                </p>
                            </div>
                            <div className="hover:-translate-y-1 transition-transform duration-300">
                                <span className='text-slate-500 font-bold hover:text-[#223A66] transition-colors duration-300'>Year(2007-2009)</span>
                                <h4 className='text-[#223A66] font-exo font-bold text-xl md:text-2xl mb-4 hover:text-[#E12454] transition-colors duration-300'>M.D. of Netherland Medical College</h4>
                                <p className='mb-5 text-slate-500 hover:text-[#223A66] transition-colors duration-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 h-auto pl-0 md:pl-8">
                            <div className="mb-8 md:mb-10 hover:-translate-y-1 transition-transform duration-300">
                                <span className='text-slate-500 font-bold hover:text-[#223A66] transition-colors duration-300'>Year(2009-2010)</span>
                                <h4 className='text-[#223A66] font-exo font-bold text-xl md:text-2xl mb-4 hover:text-[#E12454] transition-colors duration-300'>MBBS, M.D at University of Japan</h4>
                                <p className='mb-5 text-slate-500 hover:text-[#223A66] transition-colors duration-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!
                                </p>
                            </div>
                            <div className="hover:-translate-y-1 transition-transform duration-300">
                                <span className='text-slate-500 font-bold hover:text-[#223A66] transition-colors duration-300'>Year(2010-2011)</span>
                                <h4 className='text-[#223A66] font-exo font-bold text-xl md:text-2xl mb-4 hover:text-[#E12454] transition-colors duration-300'>M.D. of Canada Medical College</h4>
                                <p className='mb-5 text-slate-500 hover:text-[#223A66] transition-colors duration-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills and Appointment Section */}
            <div className="section-award w-full h-auto py-12 md:py-20 bg-white px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div 
                            className="w-full md:w-[380px] h-auto px-4 hover:-translate-y-2 transition-transform duration-300"
                            data-aos="fade-right"
                        >
                            <h3 className='text-xl md:text-2xl font-bold font-exo hover:text-[#E12454] transition-colors duration-300'>My skills</h3>
                            <div className="bg-[#E12454] w-10 h-1 my-4 md:my-5 hover:w-12 transition-all duration-300"></div>
                            <p className='text-slate-500 text-base md:text-[17px] hover:text-[#223A66] transition-colors duration-300'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.
                            </p>
                        </div>

                        <div 
                            className="w-full md:w-[380px] h-auto px-4 hover:-translate-y-2 transition-transform duration-300"
                            data-aos="fade-up"
                        >
                            <h3 className='font-exo font-bold text-xl md:text-2xl mb-4 md:mb-5 hover:text-[#E12454] transition-colors duration-300'>Expertise area</h3>
                            <ul className='space-y-3 mb-8 md:mb-10'>
                                {[
                                    'International Drug Database',
                                    'Stretchers and Stretcher Accessories',
                                    'Cushions and Mattresses',
                                    'Cholesterol and lipid tests',
                                    'Critical Care Medicine Specialists',
                                    'Emergency Assistance'
                                ].map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <FaCheck className='text-[#E12454] text-sm hover:scale-125 transition-transform duration-300' />
                                        <li className='text-slate-500 hover:text-[#223A66] transition-colors duration-300'>{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div 
                            className="w-full md:w-[380px] h-auto bg-[#F4F9FC] rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            data-aos="fade-left"
                        >
                            <div className="p-5">
                                <h5 className='text-lg md:text-xl font-exo font-bold pb-3 mb-4 hover:text-[#E12454] transition-colors duration-300'>Make Appoinment</h5>
                                <div className="bg-[#E12454] w-10 h-1 mb-5 hover:w-12 transition-all duration-300"></div>
                                <ul className='font-roboto space-y-3'>
                                    <li className='flex justify-between py-1 hover:text-[#E12454] transition-colors duration-300'>Monday - Friday<span className='font-semibold hover:text-[#223A66] transition-colors duration-300'>9:00 - 17:00</span></li>
                                    <li className='flex justify-between py-1 hover:text-[#E12454] transition-colors duration-300'>Saturday<span className='font-semibold hover:text-[#223A66] transition-colors duration-300'>9:00 - 16:00</span></li>
                                    <li className='flex justify-between py-1 hover:text-[#E12454] transition-colors duration-300'>Sunday<span className='font-semibold hover:text-[#223A66] transition-colors duration-300'>Closed</span></li>
                                </ul>
                                <div className="mt-5">
                                    <p className='text-slate-500 hover:text-[#223A66] transition-colors duration-300'>Need Urgent Help?</p>
                                    <h3 className='font-exo text-[#E12454] text-xl md:text-2xl font-bold hover:text-[#223A66] transition-colors duration-300'>+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Doctorsingle