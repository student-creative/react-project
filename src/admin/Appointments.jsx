import React, { useEffect, useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = () => {
    const allAppointments = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes('_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          data._key = key;
          allAppointments.push(data);
        } catch (e) {}
      }
    }

    const today = new Date().toISOString().split('T')[0];
    allAppointments.sort((a, b) => {
      const dateA = a.date;
      const dateB = b.date;
      if (dateA === today && dateB !== today) return -1;
      if (dateB === today && dateA !== today) return 1;
      return new Date(dateB) - new Date(dateA);
    });

    setAppointments(allAppointments);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    fetchAppointments();
  };

  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex-1 p-6 bg-white shadow-xl rounded-2xl overflow-x-auto">
      <h2 className="text-3xl font-bold text-[#223A66] mb-6">📅 Appointments Overview</h2>

      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 text-sm p-6 border border-dashed rounded-lg">
          No appointments found.
        </div>
      ) : (
        <div className="w-full overflow-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[1100px] text-sm text-left border-collapse">
            <thead className="bg-[#223A66] text-white uppercase text-xs tracking-wider sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">Name</th>
                <th className="px-4 py-3 whitespace-nowrap">Email</th>
                <th className="px-4 py-3 whitespace-nowrap">Phone</th>
                <th className="px-4 py-3 whitespace-nowrap">Department</th>
                <th className="px-4 py-3 whitespace-nowrap">Doctor</th>
                <th className="px-4 py-3 whitespace-nowrap">Date</th>
                <th className="px-4 py-3 whitespace-nowrap">Time</th>
                <th className="px-4 py-3 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {appointments.map((a, i) => (
                <tr key={i} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{a.fullName}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap max-w-[180px] truncate">{a.email}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{a.phone}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                      {a.department}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                      {a.doctor}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{formatDate(a.date)}</td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{a.time}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(a._key)}
                      className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full hover:bg-red-200 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Appointments;
