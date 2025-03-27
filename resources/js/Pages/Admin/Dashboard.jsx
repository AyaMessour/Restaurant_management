import React, { useState, useEffect } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { User, LogOut } from 'lucide-react';

const Dashboard = ({ reservations = [], orders = [] }) => {
  const [checkedReservations, setCheckedReservations] = useState([]);
  const [view, setView] = useState('reservations');
  const [processedOrders, setProcessedOrders] = useState([]);

  useEffect(() => {
    // Process orders data when component mounts or orders prop changes
    if (orders && orders.length > 0) {
      const formattedOrders = orders.map(order => ({
        ...order,
        total_price: order.total_price || 0,
        created_at: new Date(order.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: order.status || 'pending'
      }));
      setProcessedOrders(formattedOrders);
    }
  }, [orders]);

  const handleCheckReservation = (id) => {
    setCheckedReservations((prev) =>
      prev.includes(id) 
        ? prev.filter((reservationId) => reservationId !== id) 
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    console.log("Checked Reservations: ", checkedReservations);
    // API call to update reservations would go here
  };
  useEffect(() => {
    console.log("Données reçues dans React:", orders);
  }, [orders]);
  

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
                Reservations {/* Fixed typo */}
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
          <ResponsiveNavLink 
            method="post" 
            href={route('logout')} 
            as="button" 
            className="text-white flex items-center space-x-2"
          >
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
            {reservations.length > 0 ? (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Phone</th>
                        <th className="px-4 py-2 text-left">Guests</th>
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Time</th>
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-left">Request</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      {reservations.map((reservation) => (
                        <tr key={reservation.id} className="border-b hover:bg-gray-50">
                                  <td className="px-4 py-2">{reservation.id}</td>
                          <td className="px-4 py-2">{reservation.first_name} {reservation.last_name}</td>
                          <td className="px-4 py-2">{reservation.email}</td>
                          <td className="px-4 py-2">{reservation.phone}</td>
                          <td className="px-4 py-2">{reservation.guests}</td>
                          <td className="px-4 py-2">{new Date(reservation.date).toLocaleDateString()}</td>
                          <td className="px-4 py-2">{reservation.time}</td>
                          <td className="px-4 py-2">{reservation.reservation_type}</td>
                          <td className="px-4 py-2 max-w-xs truncate">{reservation.special_request || '-'}</td>
                          <td className="px-4 py-2">
                            
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             
              </>
            ) : (
              <p className="text-gray-500">No reservations found</p>
            )}
          </>
        ) : view === 'orders' ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Orders</h1>
            {processedOrders.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Order #</th>
                      <th className="px-4 py-2 text-left">Customer</th>
                      <th className="px-4 py-2 text-left">Email</th>
                      <th className="px-4 py-2 text-left">Total</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processedOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 font-medium">#{order.id}</td>
                        <td className="px-4 py-2">{order.first_name} {order.last_name}</td>
                        <td className="px-4 py-2">{order.email}</td>
                        <td className="px-4 py-2 font-medium">${order.total_price.toFixed(2)}</td>
                        <td className="px-4 py-2">{order.created_at}</td>
                        <td className="px-4 py-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'completed' ? 'bg-green-100 text-green-800' :
                            order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-500 text-lg">No orders found</p>
                <p className="text-gray-400 mt-2">Orders will appear here once customers complete checkout</p>
              </div>
            )}
          </>
        ) : null}
      </main>
      
    </div>
  );
};

export default Dashboard;