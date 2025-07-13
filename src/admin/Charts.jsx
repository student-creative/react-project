import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { FaCalendarAlt, FaUserMd, FaHospitalAlt } from 'react-icons/fa';

const appointmentData = [
  { month: 'Jan', count: 30 },
  { month: 'Feb', count: 45 },
  { month: 'Mar', count: 60 },
  { month: 'Apr', count: 50 },
  { month: 'May', count: 70 },
  { month: 'Jun', count: 90 },
];

const Charts = () => {
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    const allAppointments = [];

    // Fetch data from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes('_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (data?.department) {
            allAppointments.push(data);
          }
        } catch (e) {}
      }
    }

    // Count patients by department
    const deptCounts = {};
    allAppointments.forEach((a) => {
      if (deptCounts[a.department]) {
        deptCounts[a.department]++;
      } else {
        deptCounts[a.department] = 1;
      }
    });

    // Convert to array for chart
    const deptDataArray = Object.entries(deptCounts).map(([department, patients]) => ({
      department,
      patients,
    }));

    setDepartmentData(deptDataArray);
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-[#223A66] mb-8">📊 Analytics Overview</h2>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-50 text-blue-700 p-5 rounded-xl flex items-center space-x-4 border border-blue-100 shadow-sm">
          <FaCalendarAlt className="text-3xl" />
          <div>
            <p className="text-sm">Monthly Appointments</p>
            <h3 className="text-2xl font-bold">90</h3>
          </div>
        </div>
        <div className="bg-green-50 text-green-700 p-5 rounded-xl flex items-center space-x-4 border border-green-100 shadow-sm">
          <FaUserMd className="text-3xl" />
          <div>
            <p className="text-sm">Active Doctors</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
        </div>
        <div className="bg-purple-50 text-purple-700 p-5 rounded-xl flex items-center space-x-4 border border-purple-100 shadow-sm">
          <FaHospitalAlt className="text-3xl" />
          <div>
            <p className="text-sm">Departments</p>
            <h3 className="text-2xl font-bold">{departmentData.length}</h3>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#223A66] mb-4">📈 Monthly Appointments</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#223A66" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart - Dynamic Department Patients */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#223A66] mb-4">🏥 Patients by Department</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="patients" fill="#2D9CDB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
