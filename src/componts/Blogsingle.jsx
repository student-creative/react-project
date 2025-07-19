import React, { useEffect } from 'react'
import { MdOutlineInsertComment, MdBuild } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BiChevronRight } from 'react-icons/bi';
import { FiShare2 } from "react-icons/fi";  
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialTwitter } from 'react-icons/ti';
import { IoLogoSkype, IoLogoPinterest } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blogsingle() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }, []);

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

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#223A66] opacity-90 hover:opacity-85 transition-opacity duration-300"></div>

                    {/* Centered Text */}
                    <div 
                        className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4"
                        data-aos="fade-down"
                    >
                        <span className="text-white text-base md:text-lg hover:text-[#E12454] transition-colors duration-300">News details</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 hover:text-[#E12454] transition-colors duration-300">Blog Single</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="section-award w-full h-auto py-10 md:py-20 bg-white px-4 sm:px-6">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Blog Content - Full width on mobile, 2/3 on desktop */}
                        <div className="w-full lg:w-[66.666%]">
                            {/* Blog Post */}
                            <div 
                                className="w-full h-auto px-0 md:px-4 mb-10 md:mb-14"
                                data-aos="fade-right"
                            >
                                {/* Featured Image */}
                                <div className="image rounded-lg overflow-hidden group">
                                    <img 
                                        className='w-full h-auto md:h-[400px] lg:h-[486px] object-cover transition-all duration-500 group-hover:scale-110' 
                                        src={require('../img/blog.jpg')} 
                                        alt="Healthy environment" 
                                    />
                                </div>

                                {/* Meta Info */}
                                <div className="icon mt-4 mb-4 flex flex-wrap gap-3 md:gap-4">
                                    <span className='flex items-center gap-2 text-slate-500 text-sm md:text-base hover:text-[#E12454] transition-colors duration-300'>
                                        <MdBuild className='hover:scale-125 transition-transform duration-300' />Equipment
                                    </span>
                                    <span className='flex items-center gap-2 text-slate-500 text-sm md:text-base hover:text-[#E12454] transition-colors duration-300'>
                                        <MdOutlineInsertComment className='hover:scale-125 transition-transform duration-300' />5 Comments
                                    </span>
                                    <span className='flex items-center gap-2 text-slate-500 text-sm md:text-base hover:text-[#E12454] transition-colors duration-300'>
                                        <SlCalender className='hover:scale-125 transition-transform duration-300' />28th January
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className='font-exo text-2xl md:text-3xl lg:text-4xl font-semibold hover:text-[#E12454] my-3 md:my-5 transition-colors duration-300'>
                                    Healthy environment to care with modern equipment
                                </h2>

                                {/* Excerpt */}
                                <p className='text-lg md:text-xl text-slate-500 mb-5 hover:text-[#223A66] transition-colors duration-300'>
                                    Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!
                                </p>

                                {/* Content */}
                                <p className='text-slate-500 text-base md:text-lg mb-5 hover:text-[#223A66] transition-colors duration-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.
                                </p>

                                {/* Blockquote */}
                                <div className="flex items-start gap-3 md:gap-4 my-5 md:my-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="bg-[#E12454] w-1 h-24 md:h-40 hover:h-44 transition-all duration-300"></div>
                                    <i className="text-gray-700 max-w-md text-base md:text-lg p-4 md:p-6 lg:p-10 hover:text-[#223A66] transition-colors duration-300">
                                        A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.
                                    </i>
                                </div>

                                {/* Read More Button */}
                                <button className='uppercase text-white bg-[#223A66] hover:bg-[#E12454] px-6 md:px-8 mb-5 text-xs md:text-sm font-exo font-bold py-2 md:p-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                    Read More <i className='text-xl transform hover:translate-x-1 transition-transform duration-300'><BiChevronRight /></i>
                                </button>

                                {/* More Content */}
                                <p className='text-slate-500 text-base md:text-lg mb-5 hover:text-[#223A66] transition-colors duration-300'>
                                    The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.
                                </p>
                                <p className='text-slate-500 text-sm md:text-[17px] mb-5 hover:text-[#223A66] transition-colors duration-300'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.
                                </p>

                                {/* Tags and Share */}
                                <div className="flex flex-col sm:flex-row justify-between mt-8 md:mt-10 gap-4">
                                    <ul className='flex items-center flex-wrap gap-2 md:gap-3'>
                                        <li className='text-sm md:text-base'><a href="#advancher" className='hover:text-[#E12454] transition-colors duration-300'>Advancher</a></li>
                                        <li className='text-sm md:text-base'><a href="#advancher" className='hover:text-[#E12454] transition-colors duration-300'>Landscape</a></li>
                                        <li className='text-sm md:text-base'><a href="#advancher" className='hover:text-[#E12454] transition-colors duration-300'>Travel</a></li>
                                    </ul>
                                    <ul className='flex items-center gap-2 md:gap-3'>
                                        <span className='text-sm md:text-base'>Share:</span>
                                        <GrFacebookOption className='text-base md:text-lg hover:text-[#E12454] hover:scale-125 cursor-pointer transition-all duration-300' />
                                        <TiSocialTwitter className='text-base md:text-lg hover:text-[#E12454] hover:scale-125 cursor-pointer transition-all duration-300' />
                                        <IoLogoSkype className='text-base md:text-lg hover:text-[#E12454] hover:scale-125 cursor-pointer transition-all duration-300' />
                                        <FaLinkedin className='text-base md:text-lg hover:text-[#E12454] hover:scale-125 cursor-pointer transition-all duration-300' />
                                        <IoLogoPinterest className='text-base md:text-lg hover:text-[#E12454] hover:scale-125 cursor-pointer transition-all duration-300' />
                                    </ul>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div 
                                className="w-full h-auto mt-8 md:mt-10"
                                data-aos="fade-up"
                            >
                                <h4 className='font-exo font-bold text-lg md:text-xl mb-4 hover:text-[#E12454] transition-colors duration-300'>2 Comments on Healthy environment...</h4>
                                
                                {/* Comment 1 */}
                                <div className="flex items-start gap-3 md:gap-4 mb-8 md:mb-10 hover:-translate-y-1 transition-transform duration-300">
                                    {/* Avatar */}
                                    <div className="w-12 md:w-16 h-12 md:h-16 rounded-full overflow-hidden flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                        <img src={require('../img/person.jpg')} alt="John" className="w-full h-full object-cover" />
                                    </div>

                                    {/* Comment Content */}
                                    <div className="flex flex-col">
                                        <h5 className="font-semibold text-slate-800 text-base md:text-lg hover:text-[#E12454] transition-colors duration-300">John</h5>
                                        <div className="text-xs md:text-sm text-slate-500 hover:text-[#223A66] transition-colors duration-300">
                                            <span>United Kingdom</span>
                                            <span className="mx-1 md:mx-2">|</span>
                                            <span>Posted April 7, 2019</span>
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2 text-slate-600 text-xs md:text-sm cursor-pointer hover:text-slate-800 transition-colors duration-300">
                                            <FiShare2 className="text-sm md:text-base hover:scale-125 transition-transform duration-300" />
                                            <span>Reply</span>
                                        </div>
                                        <p className="mt-2 md:mt-3 text-slate-500 text-sm md:text-base max-w-md hover:text-[#223A66] transition-colors duration-300">
                                            Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis.
                                        </p>
                                    </div>
                                </div>

                                {/* Comment 2 */}
                                <div className="flex items-start gap-3 md:gap-4 hover:-translate-y-1 transition-transform duration-300">
                                    {/* Avatar */}
                                    <div className="w-12 md:w-16 h-12 md:h-16 rounded-full overflow-hidden flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                        <img src={require('../img/person2.jpg')} alt="Philip W" className="w-full h-full object-cover" />
                                    </div>

                                    {/* Comment Content */}
                                    <div className="flex flex-col">
                                        <h5 className="font-semibold text-slate-800 text-base md:text-lg hover:text-[#E12454] transition-colors duration-300">Philip W</h5>
                                        <div className="text-xs md:text-sm text-slate-500 hover:text-[#223A66] transition-colors duration-300">
                                            <span>United Kingdom</span>
                                            <span className="mx-1 md:mx-2">|</span>
                                            <span>Posted April 7, 2019</span>
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2 text-slate-600 text-xs md:text-sm cursor-pointer hover:text-slate-800 transition-colors duration-300">
                                            <FiShare2 className="text-sm md:text-base hover:scale-125 transition-transform duration-300" />
                                            <span>Reply</span>
                                        </div>
                                        <p className="mt-2 md:mt-3 text-slate-500 text-sm md:text-base max-w-md hover:text-[#223A66] transition-colors duration-300">
                                            Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Comment Form */}
                            <div 
                                className="w-full my-8 md:my-10"
                                data-aos="fade-up"
                            >
                                <form id="comment-form" className="space-y-4 md:space-y-6">
                                    <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-slate-800 hover:text-[#E12454] transition-colors duration-300">Write a comment</h4>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name:"
                                                className="w-full px-3 md:px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E12454] text-sm md:text-base transition-all duration-300 hover:border-[#E12454]"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="mail"
                                                id="mail"
                                                placeholder="Email:"
                                                className="w-full px-3 md:px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E12454] text-sm md:text-base transition-all duration-300 hover:border-[#E12454]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            name="comment"
                                            id="comment"
                                            rows="4"
                                            placeholder="Comment"
                                            className="w-full px-3 md:px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E12454] resize-none text-sm md:text-base transition-all duration-300 hover:border-[#E12454]"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <input
                                            type="submit"
                                            name="submit-contact"
                                            id="submit_contact"
                                            value="Submit Message"
                                            className="bg-[#E12454] text-white px-4 md:px-6 py-2 rounded-full hover:bg-[#c91f48] hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-sm md:text-base"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar - Full width on mobile, 1/3 on desktop */}
                        <div className="w-full lg:w-[33.333%] h-auto pl-0 lg:pl-5">
                            {/* Search */}
                            <div 
                                className="search pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-left"
                            >
                                <h5 className='font-exo font-bold text-lg md:text-xl hover:text-[#E12454] transition-colors duration-300'>Search Here</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-3 md:my-4 hover:w-12 transition-all duration-300"></div>
                                <form className="w-full mt-3 md:mt-4">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full px-3 md:px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E12454] text-sm md:text-base transition-all duration-300 hover:border-[#E12454]"
                                    />
                                </form>
                            </div>

                            {/* Popular Posts */}
                            <div 
                                className="popular-post pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <h5 className='font-exo font-bold text-lg md:text-xl hover:text-[#E12454] transition-colors duration-300'>Popular Posts</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-3 md:my-4 hover:w-12 transition-all duration-300"></div>
                                
                                <div className="py-2 md:py-3 border-b border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                                    <span className='text-slate-500 text-xs md:text-sm hover:text-[#223A66] transition-colors duration-300'>03 Mar 2018</span>
                                    <h6 className='font-exo font-bold text-base md:text-lg mt-1 hover:text-[#E12454] transition-colors duration-300'>Thoughtful living in los Angeles</h6>
                                </div>
                                
                                <div className="py-2 md:py-3 border-b border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                                    <span className='text-slate-500 text-xs md:text-sm hover:text-[#223A66] transition-colors duration-300'>03 Mar 2018</span>
                                    <h6 className='font-exo font-bold text-base md:text-lg mt-1 hover:text-[#E12454] transition-colors duration-300'>Vivamus molestie gravida turpis.</h6>
                                </div>
                                
                                <div className="py-2 md:py-3 hover:-translate-y-1 transition-transform duration-300">
                                    <span className='text-slate-500 text-xs md:text-sm hover:text-[#223A66] transition-colors duration-300'>03 Mar 2018</span>
                                    <h6 className='font-exo font-bold text-base md:text-lg mt-1 hover:text-[#E12454] transition-colors duration-300'>Fusce lobortis lorem at ipsum semper sagittis</h6>
                                </div>
                            </div>

                            {/* Categories */}
                            <div 
                                className="categories pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <h5 className='font-exo font-bold text-lg md:text-xl hover:text-[#E12454] transition-colors duration-300'>Categories</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-3 md:my-4 hover:w-12 transition-all duration-300"></div>
                                <ul className='space-y-2 md:space-y-3'>
                                    <li className="flex justify-between items-center hover:-translate-x-1 transition-transform duration-300">
                                        <a href="#/medicine" className="hover:text-[#E12454] transition-colors duration-300 text-sm md:text-base">
                                            Medicine
                                        </a>
                                        <span className='text-slate-500 text-xs md:text-sm'>(14)</span>
                                    </li>
                                    <li className="flex justify-between items-center hover:-translate-x-1 transition-transform duration-300">
                                        <a href="#/equipments" className="hover:text-[#E12454] transition-colors duration-300 text-sm md:text-base">
                                            Equipments
                                        </a>
                                        <span className='text-slate-500 text-xs md:text-sm'>(2)</span>
                                    </li>
                                    <li className="flex justify-between items-center hover:-translate-x-1 transition-transform duration-300">
                                        <a href="#/heart" className="hover:text-[#E12454] transition-colors duration-300 text-sm md:text-base">
                                            Heart
                                        </a>
                                        <span className='text-slate-500 text-xs md:text-sm'>(10)</span>
                                    </li>
                                    <li className="flex justify-between items-center hover:-translate-x-1 transition-transform duration-300">
                                        <a href="#/free-counselling" className="hover:text-[#E12454] transition-colors duration-300 text-sm md:text-base">
                                            Free counselling
                                        </a>
                                        <span className='text-slate-500 text-xs md:text-sm'>(5)</span>
                                    </li>
                                    <li className="flex justify-between items-center hover:-translate-x-1 transition-transform duration-300">
                                        <a href="#/lab-test" className="hover:text-[#E12454] transition-colors duration-300 text-sm md:text-base">
                                            Lab test
                                        </a>
                                        <span className='text-slate-500 text-xs md:text-sm'>(5)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tags */}
                            <div 
                                className="categories pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <h5 className='font-exo font-bold text-lg md:text-xl hover:text-[#E12454] transition-colors duration-300'>Tags</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-3 md:my-4 hover:w-12 transition-all duration-300"></div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
                                    {['doctors', 'agency', 'company', 'medicine', 'surgery', 'marketing', 'social media', 'branding', 'laboratory'].map((tag, index) => (
                                        <a 
                                            key={index} 
                                            href={`#/${tag}`} 
                                            className="uppercase p-2 md:p-3 bg-slate-100 hover:bg-slate-200 hover:scale-105 rounded-full text-center transition-all duration-300"
                                        >
                                            <span className="text-xs md:text-sm opacity-75 font-roboto">{tag}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Time Schedule */}
                            <div 
                                className="w-full h-auto bg-[#F4F9FC] p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-left"
                                data-aos-delay="400"
                            >
                                <h5 className='text-lg md:text-xl font-exo font-bold pb-2 md:pb-3 mb-3 md:mb-4 hover:text-[#E12454] transition-colors duration-300'>Time Schedule</h5>
                                <div className="bg-[#E12454] w-10 h-1 mb-3 md:mb-4 hover:w-12 transition-all duration-300"></div>
                                <ul className='font-roboto space-y-2 md:space-y-3'>
                                    <li className='flex justify-between py-1 md:py-2 text-sm md:text-base hover:text-[#E12454] transition-colors duration-300'>
                                        Monday - Friday
                                        <span className='text-slate-500 hover:text-[#223A66] transition-colors duration-300'>9:00 - 17:00</span>
                                    </li>
                                    <li className='flex justify-between py-1 md:py-2 text-sm md:text-base hover:text-[#E12454] transition-colors duration-300'>
                                        Saturday
                                        <span className='text-slate-500 hover:text-[#223A66] transition-colors duration-300'>9:00 - 16:00</span>
                                    </li>
                                    <li className='flex justify-between py-1 md:py-2 text-sm md:text-base hover:text-[#E12454] transition-colors duration-300'>
                                        Sunday
                                        <span className='text-slate-500 hover:text-[#223A66] transition-colors duration-300'>Closed</span>
                                    </li>
                                </ul>
                                <div className="mt-4 md:mt-5">
                                    <p className='text-slate-500 text-sm md:text-base hover:text-[#223A66] transition-colors duration-300'>Need Urgent Help?</p>
                                    <h3 className='font-exo text-xl md:text-2xl font-bold hover:text-[#E12454] transition-colors duration-300'>+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <section 
                className="py-8 md:py-10 bg-white px-4 sm:px-6"
                data-aos="fade-up"
            >
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Call Us Card */}
                        <div className="bg-white border border-slate-200 p-6 md:p-8 lg:p-10 rounded-md text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="text-3xl text-[#E12454] mb-2 hover:scale-125 transition-transform duration-300">
                                <i className="icofont-live-support"></i>
                            </div>
                            <h5 className="text-base md:text-lg font-semibold mb-1 text-slate-800 hover:text-[#E12454] transition-colors duration-300">Call Us</h5>
                            <p className="text-slate-600 text-sm md:text-base hover:text-[#223A66] transition-colors duration-300">+823-4565-13456</p>
                        </div>

                        {/* Email Us Card */}
                        <div className="bg-white border border-slate-200 p-6 md:p-8 lg:p-10 rounded-md text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="text-3xl text-[#E12454] mb-2 hover:scale-125 transition-transform duration-300">
                                <i className="icofont-support-faq"></i>
                            </div>
                            <h5 className="text-base md:text-lg font-semibold mb-1 text-slate-800 hover:text-[#E12454] transition-colors duration-300">Email Us</h5>
                            <p className="text-slate-600 text-sm md:text-base hover:text-[#223A66] transition-colors duration-300">contact@mail.com</p>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white border border-slate-200 p-6 md:p-8 lg:p-10 rounded-md text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="text-3xl text-[#E12454] mb-2 hover:scale-125 transition-transform duration-300">
                                <i className="icofont-location-pin"></i>
                            </div>
                            <h5 className="text-base md:text-lg font-semibold mb-1 text-slate-800 hover:text-[#E12454] transition-colors duration-300">Location</h5>
                            <p className="text-slate-600 text-sm md:text-base hover:text-[#223A66] transition-colors duration-300">North Main Street, Brooklyn Australia</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Blogsingle