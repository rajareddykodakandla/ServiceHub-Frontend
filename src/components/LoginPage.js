import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign-up
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('customer'); // Default role
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password,
      });
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/home');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid login credentials');
      } else {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/signup', {
        firstName,
        lastName,
        email,
        password,
        role,
      });
      if (response.status === 201) {
        alert('Sign-up successful! Please log in.');
        setIsSignUp(false); // Switch back to login card
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 animate-blueBackground">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {isSignUp ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="service provider">Service Provider</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Sign up
              </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-blue-600 hover:underline">
                Log in
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Continue with email
              </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
              Do not have an account?{' '}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-blue-600 hover:underline">
                Sign up
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
