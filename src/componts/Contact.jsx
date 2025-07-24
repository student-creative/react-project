import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { MdPerson, MdEmail } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      ...formData,
      timestamp: new Date().toISOString(), // optional for sorting/filtering later
    };

    const existing = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const updated = [...existing, newMessage];
    localStorage.setItem("contactMessages", JSON.stringify(updated));

    toast.success("Message sent successfully!");

    setFormData({ name: '', email: '', query: '', phone: '', message: '' });
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      {/* Hero Section */}
      <div className="background-image w-screen overflow-x-hidden">
        <div className="relative" data-aos="fade-down">
          <img
            src={require('../img/back.png')}
            alt="Background"
            className="w-full h-[200px] md:h-[324px] object-cover"
          />
          <div className="absolute inset-0 bg-[#223A66] opacity-90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4">
            <span className="text-white text-base md:text-lg hover:text-[#E12454]">Contact Us</span>
            <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454]">Get in Touch</h1>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="w-full h-auto py-12 md:py-20 bg-white px-4 sm:px-6">
        <div className="container max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white border p-6 rounded-md text-center shadow-sm" data-aos="fade-up">
              <div className="text-4xl text-[#E12454] mb-2 flex justify-center"><MdPerson /></div>
              <h5 className="text-base font-semibold mb-1 text-slate-800">Call Us</h5>
              <p className="text-slate-600 text-sm">+823-4565-13456</p>
            </div>

            <div className="bg-white border p-6 rounded-md text-center shadow-sm" data-aos="zoom-in">
              <div className="text-4xl text-[#E12454] mb-2 flex justify-center"><MdEmail /></div>
              <h5 className="text-base font-semibold mb-1 text-slate-800">Email Us</h5>
              <p className="text-slate-600 text-sm">contact@mail.com</p>
            </div>

            <div className="bg-white border p-6 rounded-md text-center shadow-sm" data-aos="fade-left">
              <div className="text-4xl text-[#E12454] mb-2 flex justify-center"><FaLocationDot /></div>
              <h5 className="text-base font-semibold mb-1 text-slate-800">Location</h5>
              <p className="text-slate-600 text-sm">North Main Street, Brooklyn Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="w-full h-auto py-12 md:py-20 bg-white px-4 sm:px-6">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-[655px] text-center space-y-5 px-4 mb-12" data-aos="fade-up">
              <h2 className="text-[#223A66] text-2xl md:text-[40px] font-exo font-bold">Contact Us</h2>
              <div className="line-div flex justify-center mb-3"><div className="bg-[#E12454] w-10 h-1"></div></div>
              <p className="text-slate-500 text-sm md:text-base">
                Have a question? Reach out to us through the form below.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="Your Full Name" className="w-full px-4 py-3 text-sm border border-slate-300 rounded focus:ring-[#E12454]" />
              <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Your Email Address" className="w-full px-4 py-3 text-sm border border-slate-300 rounded focus:ring-[#E12454]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="query" value={formData.query} onChange={handleChange} type="text" placeholder="Your Query Topic" className="w-full px-4 py-3 text-sm border border-slate-300 rounded focus:ring-[#E12454]" />
              <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="Your Phone Number" className="w-full px-4 py-3 text-sm border border-slate-300 rounded focus:ring-[#E12454]" />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-slate-300 rounded-md resize-none text-sm focus:ring-[#E12454]"
              required
            ></textarea>

            <div className="flex justify-center">
              <button type="submit" className="bg-[#223A66] text-white px-6 py-2 rounded-full hover:bg-[#E12454] transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
