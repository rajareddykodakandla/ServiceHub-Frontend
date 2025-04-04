import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import ServiceCards from './ServiceCards';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="text-center py-10 bg-blue-100">
        <h1 className="text-4xl font-bold text-gray-800">Find Trusted Local Service Providers</h1>
        <p className="text-gray-600 mt-4">Connect with skilled professionals for all your home service needs</p>
        <SearchBar />
      </div>
      <ServiceCards onBookNow={() => navigate('/login')} />
    </div>
  );
};

export default HomePage;
