import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingForm() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    hour: '',
    minute: '',
    ampm: '',
    fullName: '',
    phone: '',
    message: '',
    email: ''
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedDepartments = JSON.parse(localStorage.getItem('departmentsData')) || [];
    const storedDoctors = JSON.parse(localStorage.getItem('doctorsData')) || [];

    setDepartments(storedDepartments);
    setDoctors(storedDoctors);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedTime = `${formData.hour}:${formData.minute} ${formData.ampm}`;
    const formDataWithFormattedTime = {
      ...formData,
      time: formattedTime
    };

    const userKey = `${formData.fullName}_${formData.phone}`;
    const existingBooking = localStorage.getItem(userKey);

    if (existingBooking) {
      toast.error('❗ You have already booked an appointment.');
    } else {
      localStorage.setItem(userKey, JSON.stringify(formDataWithFormattedTime));
      toast.success('✅ Appointment booked successfully!');

      emailjs.sendForm(
        'service_bs8g7wt',
        'template_205novc',
        formRef.current,
        'UgUKGHQJciMLNhl07'
      ).then((result) => {
        console.log("✅ Email sent:", result.text);
      }).catch((error) => {
        console.error("❌ Email error:", error.text);
        toast.error("❌ Failed to send confirmation email.");
      });

      setFormData({
        department: '',
        doctor: '',
        date: '',
        hour: '',
        minute: '',
        ampm: '',
        fullName: '',
        phone: '',
        message: '',
        email: ''
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ToastContainer position="top-center" autoClose={4000} />

      <form ref={formRef} className="space-y-3 md:space-y-4 font-roboto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="relative">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-slate-500 appearance-none"
              required
            >
              <option value="" disabled>Choose Department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-slate-500 appearance-none"
              required
            >
              <option value="" disabled>Select Doctor</option>
              {doctors.map((doc, index) => (
                <option key={index} value={doc.name}>{doc.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-gray-700"
            required
          />

          <div className="flex gap-2">
            <select
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              className="w-1/3 border border-gray-300 rounded px-3 py-3 text-sm bg-[#F4F9FC] text-gray-700"
              required
            >
              <option value="" disabled>HH</option>
              {[...Array(12)].map((_, i) => {
                const hour = i + 1;
                return <option key={hour} value={hour}>{hour}</option>;
              })}
            </select>

            <select
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              className="w-1/3 border border-gray-300 rounded px-3 py-3 text-sm bg-[#F4F9FC] text-gray-700"
              required
            >
              <option value="" disabled>MM</option>
              {['00', '15', '30', '45'].map(min => (
                <option key={min} value={min}>{min}</option>
              ))}
            </select>

            <select
              name="ampm"
              value={formData.ampm}
              onChange={handleChange}
              className="w-1/3 border border-gray-300 rounded px-3 py-3 text-sm bg-[#F4F9FC] text-gray-700"
              required
            >
              <option value="" disabled>AM/PM</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
        ></textarea>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full md:w-auto uppercase text-white p-3 md:p-4 px-6 md:px-8 font-exo text-xs md:text-[13px] font-bold rounded-full bg-[#223A66] hover:bg-[#E12454] transform duration-300"
          >
            Make an Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
