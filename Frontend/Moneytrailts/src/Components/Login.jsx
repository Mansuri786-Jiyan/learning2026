import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
      console.log("Login Data:", data);
    const res = await axios.post("https://node5.onrender.com/user/login",data)
    console.log(res);
    console.log(res.data);
    navigate("/user/Allusers")
     toast('Success')
    } catch (error) {
      console.log("error",error);
      toast(error)
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-teal-400 via-blue-500 to-purple-700">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Manage Your Finances Smartly
          </h1>
          <p className="text-lg opacity-90">
            Visual dashboards, expense tracking and financial awareness in one place.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white/10 backdrop-blur-lg">
        <div className="w-full max-w-md px-8 py-10 text-white">

          <h2 className="text-3xl font-bold mb-8">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/50 focus:outline-none focus:border-white py-2 placeholder-white/70"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent border-b border-white/50 focus:outline-none focus:border-white py-2 placeholder-white/70"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 cursor-pointer text-white/70"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>

              {errors.password && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg font-semibold shadow-lg"
            >
              LOGIN
            </button>
          </form>

          <p className="mt-6 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="underline font-semibold">
              Register Here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;