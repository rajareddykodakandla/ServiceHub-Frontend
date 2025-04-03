import React from 'react';

const services = [
  { title: 'Plumbing', description: 'Repairs & Installation', icon: '🔧' },
  { title: 'Painting', description: 'Interior & Exterior', icon: '🖌️' },
  { title: 'Carpentry', description: 'Furniture & Repairs', icon: '🪚' },
  { title: 'Electrical', description: 'Wiring & Fixtures', icon: '💡' },
];

const ServiceCards = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Popular Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
