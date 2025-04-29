import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const services = [
  { title: "Plumbing", description: "Repairs & Installation", icon: "🔧" },
  { title: "Painting", description: "Interior & Exterior", icon: "🖌️" },
  { title: "Carpentry", description: "Furniture & Repairs", icon: "🪚" },
  { title: "Electrical", description: "Wiring & Fixtures", icon: "💡" },
];

const ServiceCards = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("user"))
  );

  useEffect(() => {
    // example effect, e.g. re-check login on mount
    console.log("ServiceCards mounted, logged in:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Popular Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>

            {/* Ternary picks one complete JSX element */}
            {isLoggedIn ? (
              <Link
                to={`/providers?service=${encodeURIComponent(
                  service.title
                )}`}
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                  Book Now
                </button>
              </Link>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
              >
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
