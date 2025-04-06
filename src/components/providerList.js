import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const ProviderListPage = () => {
  const [searchParams] = useSearchParams();
  const serviceFilter = searchParams.get("service") || "";

  const [providers] = useState([
    { id: 1, name: "John Doe", service: "Plumbing", rating: 4.5 },
    { id: 2, name: "Peter Parker", service: "Plumbing", rating: 4.2 },
    { id: 3, name: "Mark Twain", service: "Plumbing", rating: 4.0 },
    { id: 4, name: "Jane Smith", service: "Painting", rating: 4.0 },
    { id: 5, name: "Alice Johnson", service: "Painting", rating: 4.3 },
    { id: 6, name: "Emily Clark", service: "Painting", rating: 4.1 },
    { id: 7, name: "Bob Johnson", service: "Carpentry", rating: 4.2 },
    { id: 8, name: "Robert Brown", service: "Carpentry", rating: 4.1 },
    { id: 9, name: "Charlie Davis", service: "Carpentry", rating: 4.3 },
    { id: 10, name: "Alice Williams", service: "Electrical", rating: 4.8 },
    { id: 11, name: "Catherine Davis", service: "Electrical", rating: 4.7 },
    { id: 12, name: "Bruce Wayne", service: "Electrical", rating: 4.9 },
  ]);

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(serviceFilter.toLowerCase()) ||
      provider.service.toLowerCase().includes(serviceFilter.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 p-4 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Service Providers
        </h1>
        {serviceFilter && (
          <p className="text-center mb-4">
            Filtering providers for: {serviceFilter}
          </p>
        )}
        <div className="flex flex-col gap-4">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white shadow-md rounded-lg p-4 w-[800px] mx-auto"
            >
              <div className="grid grid-cols-3 items-center">
                <div>
                  <h2 className="text-lg font-bold">{provider.name}</h2>
                  <p className="text-gray-600 text-sm">{provider.service}</p>
                </div>
                <div className="text-center">
                  <span className="text-yellow-500 text-xl font-bold">
                    {provider.rating}
                  </span>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
                <div className="text-right">
                  <Link to={`/serviceProvider/${provider.id}`}>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderListPage;
