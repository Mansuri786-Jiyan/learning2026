import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'



function Form1() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const validator = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required",
      },
    },

    email: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },

    age: {
      required: "Age is required",
      min: {
        value: 18,
        message: "Age must be 18+",
      },
    },

    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Minimum 6 characters required",
      },
    },
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://node5.onrender.com/user/user/",data);

      console.log(res.data);
      alert("User Registered Successfully ");

      reset();

    } catch (error) {
      console.log(error);
      console.log("Full Error:", error.response?.data || error.message);
      alert("Something went wrong ");

    }
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>POST METHOD 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
          <div className="form-card">
            <h2>Register</h2>

            <label>Name</label>
            <input type="text" placeholder="Enter your Name" autoComplete="name"
              {...register("name", validator.name)} />
            {errors.name && (<p className="form-error">{errors.name.message}</p>)}

            <label>Email</label>
            <input type="email" placeholder="Enter your email" autoComplete="email"
              {...register("email", validator.email)} />
            {errors.email && (<p className="form-error">{errors.email.message}</p>)}

            <label>Age</label>
            <input type="age" placeholder="Enter your age" {...register("age", validator.age)} />
            {errors.age && (<p className="form-error">{errors.age.message}</p>)}

            <label>Password</label>
            <input type="password" autoComplete="current-password"
              placeholder="Enter password" {...register("password", validator.password)} />
            {errors.password && (<p className="form-error">{errors.password.message}</p>)}

            <label style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <input type="checkbox" />
              Is Active
            </label>
            <button type="submit">Submit</button>
          </div>
        </div>


      </form>



    </div>

  )
}

export default Form1