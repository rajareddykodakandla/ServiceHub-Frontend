import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ServiceHub Logo" className="h-6" />
          <h1 className="text-2xl font-bold">ServiceHub</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/mybookings" className="hover:underline">My Bookings</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/profilePage" className="hover:underline">Profile</a></li>
            <li><a href="/reviewSubmission" className="hover:underline">Submit review</a></li>
          </ul>
        </nav>
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
