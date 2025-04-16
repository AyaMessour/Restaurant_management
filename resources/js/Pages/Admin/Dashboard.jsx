import React, { useState, useMemo, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { User, LogOut, BarChart2, Calendar } from 'lucide-react';

// Register Chart.js components
ChartJS.register(...registerables);

const Dashboard = ({ reservations = [] }) => {
  const [view, setView] = useState('reservations');
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    end: new Date()
  });

  // Filter reservations by date range
  const filteredReservations = useMemo(() => {
    return reservations.filter(r => {
      const reservationDate = new Date(r.date);
      return reservationDate >= dateRange.start && reservationDate <= dateRange.end;
    });
  }, [reservations, dateRange]);

  // Process data for charts
  const { lineChartData, pieChartData, barChartData, stats } = useMemo(() => {
    // Line Chart - Reservations by date
    const reservationsByDate = filteredReservations.reduce((acc, r) => {
      const date = new Date(r.date).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    // Pie Chart - Reservations by type
    const reservationsByType = filteredReservations.reduce((acc, r) => {
      const type = r.reservation_type || 'Unknown';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    // Bar Chart - Top guests
    const guestCounts = filteredReservations
      .slice(0, 10) // Limit to top 10
      .map(r => ({
        name: `${r.first_name} ${r.last_name}`,
        guests: r.guests
      }));

    // Statistics
    const totalGuests = filteredReservations.reduce((sum, r) => sum + parseInt(r.guests), 0);
    const avgGuests = filteredReservations.length > 0 
      ? (totalGuests / filteredReservations.length).toFixed(1) 
      : 0;

    return {
      lineChartData: {
        labels: Object.keys(reservationsByDate),
        datasets: [{
          label: 'Reservations per Day',
          data: Object.values(reservationsByDate),
          borderColor: '#e63946', // Red
          backgroundColor: 'rgba(230, 57, 70, 0.1)',
          tension: 0.4,
          fill: true,
          borderWidth: 2
        }]
      },
      pieChartData: {
        labels: Object.keys(reservationsByType),
        datasets: [{
          data: Object.values(reservationsByType),
          backgroundColor: [
            '#e63946', // Red
            '#2a9d8f', // Green
            '#f4a261', // Orange
            '#264653', // Dark teal (almost black)
          ],
          borderWidth: 1,
          borderColor: '#000000' // Black border
        }]
      },
      barChartData: {
        labels: guestCounts.map(g => g.name),
        datasets: [{
          label: 'Number of Guests',
          data: guestCounts.map(g => g.guests),
          backgroundColor: '#f4a261', // Orange
          borderColor: '#000000', // Black border
          borderWidth: 1
        }]
      },
      stats: {
        totalReservations: filteredReservations.length,
        avgGuests,
        totalGuests
      }
    };
  }, [filteredReservations]);

  // Chart click handler
  const handleChartClick = (event, elements, chartType) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      if (chartType === 'line') {
        const date = lineChartData.labels[index];
        alert(`Date: ${date}\nReservations: ${lineChartData.datasets[0].data[index]}`);
      } else if (chartType === 'pie') {
        const type = pieChartData.labels[index];
        alert(`Reservation Type: ${type}\nCount: ${pieChartData.datasets[0].data[index]}`);
      }
    }
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="sidebar-container w-64 bg-gradient-to-b from-red-700 to-red-900 text-white p-6 flex flex-col justify-between rounded-r-3xl">
        <div>
          <h2 className="sidebar-title text-2xl font-bold mb-8">Admin Dashboard</h2>
          <nav>
            <ul>
              <li
                className={`sidebar-item mb-4 cursor-pointer p-2 rounded-lg transition-all flex items-center ${view === 'reservations' ? 'font-bold bg-red-600' : 'hover:bg-red-800'}`}
                onClick={() => setView('reservations')}
              >
                <Calendar className="mr-2" size={18} />
                <span>Reservations</span>
              </li>
              <li
                className={`sidebar-item mb-4 cursor-pointer p-2 rounded-lg transition-all flex items-center ${view === 'statistics' ? 'font-bold bg-red-600' : 'hover:bg-red-800'}`}
                onClick={() => setView('statistics')}
              >
                <BarChart2 className="mr-2" size={18} />
                <span>Statistics</span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Profile & Logout Links */}
        <div className="sidebar-links mt-8 space-y-2">
          <ResponsiveNavLink href={route('profile.edit')} className="text-white flex items-center space-x-2 p-2 rounded-lg hover:bg-white transition-all">
            <User size={18} />
            <span>Profile</span>
          </ResponsiveNavLink>
          <ResponsiveNavLink 
            method="post" 
            href={route('logout')} 
            as="button" 
            className="text-white flex items-center space-x-2 p-2 rounded-lg hover:bg-white transition-all"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </ResponsiveNavLink>
        </div>
       
      </aside>

      {/* Main Content */}
      <main className="main-content flex-1 p-8">
        {view === 'reservations' ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Reservations</h1>
              <div className="flex space-x-4">
                <input
                  type="date"
                  value={dateRange.start.toISOString().split('T')[0]}
                  onChange={(e) => setDateRange({...dateRange, start: new Date(e.target.value)})}
                  className="border rounded p-2"
                />
                <input
                  type="date"
                  value={dateRange.end.toISOString().split('T')[0]}
                  onChange={(e) => setDateRange({...dateRange, end: new Date(e.target.value)})}
                  className="border rounded p-2"
                />
              </div>
            </div>

            {filteredReservations.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse rounded-lg overflow-hidden mb-6">
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
                    {filteredReservations.map((reservation) => (
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No reservations found in selected date range</p>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Reservation Statistics</h1>
              <div className="flex space-x-4">
                <input
                  type="date"
                  value={dateRange.start.toISOString().split('T')[0]}
                  onChange={(e) => setDateRange({...dateRange, start: new Date(e.target.value)})}
                  className="border rounded p-2"
                />
                <input
                  type="date"
                  value={dateRange.end.toISOString().split('T')[0]}
                  onChange={(e) => setDateRange({...dateRange, end: new Date(e.target.value)})}
                  className="border rounded p-2"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="stats-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-medium text-gray-500">Total Reservations</h3>
                <p className="text-3xl font-bold text-red-600">{stats.totalReservations}</p>
              </div>
              <div className="stats-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-medium text-gray-500">Average Guests</h3>
                <p className="text-3xl font-bold text-green-600">{stats.avgGuests}</p>
              </div>
              <div className="stats-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-medium text-gray-500">Total Guests</h3>
                <p className="text-3xl font-bold text-orange-600">{stats.totalGuests}</p>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="charts-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Line Chart */}
              <div className="chart-container bg-white p-6 rounded-xl shadow-md h-96">
                <h2 className="text-xl font-semibold mb-4">Reservations Over Time</h2>
                <Line 
                  data={lineChartData} 
                  options={{
                    ...chartOptions,
                    onClick: (e, elements) => handleChartClick(e, elements, 'line')
                  }} 
                />
              </div>

              {/* Pie Chart */}
              <div className="chart-container bg-white p-6 rounded-xl shadow-md h-96">
                <h2 className="text-xl font-semibold mb-4">Reservation Types</h2>
                <Pie 
                  data={pieChartData} 
                  options={{
                    ...chartOptions,
                    onClick: (e, elements) => handleChartClick(e, elements, 'pie')
                  }} 
                />
              </div>

              {/* Bar Chart */}
              <div className="chart-container bg-white p-6 rounded-xl shadow-md h-96">
                <h2 className="text-xl font-semibold mb-4">Top Guests by Party Size</h2>
                <Bar 
                  data={barChartData} 
                  options={chartOptions} 
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;