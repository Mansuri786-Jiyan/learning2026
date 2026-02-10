import React, { useState } from 'react';

function OnchangTask() {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    username: "",
    address: ""
  });

  const [showData, setShowData] = useState(false);

  const Inputhandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const HandleClick = () => {
    setShowData(true);
  };

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>User Form</h2>

      <label>Name:</label>
      <input type="text" name="name" onChange={Inputhandler} />
      <br /><br />

      <label>Age:</label>
      <input type="number" name="age" onChange={Inputhandler} />
      <br /><br />

      <label>Email:</label>
      <input type="email" name="email" onChange={Inputhandler} />
      <br /><br />

      <label>Password:</label>
      <input type="password" name="password" onChange={Inputhandler} />
      <br /><br />

      <label>Phone:</label>
      <input type="tel" name="phone" onChange={Inputhandler} />
      <br /><br />

      <label>City:</label>
      <input type="text" name="city" onChange={Inputhandler} />
      <br /><br />

      <label>State:</label>
      <input type="text" name="state" onChange={Inputhandler} />
      <br /><br />

      <label>Country:</label>
      <input type="text" name="country" onChange={Inputhandler} />
      <br /><br />

      <label>Username:</label>
      <input type="text" name="username" onChange={Inputhandler} />
      <br /><br />

      <label>Address:</label>
      <input type="text" name="address" onChange={Inputhandler} />
      <br /><br />

      <button
        type="button"
        onClick={HandleClick}
        className="btn btn-primary"
      >
        Show Details
      </button>

    
      {showData && (
        <div style={{ marginTop: "30px", textAlign: "left", width: "400px", marginInline: "auto" }}>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Address:</strong> {formData.address}</p>
        </div>
      )}
    </div>
  );
}

export default OnchangTask;
