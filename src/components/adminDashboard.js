import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboardPage = () => {
  const chartData = {
    labels: [
      "Plumbing",
      "Electrical",
      "Painting",
      "Carpentry"
    ],
    datasets: [
      {
        label: "Performance (%)",
        data: [70, 90, 50, 80],
        backgroundColor: "rgba(37, 99, 235, 0.8)", 
        hoverBackgroundColor: "rgba(29, 78, 216, 0.9)", 
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Service Performance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="pt-[80px] pb-[80px] container mx-auto px-4 flex-grow overflow-y-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 text-gray-600 font-medium">
                    Customer
                  </th>
                  <th className="py-3 px-4 text-gray-600 font-medium">
                    Service
                  </th>
                  <th className="py-3 px-4 text-gray-600 font-medium">
                    Date
                  </th>
                  <th className="py-3 px-4 text-gray-600 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">Sarah Wilson</td>
                  <td className="py-3 px-4">Furniture Assembly</td>
                  <td className="py-3 px-4">Mar 20, 2025</td>
                  <td className="py-3 px-4 text-blue-600">In Progress</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">David Thompson</td>
                  <td className="py-3 px-4">Electrical Work</td>
                  <td className="py-3 px-4">Mar 21, 2025</td>
                  <td className="py-3 px-4 text-orange-500">Scheduled</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">Jennifer Lee</td>
                  <td className="py-3 px-4">Cleaning Service</td>
                  <td className="py-3 px-4">Mar 22, 2025</td>
                  <td className="py-3 px-4 text-orange-500">Scheduled</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View All Bookings
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
