import React, { useEffect, useState } from "react";
import axios from "axios";

function Allusers() {
  const [users, setUsers] = useState([]);

  // 🔥 Move getData outside
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://node5.onrender.com/user/user/"
      );
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // 🔥 Make delete async + await
  const DeleteApi = async (id) => {
    try {
      await axios.delete(
        `https://node5.onrender.com/user/user/${id}`
      );

      // Refresh data after delete
      getData();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl p-6">

        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          All Users
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-indigo-600 text-white text-left">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Age</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{user.name || "N/A"}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.age || "-"}</td>
                    <td
                      className="py-3 px-4 text-red-600 cursor-pointer font-semibold"
                      onClick={() => DeleteApi(user._id)}>Delete</td>

                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.isActive
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No Users Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Allusers;