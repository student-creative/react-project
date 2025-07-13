import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';

const Users = () => {
  const [users, setUsers] = useState([]);

  // Load from localStorage or default dummy
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('usersData')) || [
      {
        name: 'Aryan Sutariya',
        email: 'aryan@example.com',
        phone: '1234567890',
        role: 'Patient',
      },
      {
        name: 'Dr. Mehta',
        email: 'drmehta@hospital.com',
        phone: '9876543210',
        role: 'Doctor',
      },
    ];
    setUsers(data);
  }, []);

  // 📥 Download CSV
  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Role'];
    const rows = users.map(user => [user.name, user.email, user.phone, user.role]);
    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'users.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-[#223A66]">👤 User Management</h2>
          <p className="text-sm text-gray-500 mt-1">Manage all users registered in the system.</p>
        </div>
        <button
          onClick={downloadCSV}
          className="flex items-center gap-2 bg-[#223A66] hover:bg-[#E12454] text-white px-4 py-2 rounded-full text-sm font-medium transition"
        >
          <FaDownload /> Download CSV
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4">Total Users: <strong>{users.length}</strong></p>

      {users.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No users found.</p>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#223A66] text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {users.map((user, i) => (
                <tr key={i} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-4 flex items-center space-x-2 text-gray-800">
                    <FaUserAlt className="text-[#223A66]" />
                    <span>{user.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <FaEnvelope className="text-blue-500" />
                      <span>{user.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaPhoneAlt className="text-green-500" />
                      <span>{user.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Doctor'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {user.role}
                    </span>
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

export default Users;
