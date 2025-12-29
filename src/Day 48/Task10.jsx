function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600">1,234 Active Users</p>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-gray-600">$12,345</p>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-gray-600">345 New Orders</p>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p className="text-gray-600">12 Unread Messages</p>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <p className="text-gray-600">5 Pending Tasks</p>
        </div>

       
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Alerts</h2>
          <p className="text-gray-600">3 New Alerts</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
