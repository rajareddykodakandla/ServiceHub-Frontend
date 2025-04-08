import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const PaymentDetailsPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiration: "",
    cvv: "",
    address: "",
    city: "",
    zip: ""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePay = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
    navigate("/myAppointments")
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Payment Details
          </h2>
          <form onSubmit={handlePay} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="expiration">
                  Expiration Date
                </label>
                <input
                  id="expiration"
                  type="text"
                  name="expiration"
                  value={paymentData.expiration}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="cvv">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="address">
                Billing Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={paymentData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="city">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={paymentData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="zip">
                  ZIP Code
                </label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  value={paymentData.zip}
                  onChange={handleChange}
                  placeholder="ZIP"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Pay Now
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentDetailsPage;
