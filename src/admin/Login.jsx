import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/dashboard');
    } else {
      alert('❌ Invalid email or password');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();  
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f0ff] via-[#cce0ff] to-[#ffffff] px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm relative">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute left-4 top-4 text-sm text-blue-600 hover:text-red-600"
        >
          ⬅ Back
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-[#223A66]">Admin Login</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#223A66] text-white py-2 rounded hover:bg-[#E12454] transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
