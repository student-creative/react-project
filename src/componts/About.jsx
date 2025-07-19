import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    const testimonials = [
        {
            title: 'Good Support!',
            name: 'Kolis Mullar',
            desc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.',
        },
        {
            title: 'Amazing Team!',
            name: 'Sarah Jones',
            desc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod',
        },
        {
            title: 'Professional Work!',
            name: 'David Miller',
            desc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.',
        },
    ];

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
                    <div className="absolute inset-0 bg-[#223A66] opacity-90"></div>
                    <div 
                        className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <span className="text-white text-base md:text-lg hover:text-[#E12454]">about us</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454]">about us</h1>
                    </div>
                </div>
            </div>

            {/* Personal Care Section */}
            <div className="w-full h-auto py-12 md:py-20 bg-white px-4">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row">
                    <div 
                        className="w-full md:w-[350px] h-auto px-4 mb-6 md:mb-0 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-right"
                    >
                        <h2 className='text-[#223A66] font-exo text-3xl md:text-4xl font-bold mb-3'>Personal care for your healthy living</h2>
                    </div>
                    <div 
                        className="w-full md:w-[790px] h-auto px-4 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-left"
                    >
                        <p className='text-slate-500 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
                        <div className="icon">
                            <img src={require('../img/sign.png')} alt="" className="hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full h-auto bg-white px-4">
                <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { img: 'img1.jpg', title: 'Healthcare for Kids' },
                        { img: 'img2.jpg', title: 'Medical Counseling' },
                        { img: 'img3.jpg', title: 'Modern Equipments' },
                        { img: 'img4.jpg', title: 'Qualified Doctors' }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="w-full h-auto p-4 hover:scale-105 transition-transform duration-500"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img src={require(`../img/${item.img}`)} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                            <h4 className='font-exo font-bold text-xl mb-2 mt-4'>{item.title}</h4>
                            <p className='text-slate-500'>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Doctors Achievements */}
            <div className="w-full h-auto py-12 md:py-20 bg-white px-4">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center">
                    <div 
                        className="w-full md:w-[350px] h-auto px-4 mb-8 md:mb-0 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-right"
                    >
                        <h2 className="text-[#223A66] text-3xl md:text-5xl font-exo font-bold">
                            Our Doctors achievements
                        </h2>
                    </div>
                    <div 
                        className="w-full md:w-[790px] h-auto hover:scale-105 transition-transform duration-500"
                        data-aos="fade-left"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['icon2.png', 'icon3.png', 'icon4.png', 'icon5.png', 'icon6.png', 'icon7.png'].map((icon, index) => (
                                <div 
                                    key={index}
                                    className="bg-[#EFF0F3] p-4 shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-500"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <img src={require(`../img/${icon}`)} alt="icon" className="w-auto h-16 md:h-24 hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Specialists */}
            <div className="section-award w-full bg-white h-auto py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div 
                        className="text-center mb-12 md:mb-20 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <h2 className='text-[#223A66] text-3xl md:text-[40px] mb-4 font-exo font-bold'>
                            Meet Our Specialist
                        </h2>
                        <div className="flex justify-center mb-5">
                            <div className="bg-[#E12454] w-10 h-1 hover:scale-105 transition-transform duration-500"></div>
                        </div>
                        <p className='text-slate-500 mb-4'>
                            Today's users expect effortless experiences. Don't let essential people and processes stay stuck in the past. Speed it up, skip the hassles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['doc1.jpg', 'doc2.jpg', 'doc3.jpg', 'doc4.jpg'].map((doc, index) => (
                            <div 
                                key={index}
                                className="p-4 hover:scale-105 transition-transform duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img src={require(`../img/${doc}`)} alt="" className="w-full hover:scale-105 transition-transform duration-500" />
                                <h2 className='font-exo font-bold text-lg mt-6'>John Marshal</h2>
                                <p className='text-slate-500 mb-4'>Internist, Emergency Physician</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full h-auto bg-white py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-10">
                    <div 
                        className="w-full md:w-[450px] hover:scale-105 transition-transform duration-500"
                        data-aos="fade-right"
                    >
                        <img
                            className="w-full h-[200px] md:h-[300px] object-cover scale-150 hover:scale-[1.6] transition-transform duration-500"
                            src={require('../img/back2.jpg')}
                            alt=""
                        />
                    </div>
                    <div 
                        className="w-full md:w-[540px] h-auto md:h-[320px] px-0 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-left"
                    >
                        <div className="mb-8 md:mb-10 text-left">
                            <h2 className="font-exo font-bold text-3xl md:text-4xl text-[#223A66] mb-3">
                                What they say about us
                            </h2>
                            <div className="bg-[#E12454] w-10 h-1 hover:scale-105 transition-transform duration-500"></div>
                        </div>
                        <Swiper
                            direction="vertical"
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            modules={[Autoplay, Pagination]}
                            className="h-[200px] hover:scale-105 transition-transform duration-500"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index} className="hover:scale-105 transition-transform duration-500">
                                    <div className="clent-info">
                                        <h2 className="font-exo text-xl md:text-2xl font-bold">{item.title}</h2>
                                        <span className="text-slate-500">{item.name}</span>
                                    </div>
                                    <p className="text-slate-500 text-base md:text-lg mt-2">{item.desc}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default About