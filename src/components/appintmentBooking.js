import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppointmentBookingPage = () => {

    const navigate = useNavigate();

    const [service, setService] = useState("Pipe Repair");
    const [selectedDate, setSelectedDate] = useState("2025-03-25");
    const [selectedTime, setSelectedTime] = useState("10:30 AM");
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");

    const providerName = "John's Plumbing";
    const serviceFee = 75.0;

    const handleBookNow = () => {
        navigate('/payment');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto px-4 flex-grow py-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Book an Appointment
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded shadow p-6 transform transition duration-300 hover:shadow-2xl">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                Select Service
                            </label>
                            <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                                <option value="Pipe Repair">Pipe Repair</option>
                                <option value="Fixture Installation">
                                    Fixture Installation
                                </option>
                                <option value="Drain Cleaning">Drain Cleaning</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                Date
                            </label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                Time
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"].map((time) => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`border rounded px-3 py-2 text-sm transition-colors ${selectedTime === time
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                Your Address
                            </label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>


                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">
                                Additional Notes
                            </label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Any specific instructions or details..."
                                className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 transform transition duration-300 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h3>
                        <div className="flex items-center mb-6">
                            <div className="text-4xl mr-4">🔧</div>
                            <div>
                                <p className="text-lg font-medium text-gray-800">{providerName}</p>
                                <p className="text-gray-500">{service}</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200 mb-6">
                            <div className="py-2 flex justify-between">
                                <span className="text-gray-700 font-medium">Date:</span>
                                <span className="text-gray-900">
                                    {new Date(selectedDate).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="py-2 flex justify-between">
                                <span className="text-gray-700 font-medium">Time:</span>
                                <span className="text-gray-900">{selectedTime}</span>
                            </div>
                            <div className="py-2 flex justify-between">
                                <span className="text-gray-700 font-medium">Service Fee:</span>
                                <span className="text-gray-900">${serviceFee.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleBookNow}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
                        >
                            Book Now
                        </button>
                        <p className="text-center text-gray-500 text-xs">
                            Free cancellation up to 24 hours before appointment
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AppointmentBookingPage;
