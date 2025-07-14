
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { FaHospital } from "react-icons/fa";
import { TbClock } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import CountUp from 'react-countup';
import { FaFlask } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { FaHeartPulse } from "react-icons/fa6";
import { GiScalpel } from 'react-icons/gi';
import { GiTooth } from "react-icons/gi";
import { GiBrain } from 'react-icons/gi';
import { PiStairsLight } from 'react-icons/pi';
import { MdCall } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import doctor1 from '../img/doctor1.jpg';
import doctor2 from '../img/doctor2.jpg';
import doctor3 from '../img/doctor3.jpg';
import icon from '../img/icon.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from './Footer';
import Bookingform from './Bookingform';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,     // speed of animation
            once: true,        // only once
            offset: 50,        // reduced from default 120 to 50 for quicker trigger
        });

    }, []);

    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div className='w-screen overflow-x-hidden'>
            {/* Hero Section */}
       <div className="slider-image">
  <div className="h-[400px] sm:h-screen relative">
    <img 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
      src={require('../img/slider.png')} 
      alt="Slider" 
    />

    <div className="absolute font-exo top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 max-w-[1140px]">
      <div 
        className="right-side py-12 md:py-24 w-full md:w-[570px] hover:scale-105 transition-transform duration-500"
        data-aos="fade-right"
      >
        <div className="bg-[#E12454] w-10 h-1 mb-3"></div>
        <span className="text-sm md:text-base text-slate-500 uppercase font-roboto">
          Total Health care solution
        </span>
        <h1 className='capitalize my-3 md:my-5 text-3xl md:text-5xl lg:text-6xl font-bold font-exo text-[#223A66]'>
          Your most trusted health partner
        </h1>
        <p className='pr-0 md:pr-10 mb-3 md:mb-5 text-[#6F8BA4] text-sm md:text-[16px] font-roboto'>
          A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
        </p>
        <button className='uppercase text-white bg-[#E12454] px-6 md:px-8 text-xs md:text-sm font-exo font-bold py-2 md:p-3 rounded-full flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-300'>
          <Link to="/appoinment"> Make appointment </Link>
          <i className='text-lg md:text-xl'><BiChevronRight /></i>
        </button>
      </div>
    </div>
  </div>
</div>


            {/* Icon Cards */}
            <div className="flex flex-col md:flex-row gap-4 justify-center px-4 -mt-10 md:-mt-16">
                {/* Card 1 */}
                <div
                    className="w-full md:w-[350px] h-[350px] bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-500"
                    data-aos="fade-up"
                >
                    <div className="mb-5">
                        <i className='text-5xl text-[#223A66]'>
                            <FaHospital />
                        </i>
                    </div>
                    <span className='text-slate-500 text-[18px] font-roboto'>24 Hours Service</span>
                    <h4 className='mb-4 text-[#223A66] font-exo font-bold text-[22px]'>Online Appointment</h4>
                    <div className="text-slate-500 space-y-3 font-roboto mb-6">
                        <p className='text-[15px]'>Get all time support for emergency. We have</p>
                        <p className='text-[15px]'>introduced the principle of family medicine.</p>
                    </div>
                    <button className='uppercase text-white p-3 md:p-4 px-6 md:px-8 font-exo text-xs md:text-[13px] font-bold rounded-full bg-[#223A66] hover:bg-[#E12454] transform duration-300 hover:scale-105'>
                        <Link to="/appoinment"> Make an Appointment</Link>
                    </button>
                </div>

                {/* Card 2 */}
                <div
                    className="w-full md:w-[350px] h-[350px] bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-500"
                    data-aos="fade-up"
                >
                    <div className="mb-5">
                        <i className='text-5xl text-[#223A66]'>
                            <TbClock />
                        </i>
                    </div>
                    <span className='text-slate-500 text-[18px] font-roboto'>Timing schedule</span>
                    <h4 className='mb-4 text-[#223A66] font-exo font-bold text-[22px]'>Working Hours</h4>
                    <ul className='text-slate-500 font-roboto'>
                        <li className='flex justify-between py-2'>Sun - Wed: <span>8:00 - 17:00</span></li>
                        <li className='flex justify-between py-2'>Thu - Fri: <span>9:00 - 17:00</span></li>
                        <li className='flex justify-between py-2'>Sat - Sun: <span>10:00 - 17:00</span></li>
                    </ul>
                </div>

                {/* Card 3 */}
                <div
                    className="w-full md:w-[350px] h-[350px] bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-500"
                    data-aos="fade-up"
                >
                    <div className="mb-5">
                        <i className='text-5xl text-[#223A66]'>
                            <IoMdContact />
                        </i>
                    </div>
                    <h4 className='text-slate-500 text-[18px] font-roboto'>Emergency Cases</h4>
                    <h2 className='mb-4 text-[#223A66] font-exo font-bold text-[22px]'>1-800-700-6200</h2>
                    <div className="text-slate-500 space-y-3 font-roboto mb-6">
                        <p className='text-[14px]'>Get all-time support for emergency. We have</p>
                        <p className='text-[14px]'>introduced the principle of family medicine.</p>
                        <p className='text-[14px]'>Connected with us for any urgency.</p>
                    </div>
                </div>
            </div>

            {/* Personal Care Section */}
            <div className="w-full py-12 md:py-24 px-4">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div
                        className="flex flex-col md:flex-row gap-5 mb-8 md:mb-0"
                        data-aos="fade-right"
                    >
                        <div>
                            <img className='w-full md:w-[350px] h-[312px] object-cover hover:scale-105 transition-transform duration-500' src={require('../img/girl.jpg')} alt="" />
                            <img className='w-full md:w-[350px] h-[312px] mt-5 object-cover hover:scale-105 transition-transform duration-500' src={require('../img/team.jpg')} alt="" />
                        </div>
                        <img className='w-full md:w-[350px] h-[500px] object-cover mt-5 md:mt-0 hover:scale-105 transition-transform duration-500' src={require('../img/doctor.jpg')} alt="" />
                    </div>
                    <div
                        className="w-full md:w-[350px] px-4 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-left"
                    >
                        <h2 className='text-[#223A66] font-exo text-3xl md:text-[43px] font-bold'>Personal care <br /> & healthy living</h2>
                        <p className="mt-6 mb-12 text-slate-500 font-roboto">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                        <button className='uppercase text-white bg-[#E12454] px-6 md:px-7 text-xs md:text-sm font-exo font-bold py-2 md:p-3 rounded-full flex items-center gap-2 md:gap-3 hover:bg-[#223A66] transform duration-300 hover:scale-105'>
                            <Link to="/services">Services</Link><i className='text-lg md:text-xl'><BiChevronRight /></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full py-12 md:py-16  px-4" ref={ref}>
                <div className="max-w-[1140px] mx-auto flex bg-[#223A66] flex-col md:flex-row">
                    <div
                        className="w-full md:w-[277px] py-8 md:py-12 flex flex-col items-center space-y-3 md:space-y-5 hover:scale-105 transition-transform duration-500"
                        data-aos="zoom-in"
                    >
                        <span className='text-4xl md:text-6xl text-white font-exo font-semibold leading-none'>
                            {inView && <CountUp end={58} duration={2} />}<sub className="text-sm md:text-[16px] text-slate-300">k</sub>
                        </span>
                        <p className='text-slate-300'>Happy People</p>
                    </div>
                    <div
                        className="w-full md:w-[277px] py-8 md:py-12 flex flex-col items-center space-y-3 md:space-y-5 hover:scale-105 transition-transform duration-500"
                        data-aos="zoom-in"
                    >
                        <span className='text-4xl md:text-6xl text-white font-exo font-semibold leading-none'>
                            {inView && <CountUp end={700} duration={2.5} />}<sub className="text-sm md:text-[16px] text-slate-300">+</sub>
                        </span>
                        <p className='text-slate-300'>Surgery Completed</p>
                    </div>
                    <div
                        className="w-full md:w-[277px] py-8 md:py-12 flex flex-col items-center space-y-3 md:space-y-5 hover:scale-105 transition-transform duration-500"
                        data-aos="zoom-in"
                    >
                        <span className='text-4xl md:text-6xl text-white font-exo font-semibold leading-none'>
                            {inView && <CountUp end={40} duration={2} />}<sub className="text-sm md:text-[16px] text-slate-300">+</sub>
                        </span>
                        <p className='text-slate-300'>Expert Doctors</p>
                    </div>
                    <div
                        className="w-full md:w-[277px] py-8 md:py-12 flex flex-col items-center space-y-3 md:space-y-5 hover:scale-105 transition-transform duration-500"
                        data-aos="zoom-in"
                    >
                        <span className='text-4xl md:text-6xl text-white font-exo font-semibold leading-none'>
                            {inView && <CountUp end={20} duration={2} />}
                        </span>
                        <p className='text-slate-300'>Worldwide Branch</p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div
                        className="text-center mb-12 md:mb-20 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <h2 className='text-[#223A66] text-3xl md:text-[40px] mb-4 font-exo font-bold' data-aos="fade-up" data-aos-delay="100">
                            Award winning patient care
                        </h2>
                        <div className="flex justify-center mb-5" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-[#E12454] w-10 h-1"></div>
                        </div>
                        <p className='text-slate-500 mb-4' data-aos="fade-up" data-aos-delay="300">
                            Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {/* Service 1 */}
                        <div
                            className="w-full h-[240px] p-8 md:p-10 bg-white rounded-md hover:scale-105 transition-transform duration-500"
                            data-aos="zoom-in"
                        >
                            <div className="flex gap-5 mb-5">
                                <FaFlask className="text-[#E12454] text-5xl font-light" />
                                <h2 className='font-exo text-xl font-bold'>Laboratory services</h2>
                            </div>
                            <p className="text-slate-500">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service 2 */}
                        <div
                            className="w-full h-[240px] p-8 md:p-10 bg-white rounded-md hover:scale-105 transition-transform duration-500"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <div className="flex gap-5 mb-5">
                                <FaHeartPulse className="text-[#E12454] text-5xl font-light" />
                                <h2 className='font-exo text-xl font-bold'>Heart Care</h2>
                            </div>
                            <p className="text-slate-500">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service 3 */}
                        <div
                            className="w-full h-[240px] p-8 md:p-10 bg-white rounded-md hover:scale-105 transition-transform duration-500"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="flex gap-5 mb-5">
                                <GiTooth className="text-[#E12454] text-5xl font-light" />
                                <h2 className='font-exo text-xl font-bold'>Dental Care</h2>
                            </div>
                            <p className="text-slate-500">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service 4 */}
                        <div
                            className="w-full h-[240px] p-8 md:p-10 bg-white rounded-md hover:scale-105 transition-transform duration-500"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <div className="flex gap-5 mb-5">
                                <GiScalpel className="text-[#E12454] text-5xl font-light" />
                                <h2 className='font-exo text-xl font-bold'>Surgery</h2>
                            </div>
                            <p className="text-slate-500">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service 5 */}
                        <div
                            className="w-full h-[240px] p-8 md:p-10 bg-white rounded-md hover:scale-105 transition-transform duration-500"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <div className="flex gap-5 mb-5">
                                <GiBrain className="text-[#E12454] text-5xl font-light" />
                                <h2 className='font-exo text-xl font-bold'>Neurology</h2>
                            </div>
                            <p className="text-slate-500">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>

                        {/* Service 6 */}
                        <div
                            className="w-full h-[240px] p-8 md:p-10 bg-white rounded-md hover:scale-105 transition-transform duration-500"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <div className="flex gap-5 mb-5">
                                <PiStairsLight className="text-[#E12454] text-5xl font-light" />
                                <h2 className='font-exo text-xl font-bold'>Physiotherapy</h2>
                            </div>
                            <p className="text-slate-500">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Appointment Section */}
            <div className="w-full py-12 md:py-20 bg-white px-4">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row">
                    <div
                        className="w-full md:w-[540px] h-[500px] md:h-[655px] px-4 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-right"
                    >
                        <div className="relative h-full">
                            <img className='object-cover w-full h-full' src={require('../img/doctor.jpg')} alt="" />
                            <div className="bg-[#223A66] w-full md:w-[485px] p-8 md:p-10 h-auto absolute bottom-5 left-0 md:left-5">
                                <span className='flex text-white items-center text-3xl md:text-5xl font-exo font-bold'>
                                    <i className='mr-3'><MdCall /></i>+23 345 67980
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-[540px] px-4 mt-8 md:mt-0 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-left"
                    >
                        <h2 className="text-3xl md:text-5xl text-[#223A66] font-exo font-bold mb-4">
                            Book Appointment
                        </h2>
                        <p className="text-slate-500 mb-6 font-roboto">
                            Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti
                            qui velit. Iste dolorum atque similique praesentium soluta.
                        </p>
                        <Bookingform />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full py-12 md:py-20 px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div
                        className="text-center mb-12 md:mb-20 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <h2 className='text-[#223A66] text-3xl md:text-5xl mb-4 font-exo font-bold'>
                            We served over 5000+ Patients
                        </h2>
                        <div className="flex justify-center mb-5" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-[#E12454] w-10 h-1"></div>
                        </div>
                        <p className='text-slate-500 mb-4 font-roboto' data-aos="fade-up" data-aos-delay="200">
                            Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
                        </p>
                    </div>

                    <div
                        className="flex hover:scale-105 transition-transform duration-500 font-roboto"
                        data-aos="fade-up"
                    >
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            loop={true}
                            autoplay={{ delay: 4000 }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="bg-white w-full md:w-[530px] h-auto p-8 md:p-10 rounded-lg flex flex-col md:flex-row items-start gap-4 md:gap-6">
                                    <img src={doctor1} alt="Partho Sarothiasdasda" className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover hover:scale-105 transition-transform duration-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold">Amazing service!!</h3>
                                        <p className="mt-2 text-gray-600">Partho Sarothiasdasda</p>
                                        <p className="mt-3 text-gray-600">They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-white w-full md:w-[530px] h-auto p-8 md:p-10 rounded-lg flex flex-col md:flex-row items-start gap-4 md:gap-6">
                                    <img src={doctor2} alt="Kolis Mullar" className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover hover:scale-105 transition-transform duration-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold">Nice Environment!</h3>
                                        <p className="mt-2 text-gray-600">Kolis Mullar</p>
                                        <p className="mt-3 text-gray-600">They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-white w-full md:w-[530px] h-auto p-8 md:p-10 rounded-lg flex flex-col md:flex-row items-start gap-4 md:gap-6">
                                    <img src={doctor3} alt="Mullar Sarth" className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover hover:scale-105 transition-transform duration-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold">Expert doctors!</h3>
                                        <p className="mt-2 text-gray-600">Mullar Sarth</p>
                                        <p className="mt-3 text-gray-600">They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="w-full py-12 md:py-20 bg-white px-4">
                <div className="max-w-[1140px] mx-auto">
                    <div
                        className="text-center mb-12 md:mb-20 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <h2 className='text-[#223A66] text-3xl md:text-5xl mb-4 font-exo font-bold'>
                            Partners who support us
                        </h2>
                        <div className="flex justify-center mb-5" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-[#E12454] w-10 h-1"></div>
                        </div>
                        <p className='text-slate-500 mb-4 font-roboto' data-aos="fade-up" data-aos-delay="200">
                            Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
                        </p>
                    </div>

                    <div
                        className="w-full mt-6 md:mt-10 hover:scale-105 transition-transform duration-500"
                        data-aos="fade-up"
                    >
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                            }}
                        >
                            <SwiperSlide className="flex justify-center items-center">
                                <img src={icon} alt="Partner 1" className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105" />
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center">
                                <img src={icon2} alt="Partner 2" className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105" />
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center">
                                <img src={icon3} alt="Partner 3" className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105" />
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center">
                                <img src={icon4} alt="Partner 4" className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105" />
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center">
                                <img src={icon5} alt="Partner 5" className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105" />
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center">
                                <img src={icon6} alt="Partner 6" className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;