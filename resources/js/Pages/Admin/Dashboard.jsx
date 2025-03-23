import React, { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { User, LogOut } from 'lucide-react';
const Dashboard = ({ reservations, orders }) => {
  const [checkedReservations, setCheckedReservations] = useState([]);
  const [view, setView] = useState('reservations');

  const handleCheckReservation = (id) => {
    setCheckedReservations((prev) =>
      prev.includes(id) ? prev.filter((reservationId) => reservationId !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    console.log("Checked Reservations: ", checkedReservations);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-amber-700 to-orange-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
          <nav>
            <ul>
              <li
                className={`mb-4 cursor-pointer ${view === 'reservations' ? 'font-bold underline' : ''}`}
                onClick={() => setView('reservations')}
              >
                Reservations
              </li>
              <li
                className={`mb-4 cursor-pointer ${view === 'orders' ? 'font-bold underline' : ''}`}
                onClick={() => setView('orders')}
              >
                Orders
              </li>
            </ul>
          </nav>
        </div>

        {/* Profile & Logout Links */}
        <div className="mt-8 space-y-2">
  <ResponsiveNavLink href={route('profile.edit')} className="text-white flex items-center space-x-2">
    <User size={18} />
    <span>Profile</span>
  </ResponsiveNavLink>
  <ResponsiveNavLink method="post" href={route('logout')} as="button" className="text-white flex items-center space-x-2">
    <LogOut size={18} />
    <span>Log Out</span>
  </ResponsiveNavLink>
</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {view === 'reservations' ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Reservations</h1>
            <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                  <th className="px-4 py-2 text-left">Guests</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Reservation Type</th>
                  <th className="px-4 py-2 text-left">Special Request</th>
                  <th className="px-4 py-2 text-left">Check</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="border-b">
                    <td className="px-4 py-2">{reservation.first_name} {reservation.last_name}</td>
                    <td className="px-4 py-2">{reservation.email}</td>
                    <td className="px-4 py-2">{reservation.phone}</td>
                    <td className="px-4 py-2">{reservation.guests}</td>
                    <td className="px-4 py-2">{reservation.date}</td>
                    <td className="px-4 py-2">{reservation.time}</td>
                    <td className="px-4 py-2">{reservation.reservation_type}</td>
                    <td className="px-4 py-2">{reservation.special_request}</td>
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkedReservations.includes(reservation.id)}
                        onChange={() => handleCheckReservation(reservation.id)}
                        className="h-5 w-5 text-amber-700"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-amber-700 to-orange-900 text-white p-3 rounded-md shadow-lg hover:scale-105 transition-transform"
            >
              Confirm Selected Reservations
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">Orders</h1>
            <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Total Price</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.customer_name}</td>
                    <td className="px-4 py-2">${order.total_price}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
