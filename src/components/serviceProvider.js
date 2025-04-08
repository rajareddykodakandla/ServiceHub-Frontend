import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const ServiceProvider = () => {

  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen flex flex-col">
      <Header /> /* generic header */
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="bg-white shadow rounded p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="text-5xl mr-4">👨‍🔧</div>
                <div>
                  <h2 className="text-2xl font-bold">
                    John's Plumbing Services
                  </h2>
                  <div className="flex items-center flex-wrap space-x-2 text-sm text-gray-500">
                    <div className="flex items-center text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.657a1 1 0 00.95.69h3.847c.969 0 1.371 1.24.588 1.81l-3.115 2.26a1 1 0 00-.363 1.118l1.188 3.657c.3.921-.755 1.688-1.54 1.118L10 14.011l-3.115 2.26c-.784.57-1.839-.197-1.539-1.118l1.188-3.657a1 1 0 00-.363-1.118l-3.115-2.26c-.783-.57-.38-1.81.588-1.81h3.847a1 1 0 00.95-.69l1.188-3.657z" />
                      </svg>
                      4.25
                    </div>
                    <span>(48 reviews)</span>
                    <span>• Seattle, WA</span>
                  </div>
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mt-2">
                    Available
                  </span>
                </div>
              </div>

              <div>
                <Link to={"/appointmentBooking"}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div className="mt-4 border-b border-gray-200">
                <nav className="flex space-x-6 text-gray-600">
                  <button
                    onClick={() => setActiveTab('services')}
                    className={`py-2 ${activeTab === 'services'
                      ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                      : 'hover:text-blue-600'
                      }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-2 ${activeTab === 'reviews'
                      ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                      : 'hover:text-blue-600'
                      }`}
                  >
                    Reviews
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`py-2 ${activeTab === 'about'
                      ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                      : 'hover:text-blue-600'
                      }`}
                  >
                    About
                  </button>
                </nav>
              </div>
              <div className="mt-6 space-y-4">
                {activeTab === 'services' && (
                  <div>
                    <div className="flex items-center justify-between m-4">
                      <div>
                        <h3 className="font-semibold text-lg">Pipe Repair</h3>
                        <p className="text-sm text-gray-600">
                          Fix leaking pipes, replace damaged sections, repair joints
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">$75</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between m-4">
                      <div>
                        <h3 className="font-semibold text-lg">Fixture Installation</h3>
                        <p className="text-sm text-gray-600">
                          Replace or install new fixtures in kitchen or bathroom
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">$120</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <div className="border p-4 m-4 rounded">
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-gray-600">
                        Great service, very professional!
                      </p>
                    </div>
                    <div className="border p-4 m-4 rounded">
                      <p className="font-semibold">Jane Smith</p>
                      <p className="text-sm text-gray-600">
                        Satisfied with the repair work.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'about' && (
                  <div>
                    <p>
                      About the provider: Experienced and reliable services in plumbing, with over 10 years in the industry.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceProvider;
