import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BiChevronDown, BiMenu } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative z-40">
      {/* Top Bar */}
      <div className="w-full h-[40px] md:h-[50px] bg-[#223A66] py-2 flex justify-center items-center" data-aos="fade-down">
        <div className="w-full max-w-[1140px] px-4 h-[30px] flex items-center justify-between">
          <div className="address flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="icon-text flex items-center gap-2">
              <i className='text-white text-sm md:text-md'><BiSolidMessageRoundedDetail /></i>
              <Link className='text-white text-xs md:text-sm relative font-roboto -translate-y-[2px]'>support@novena.com</Link>
            </div>
            <div className="icon-text flex items-center gap-2">
              <i className='text-white text-sm md:text-md'><MdLocationOn /></i>
              <Link className='text-white text-xs md:text-sm relative font-roboto -translate-y-[2px]'>Address Ta-134/A, New York, USA</Link>
            </div>
          </div>
          <div className="contact hidden md:block">
            <h2 className='capitalize text-white font-semibold text-sm md:text-base font-roboto'>
              call now :<span className='font-exo text-lg md:text-[22px]'> 823-4565-13456</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Subnavbar */}
      <div className="subnavbar w-full px-4 py-3 bg-white shadow-sm relative z-50" data-aos="fade-down" data-aos-delay="100">
        <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between">
          <div className="logo">
            <img src={require('../img/novena.png')} alt="Novena Logo" className="h-10 md:h-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <BiMenu />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className='flex space-x-6 lg:space-x-12 text-black font-roboto'>
              <li><Link to="/" className="hover:text-[#E12454] transition font-exo font-semibold">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E12454] transition font-exo font-semibold">About</Link></li>
              <li><Link to="/services" className="hover:text-[#E12454] transition font-exo font-semibold">Services</Link></li>

              {/* Department Dropdown */}
              <li className="relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}>
                <div className="flex items-center gap-1 hover:text-[#E12454] cursor-pointer">
                  <span className='font-exo font-semibold'>Department</span>
                  <BiChevronDown />
                </div>
                <div className={`absolute left-0 top-full mt-2 w-[250px] bg-white border-t-4 border-[#E12454] shadow-lg rounded-md z-[999] transition-all duration-300 ease-in-out ${showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <ul className="p-2">
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/departments">Departments</Link></li>
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/departmentssingle">Departments Single</Link></li>
                  </ul>
                </div>
              </li>

              {/* Doctor Dropdown */}
              <li className="relative group"
                  onMouseEnter={() => setShowDoctorDropdown(true)}
                  onMouseLeave={() => setShowDoctorDropdown(false)}>
                <div className="flex items-center gap-1 hover:text-[#E12454] cursor-pointer">
                  <span className='font-exo font-semibold'>Doctor</span>
                  <BiChevronDown />
                </div>
                <div className={`absolute left-0 top-full mt-2 w-[180px] bg-white border-t-4 border-[#E12454] shadow-lg rounded-md z-[999] transition-all duration-300 ease-in-out ${showDoctorDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <ul className="p-2">
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/doctor">Doctor</Link></li>
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/doctorsingle">Doctor Single</Link></li>
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/appoinment">Appoinment</Link></li>
                  </ul>
                </div>
              </li>

              {/* Blog Dropdown */}
              <li className="relative group"
                  onMouseEnter={() => setShowBlogDropdown(true)}
                  onMouseLeave={() => setShowBlogDropdown(false)}>
                <div className="flex items-center gap-1 hover:text-[#E12454] cursor-pointer">
                  <span className='font-exo font-semibold'>Blog</span>
                  <BiChevronDown />
                </div>
                <div className={`absolute left-0 top-full mt-2 w-[220px] bg-white border-t-4 border-[#E12454] shadow-lg rounded-md z-[999] transition-all duration-300 ease-in-out ${showBlogDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <ul className="p-2">
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/blogslidebar">Blog With Slider</Link></li>
                    <li className="py-2 px-4 opacity-55 hover:bg-gray-100 hover:text-[#E12454] transition"><Link to="/blogsingle">Blog Single</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link to="/contact" className="hover:text-[#E12454] transition font-exo font-semibold">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Dropdowns */}
      <div className={`md:hidden bg-white shadow-lg w-full absolute z-[999] transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="p-4 font-exo font-semibold space-y-4">
          <li><Link to="/" className="block py-2 hover:text-[#E12454]">Home</Link></li>
          <li><Link to="/about" className="block py-2 hover:text-[#E12454]">About</Link></li>
          <li><Link to="/services" className="block py-2 hover:text-[#E12454]">Services</Link></li>

          {/* Department Mobile Dropdown */}
          <li>
            <div onClick={() => setShowDropdown(!showDropdown)} className="flex justify-between items-center py-2 cursor-pointer hover:text-[#E12454]">
              <span>Department</span>
              <BiChevronDown className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </div>
            {showDropdown && (
              <ul className="ml-4 text-sm space-y-2">
                <li><Link to="/departments" className="block hover:text-[#E12454]">Departments</Link></li>
                <li><Link to="/departmentssingle" className="block hover:text-[#E12454]">Departments Single</Link></li>
              </ul>
            )}
          </li>

          {/* Doctor Mobile Dropdown */}
          <li>
            <div onClick={() => setShowDoctorDropdown(!showDoctorDropdown)} className="flex justify-between items-center py-2 cursor-pointer hover:text-[#E12454]">
              <span>Doctor</span>
              <BiChevronDown className={`transition-transform ${showDoctorDropdown ? 'rotate-180' : ''}`} />
            </div>
            {showDoctorDropdown && (
              <ul className="ml-4 text-sm space-y-2">
                <li><Link to="/doctor" className="block hover:text-[#E12454]">Doctor</Link></li>
                <li><Link to="/doctorsingle" className="block hover:text-[#E12454]">Doctor Single</Link></li>
                <li><Link to="/appoinment" className="block hover:text-[#E12454]">Appoinment</Link></li>
              </ul>
            )}
          </li>

          {/* Blog Mobile Dropdown */}
          <li>
            <div onClick={() => setShowBlogDropdown(!showBlogDropdown)} className="flex justify-between items-center py-2 cursor-pointer hover:text-[#E12454]">
              <span>Blog</span>
              <BiChevronDown className={`transition-transform ${showBlogDropdown ? 'rotate-180' : ''}`} />
            </div>
            {showBlogDropdown && (
              <ul className="ml-4 text-sm space-y-2">
                <li><Link to="/blogslidebar" className="block hover:text-[#E12454]">Blog With Slider</Link></li>
                <li><Link to="/blogsingle" className="block hover:text-[#E12454]">Blog Single</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="block py-2 hover:text-[#E12454]">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
