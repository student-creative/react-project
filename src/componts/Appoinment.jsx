import React, { useEffect } from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import Footer from './Footer';
import Bookingform from "./Bookingform";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Appoinment() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  }, []);

  return (
    <div>
      {/* Background */}
      <div className="background-image w-screen overflow-x-hidden">
        <div className="relative">
          <img 
            src={require('../img/back.png')} 
            alt="Background" 
            className="w-full h-[200px] md:h-[324px] object-cover transition-all duration-500 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-[#223A66] opacity-90 hover:opacity-85 transition-opacity duration-300"></div>
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4"
            data-aos="fade-down"
          >
            <span className="text-white text-base md:text-lg hover:text-[#E12454] transition-colors duration-300">Book your Seat</span>
            <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454] transition-colors duration-300">Appoinment</h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="section-award w-full h-auto py-10 md:py-20 px-4 sm:px-6">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Emergency Service Info */}
            <div 
              className="w-full lg:w-[350px] h-auto px-3 text-center lg:text-left hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-right"
            >
              <RiCustomerService2Fill className='text-slate-500 text-5xl md:text-6xl mb-3 md:mb-4 mx-auto lg:mx-0 hover:text-[#E12454] hover:scale-110 transition-all duration-300' />
              <span className='font-bold text-lg md:text-[22px] hover:text-[#223A66] transition-colors duration-300'>Call for an Emergency Service!</span>
              <h2 className='text-[#223A66] mt-2 md:mt-3 mb-2 text-2xl md:text-4xl font-bold hover:text-[#E12454] transition-colors duration-300'>
                +84 789 1256
              </h2>
            </div>

            {/* Appointment Form */}
            <div 
              className="w-full lg:w-[650px] h-auto px-0 md:px-4 rounded hover:shadow-xl transition-all duration-300"
              data-aos="fade-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#223A66] font-exo font-bold mb-3 md:mb-4 hover:text-[#E12454] transition-colors duration-300">
                Book an appointment
              </h2>
              <p className="text-slate-500 text-sm md:text-base mb-4 md:mb-6 hover:text-[#223A66] transition-colors duration-300">
                Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti
                qui velit. Iste dolorum atque similique praesentium soluta.
              </p>
              <Bookingform />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Appoinment;