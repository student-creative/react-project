import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUsers, FaDollarSign, FaUserMd, FaDownload } from 'react-icons/fa';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', appointments: 30 },
  { name: 'Feb', appointments: 45 },
  { name: 'Mar', appointments: 60 },
  { name: 'Apr', appointments: 50 },
  { name: 'May', appointments: 70 },
  { name: 'Jun', appointments: 90 },
];

const DashboardHome = () => {
  const [todayAppointments, setTodayAppointments] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [uniqueDoctors, setUniqueDoctors] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const allAppointments = [];
    const today = new Date().toISOString().slice(0, 10);

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes('_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (data?.doctor && data?.date) {
            allAppointments.push(data);
          }
        } catch (e) {
          // skip invalid
        }
      }
    }

    setAppointments(allAppointments);
    setTotalAppointments(allAppointments.length);
    setTodayAppointments(allAppointments.filter(a => a.date === today).length);
    setUniqueDoctors([...new Set(allAppointments.map(a => a.doctor))].length);

    // 🟨 Fetch contact messages
    const contactData = JSON.parse(localStorage.getItem("contactMessages")) || [];
    setContacts(contactData);
  }, []);

  const downloadCSV = () => {
    const headers = ['Full Name', 'Phone', 'Email', 'Department', 'Doctor', 'Date', 'Time', 'Message'];
    const rows = appointments.map(app =>
      [app.fullName, app.phone, app.email, app.department, app.doctor, app.date, app.time, app.message]
    );
    const csvContent = [headers, ...rows]
      .map(e => e.map(val => `"${val}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'appointments.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-10 text-[#223A66]">📊 Admin Dashboard</h1>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="p-6 rounded-xl shadow-lg bg-white border-b-4 border-blue-500 hover:scale-[1.02] transition">
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-blue-500 text-3xl" />
            <div>
              <p className="text-sm text-gray-500">Today's Appointments</p>
              <h3 className="text-2xl font-bold text-gray-800">{todayAppointments}</h3>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl shadow-lg bg-white border-b-4 border-green-500 hover:scale-[1.02] transition">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <p className="text-sm text-gray-500">Total Appointments</p>
              <h3 className="text-2xl font-bold text-gray-800">{totalAppointments}</h3>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl shadow-lg bg-white border-b-4 border-yellow-500 hover:scale-[1.02] transition">
          <div className="flex items-center space-x-4">
            <FaDollarSign className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-sm text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800">$12,400</h3>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl shadow-lg bg-white border-b-4 border-purple-500 hover:scale-[1.02] transition">
          <div className="flex items-center space-x-4">
            <FaUserMd className="text-purple-500 text-3xl" />
            <div>
              <p className="text-sm text-gray-500">Doctors Booked</p>
              <h3 className="text-2xl font-bold text-gray-800">{uniqueDoctors}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Appointment List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold text-[#223A66] mb-4">📈 Monthly Appointments</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="appointments" stroke="#223A66" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold text-[#223A66] mb-4">🧾 Recent Appointment Users</h3>
          <ul className="space-y-4 text-sm text-gray-800 max-h-64 overflow-y-auto pr-2">
            {appointments.slice(-6).reverse().map((app, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-semibold text-[#223A66]">{app.fullName} — <span className="text-xs text-gray-500">{app.date} at {app.time}</span></p>
                <p className="text-xs text-gray-500">{app.department} / {app.doctor}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 📩 Contact Messages */}
      <div className="bg-white p-6 rounded-2xl shadow-md border mb-16">
        <h3 className="text-xl font-semibold text-[#223A66] mb-4">📩 Contact Form Submissions</h3>
        {contacts.length === 0 ? (
          <p className="text-sm text-gray-500">No messages received yet.</p>
        ) : (
          <ul className="space-y-4 text-sm text-gray-800 max-h-64 overflow-y-auto pr-2">
            {contacts.slice(-6).reverse().map((msg, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-semibold text-[#223A66]">{msg.name} — <span className="text-xs text-gray-500">{msg.email} / {msg.phone}</span></p>
                <p className="text-xs text-gray-500">Query: {msg.query}</p>
                <p className="text-xs text-gray-600">Message: {msg.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Download CSV */}
      <div className="text-right mb-20">
        <button
          onClick={downloadCSV}
          className="flex items-center gap-2 bg-[#223A66] hover:bg-[#E12454] text-white px-5 py-3 rounded-full font-semibold transition-all duration-300"
        >
          <FaDownload /> Download Appointment List
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
