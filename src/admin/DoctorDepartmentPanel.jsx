import React, { useEffect, useState } from 'react';
import { FaUserMd, FaHospitalAlt, FaTrash } from 'react-icons/fa';

// ✅ Constants moved outside component to avoid ESLint warnings
const defaultDoctors = [
  { name: "Dr. A Sharma", department: "Cardiology" },
  { name: "Dr. B Gupta", department: "Dental" },
  { name: "Dr. C Mehta", department: "Neurology" },
];

const defaultDepartments = [
  "Cardiology",
  "Dental",
  "Neurology",
  "Medicine",
  "Pediatric",
  "Traumatology",
];

const DoctorDepartmentPanel = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [newDoctor, setNewDoctor] = useState({ name: '', department: '' });
  const [newDepartment, setNewDepartment] = useState('');

  useEffect(() => {
    const doctorData = JSON.parse(localStorage.getItem('doctorsData'));
    const deptData = JSON.parse(localStorage.getItem('departmentsData'));

    if (!doctorData || doctorData.length === 0) {
      localStorage.setItem('doctorsData', JSON.stringify(defaultDoctors));
      setDoctors(defaultDoctors);
    } else {
      setDoctors(doctorData);
    }

    if (!deptData || deptData.length === 0) {
      localStorage.setItem('departmentsData', JSON.stringify(defaultDepartments));
      setDepartments(defaultDepartments);
    } else {
      setDepartments(deptData);
    }
  }, []);

  const handleAddDoctor = (e) => {
    e.preventDefault();
    if (!newDoctor.name || !newDoctor.department) return;

    const updatedDoctors = [...doctors, newDoctor];
    setDoctors(updatedDoctors);
    localStorage.setItem('doctorsData', JSON.stringify(updatedDoctors));
    setNewDoctor({ name: '', department: '' });
  };

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (!newDepartment) return;

    const updatedDepartments = [...departments, newDepartment];
    setDepartments(updatedDepartments);
    localStorage.setItem('departmentsData', JSON.stringify(updatedDepartments));
    setNewDepartment('');
  };

  const handleDeleteDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
    localStorage.setItem('doctorsData', JSON.stringify(updatedDoctors));
  };

  const handleDeleteDepartment = (index) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);
    localStorage.setItem('departmentsData', JSON.stringify(updatedDepartments));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#223A66] mb-6">🏥 Doctor & Department Panel</h2>

      {/* Count Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="flex items-center p-6 bg-blue-100 rounded-lg shadow-md">
          <FaUserMd className="text-4xl text-blue-700 mr-4" />
          <div>
            <p className="text-gray-600 text-sm">Total Doctors</p>
            <h3 className="text-2xl font-bold text-blue-800">{doctors.length}</h3>
          </div>
        </div>

        <div className="flex items-center p-6 bg-green-100 rounded-lg shadow-md">
          <FaHospitalAlt className="text-4xl text-green-700 mr-4" />
          <div>
            <p className="text-gray-600 text-sm">Total Departments</p>
            <h3 className="text-2xl font-bold text-green-800">{departments.length}</h3>
          </div>
        </div>
      </div>

      {/* Add Doctor */}
      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-semibold mb-3 text-[#223A66]">➕ Add Doctor</h3>
        <form onSubmit={handleAddDoctor} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Doctor Name"
            value={newDoctor.name}
            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <select
            value={newDoctor.department}
            onChange={(e) => setNewDoctor({ ...newDoctor, department: e.target.value })}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>{dept}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-[#223A66] text-white px-4 py-2 rounded hover:bg-[#1a2d52]"
          >
            Add Doctor
          </button>
        </form>
      </div>

      {/* Add Department */}
      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-semibold mb-3 text-[#223A66]">🏥 Add Department</h3>
        <form onSubmit={handleAddDepartment} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Department Name"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            className="p-2 border rounded flex-1"
            required
          />
          <button
            type="submit"
            className="bg-[#28a745] text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Department
          </button>
        </form>
      </div>

      {/* Doctor List */}
      <div className="bg-white border rounded-xl p-4 mb-6">
        <h3 className="text-lg font-semibold text-[#223A66] mb-3">👨‍⚕️ Doctor List</h3>
        {doctors.length === 0 ? (
          <p className="text-gray-500">No doctors added yet.</p>
        ) : (
          <ul className="space-y-2">
            {doctors.map((doc, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-blue-50 p-3 rounded shadow-sm"
              >
                <span>
                  {doc.name} — <span className="text-sm text-gray-600">{doc.department}</span>
                </span>
                <button
                  onClick={() => handleDeleteDoctor(i)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Department List */}
      <div className="bg-white border rounded-xl p-4">
        <h3 className="text-lg font-semibold text-[#223A66] mb-3">🏥 Department List</h3>
        {departments.length === 0 ? (
          <p className="text-gray-500">No departments added yet.</p>
        ) : (
          <ul className="space-y-2">
            {departments.map((dept, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-green-50 p-3 rounded shadow-sm"
              >
                <span>{dept}</span>
                <button
                  onClick={() => handleDeleteDepartment(i)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DoctorDepartmentPanel;
