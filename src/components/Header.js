import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ServiceHub</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/mybookings" className="hover:underline">My Bookings</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
