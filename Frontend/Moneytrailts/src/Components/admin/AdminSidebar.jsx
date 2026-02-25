function AdminSidebar() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-indigo-700 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Moneytrails</h1>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-300 cursor-pointer">Users</li>
          <li className="hover:text-gray-300 cursor-pointer">Reports</li>
          <li className="hover:text-gray-300 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-2xl font-bold mt-2">₹2,45,000</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-2xl font-bold mt-2">845</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;