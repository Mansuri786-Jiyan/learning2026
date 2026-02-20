import React, { useState } from 'react';
import axios from 'axios';

function ApiDemo1() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const api1 = async () => {
    try {
      const response = await axios.get("https://node5.onrender.com/user/user/");

      setMessage(response.data.message);
      setData(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>API DEMO 1</h2>
      <h3>{message}</h3>

      <button onClick={api1}>GET</button>

      {data.length > 0 && (
        <table border="1" style={{ margin: "20px auto" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user, index) => (
              <tr key={user._id || index}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiDemo1;
