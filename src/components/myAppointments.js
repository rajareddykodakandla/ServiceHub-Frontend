import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MyAppointmentsPage = () => {

    const [bookings] = useState([
        {
            id: 1,
            providerName: "John's Plumbing",
            service: "Pipe Repair",
            date: "2025-04-10",
            time: "10:30 AM",
            status: "Confirmed",
            address: "123 Main St, Springfield, 12345",
        },
        {
            id: 2,
            providerName: "Alice's Painting",
            service: "Wall Painting",
            date: "2025-04-15",
            time: "1:00 PM",
            status: "Pending",
            address: "456 Elm St, Springfield, 12345",
        },
        {
            id: 3,
            providerName: "Bob's Carpentry",
            service: "Furniture Repair",
            date: "2025-04-20",
            time: "3:30 PM",
            status: "Cancelled",
            address: "789 Oak St, Springfield, 12345",
        },
        {
            id: 4,
            providerName: "Alice's Painting",
            service: "Wall Painting",
            date: "2025-04-15",
            time: "1:00 PM",
            status: "Pending",
            address: "456 Elm St, Springfield, 12345",
        },
        {
            id: 5,
            providerName: "Bob's Carpentry",
            service: "Furniture Repair",
            date: "2025-04-20",
            time: "3:30 PM",
            status: "Cancelled",
            address: "789 Oak St, Springfield, 12345",
        },
    ]);

    return (
    
        <div className="relative min-h-screen bg-gray-100">
            
            <div className="fixed top-0 left-0 right-0 z-50">
                <Header />
            </div>

            <main className="pt-20 pb-20 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    My Bookings
                </h1>
                {bookings.length === 0 ? (
                    <p className="text-center text-gray-600">
                        You have no bookings yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="w-[800px] mx-auto bg-white rounded-2xl shadow-xl p-6 transform transition duration-300 hover:scale-105"
                            >
                                
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {booking.service}
                                    </h2>
                                    <p className="text-lg text-gray-600">{booking.providerName}</p>
                                    <p className="text-gray-500 text-sm">{booking.address}</p>
                                </div>
                              
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-700 font-medium">
                                            {new Date(booking.date).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                        <p className="text-gray-700 text-lg">{booking.time}</p>
                                    </div>
                                    <span
                                        className={`px-4 py-1 rounded-full text-sm font-semibold ${booking.status === "Confirmed"
                                                ? "bg-green-200 text-green-800"
                                                : booking.status === "Pending"
                                                    ? "bg-yellow-200 text-yellow-800"
                                                    : "bg-red-200 text-red-800"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </div>
                               
                                <div className="mt-6 border-t border-gray-200 pt-4 text-center">
                                    <Link
                                        to={`/booking/${booking.id}`}
                                        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-50">
                <Footer />
            </div>
        </div>
    );
};

export default MyAppointmentsPage;
