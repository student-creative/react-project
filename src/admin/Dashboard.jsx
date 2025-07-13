import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 h-screen sticky top-0 bg-[#223A66] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
          <nav className="space-y-3">
            <Link to="/dashboard" className="block hover:bg-blue-800 px-3 py-2 rounded">🏠 Dashboard</Link>
            <Link to="appointments" className="block hover:bg-blue-800 px-3 py-2 rounded">📅 Appointments</Link>
                <Link to="manage-doctors" className="block hover:bg-blue-800 px-3  py-2 rounded">🩺 D&D Management</Link>
            <Link to="users" className="block hover:bg-blue-800 px-3 py-2 rounded">👤 Users</Link>
            <Link to="charts" className="block hover:bg-blue-800 px-3 py-2 rounded">📊 Analytics</Link>

          </nav>
        </div>

        {/* Logout button at bottom */}
        <button
          onClick={logout}
          className="text-red-300 hover:text-red-500 mt-6 self-start"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
