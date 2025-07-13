// File: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componts/Navbar';
import Home from './componts/Home';
import About from './componts/About';
import Services from './componts/Services';
import Departments from './componts/Departments';
import DepartmentsSingle from './componts/DepartmentsSingle';
import Doctor from './componts/Doctor';
import Appoinment from './componts/Appoinment';
import Doctorsingle from './componts/Doctorsingle';
import Blogslidebar from './componts/Blogslidebar';
import Blogsingle from './componts/Blogsingle';
import Contact from './componts/Contact';

// Admin Panel Imports
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Appointments from './admin/Appointments';
import Users from './admin/Users';
import Charts from './admin/Charts';
import ProtectedRoute from './admin/ProtectedRoute';
import DashboardHome from './admin/DashboardHome';
import DoctorDepartmentPanel from './admin/DoctorDepartmentPanel';

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/about" element={<><Navbar /><About /></>} />
      <Route path="/services" element={<><Navbar /><Services /></>} />
      <Route path="/departments" element={<><Navbar /><Departments /></>} />
      <Route path="/departmentssingle" element={<><Navbar /><DepartmentsSingle /></>} />
      <Route path="/doctor" element={<><Navbar /><Doctor /></>} />
      <Route path="/appoinment" element={<><Navbar /><Appoinment /></>} />
      <Route path="/doctorsingle" element={<><Navbar /><Doctorsingle /></>} />
      <Route path="/blogslidebar" element={<><Navbar /><Blogslidebar /></>} />
      <Route path="/blogsingle" element={<><Navbar /><Blogsingle /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /></>} />

      {/* Admin Routes */}
      <Route path="/admin" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
        <Route index element={<DashboardHome />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="users" element={<Users />} />
        <Route path="charts" element={<Charts />} />
        <Route path="manage-doctors" element={<DoctorDepartmentPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
