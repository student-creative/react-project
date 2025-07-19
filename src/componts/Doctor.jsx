import React, { useState, useEffect } from 'react';
import maindoctor from '../img/maindoctor.jpg';
import maindoctor2 from '../img/maindoctor2.jpg';
import maindoctor3 from '../img/maindoctor3.jpg';
import maindoctor4 from '../img/maindoctor4.jpg';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Doctor() {
  const [selectedDept, setSelectedDept] = useState("All Department");

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 50
    });
  }, []);

  const departments = [
    "All Department",
    "Cardiology",
    "Dental",
    "Neurology",
    "Medicine",
    "Pediatric",
    "Traumatology"
  ];

  const doctor = [
    { name: "Thomas Henry", specialization: "Cardiology", image: maindoctor },
    { name: "Harrision Samuel", specialization: "Radiology", image: maindoctor2 },
    { name: "Alexandar James", specialization: "Dental", image: maindoctor3 },
    { name: "Edward john", specialization: "Pediatry", image: maindoctor4 },
    { name: "Thomas Henry", specialization: "Cardiology", image: maindoctor },
    { name: "Henry samuel", specialization: "Palmology", image: maindoctor3 },
    { name: "Thomas alexandar", specialization: "Cardiology", image: maindoctor },
    { name: "HarissonThomas", specialization: "Traumatology", image: maindoctor3 },
    { name: "Jonas Thomson", specialization: "Cardiology", image: maindoctor },
    { name: "Henry Forth", specialization: "Hematology", image: maindoctor },
    { name: "Thomas Henry", specialization: "Dental", image: maindoctor },
  ];

  const filteredDoctors = selectedDept === "All Department"
    ? doctor
    : doctor.filter(doc => doc.specialization === selectedDept);

  return (
    <div>

      {/* Hero Section */}
      <div className="background-image w-screen overflow-x-hidden">
        <div className="relative">
          <img 
            src={require('../img/back.png')} 
            alt="Background" 
            className="w-full h-[200px] md:h-[324px] object-cover transition-all duration-500 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-[#223A66] opacity-90 hover:opacity-85 transition-opacity duration-300"></div>

          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo"
            data-aos="fade-down"
          >
            <span className="text-white text-base md:text-lg hover:text-[#E12454] transition-colors duration-300">All Doctors</span>
            <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454] transition-colors duration-300">Specialized doctors</h1>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="w-full h-auto py-10 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-[1140px]">

          {/* Title */}
          <div className="flex justify-center">
            <div 
              className="w-full md:w-[655px] h-auto text-center space-y-5 md:space-y-7 px-4 mb-10 md:mb-20"
              data-aos="zoom-in"
            >
              <h2 className='text-[#223A66] text-2xl md:text-[40px] font-exo font-bold hover:text-[#E12454] transition-colors duration-300'>
                Doctors
              </h2>
              <div className="flex justify-center">
                <div className="bg-[#E12454] w-10 h-1 hover:w-12 transition-all duration-300"></div>
              </div>
              <p className='text-slate-500 text-sm md:text-base hover:text-[#223A66] transition-colors duration-300'>
                We provide a wide range of creative services. Autem maxime rem modi eaque, voluptate. Beatae officiis neque.
              </p>
            </div>
          </div>

          {/* Department Tabs */}
          <div data-aos="fade-up">
            <ul className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide font-exo font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap">
              {departments.map((dept, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedDept(dept)}
                  className={`p-2 md:p-3 cursor-pointer rounded transition-all duration-300 ${
                    selectedDept === dept 
                      ? 'bg-[#E12454] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#E12454] hover:text-white hover:shadow-md'
                  }`}
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          {/* Doctor Cards */}
          <div 
            className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            data-aos="fade-up"
          >
            {filteredDoctors.map((doc, index) => (
              <div 
                key={`${doc.name}-${index}`} 
                className="bg-white text-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name}
                    className="w-full h-48 md:h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#223A66] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <button className="text-white bg-[#E12454] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
                <div className="p-4 group-hover:bg-[#F4F9FC] transition-colors duration-300">
                  <h3 className="text-lg md:text-xl font-semibold group-hover:text-[#E12454] transition-colors duration-300">{doc.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base group-hover:text-[#223A66] transition-colors duration-300">{doc.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-auto" data-aos="zoom-in-up">
        <img 
          src={require('../img/banner.jpg')} 
          alt="Health banner" 
          className="w-full h-auto object-cover transition-all duration-500 hover:brightness-90"
        />
        <div className="container max-w-[1140px] mx-auto absolute top-0 left-0 right-0 py-12 md:py-20 px-4">
          <div className="w-full md:w-[635px]">
            <div className="bg-[#E12454] w-10 h-1 mb-4 hover:w-12 transition-all duration-300"></div>
            <h2 className="font-exo font-bold text-3xl md:text-5xl text-black mb-4 hover:text-[#E12454] transition-colors duration-300">
              We are pleased to offer you the <span className="text-[#223A66] hover:text-[#E12454] transition-colors duration-300">chance to have the healthy</span>
            </h2>
            <button 
              className='uppercase text-white p-3 md:p-4 px-6 md:px-10 font-exo text-xs md:text-sm font-bold rounded-full bg-[#E12454] hover:bg-[#223A66] hover:shadow-lg hover:scale-105 transition-all duration-300'
            >
               <Link to="/appoinment">get appointment</Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Doctor;