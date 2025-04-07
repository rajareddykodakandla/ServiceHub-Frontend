import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ProviderDashboard = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main content with top and bottom padding to avoid overlap with fixed header/footer */}
      <main className="pt-[100px] pb-[80px] container mx-auto px-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Provider Dashboard
        </h1>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
              Today's Bookings
            </p>
            <p className="text-3xl font-extrabold text-gray-800 mb-2">3</p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View Schedule
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
              Active Services
            </p>
            <p className="text-3xl font-extrabold text-gray-800">8</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
              Overall Rating
            </p>
            <p className="text-3xl font-extrabold text-gray-800 mb-2">4.8</p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read Reviews
            </a>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Today's Appointments
            </h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 px-4 text-gray-600 font-medium">Time</th>
                <th className="py-3 px-4 text-gray-600 font-medium">Customer</th>
                <th className="py-3 px-4 text-gray-600 font-medium">Service</th>
                <th className="py-3 px-4 text-center text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">9:00 AM</td>
                <td className="py-3 px-4">Emily Johnson</td>
                <td className="py-3 px-4">Pipe Repair</td>
                <td className="py-3 px-4 text-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Start
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">10:30 AM</td>
                <td className="py-3 px-4">Michael Brown</td>
                <td className="py-3 px-4">Drain Cleaning</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                    Upcoming
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Service Availability */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Service Availability
          </h2>
          <p className="text-gray-600 mb-6">
            You are currently showing as available for new bookings.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <label className="text-gray-700 font-medium">Online</label>
              <input
                type="checkbox"
                checked
                className="h-6 w-6 text-blue-600 focus:ring-blue-500"
                readOnly
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Manage Services
            </button>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
};

export default ProviderDashboard;
