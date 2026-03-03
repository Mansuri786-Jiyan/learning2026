import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, TrendingUp, Shield, BarChart2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const features = [
  { icon: BarChart2, text: "Real-time expense charts" },
  { icon: TrendingUp, text: "Smart savings insights" },
  { icon: Shield, text: "Secure & private finance" },
];

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Login:", data);
      await new Promise(r => setTimeout(r, 800)); // simulate API
      toast.success("Welcome back! 🎉");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", width: "100%", maxWidth: 900, minHeight: "80vh", margin: "0 auto", gap: 0, borderRadius: 24, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-surface)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>

      {/* Left Panel */}
      <div style={{
        flex: "0 0 380px", padding: "48px 40px",
        background: "linear-gradient(160deg, rgba(99,102,241,0.2) 0%, rgba(56,189,248,0.08) 100%)",
        borderRight: "1px solid var(--color-border)",
        display: "flex", flexDirection: "column", justifyContent: "center",
      }} className="auth-left">
        <div style={{ marginBottom: 12 }}>
          <div className="gradient-text" style={{ fontSize: "2.2rem", fontWeight: 900, lineHeight: 1.1 }}>
            Manage your finances smarter.
          </div>
        </div>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: 36, lineHeight: 1.7 }}>
          Track every rupee, visualize your spending, and build better financial habits.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {features.map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#818cf8",
              }}>
                <Icon size={16} />
              </div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{ flex: 1, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <h2 style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--color-text)", marginBottom: 6 }}>
          Welcome back 👋
        </h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: 32 }}>
          Sign in to your Moneytraits account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Email */}
          <div>
            <label style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 6, display: "block" }}>
              Email Address
            </label>
            <input className="input-dark" type="email" placeholder="you@email.com"
              style={{ width: "100%", padding: "12px 16px", borderRadius: 12, fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            />
            {errors.email && <p style={{ color: "#f43f5e", fontSize: "0.72rem", marginTop: 4 }}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 6, display: "block" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input className="input-dark" type={showPassword ? "text" : "password"} placeholder="••••••••"
                style={{ width: "100%", padding: "12px 44px 12px 16px", borderRadius: 12, fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)" }}>
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p style={{ color: "#f43f5e", fontSize: "0.72rem", marginTop: 4 }}>{errors.password.message}</p>}
          </div>

          {/* Forgot */}
          <div style={{ textAlign: "right", marginTop: -10 }}>
            <span style={{ fontSize: "0.78rem", color: "var(--color-primary-light)", cursor: "pointer" }}>
              Forgot password?
            </span>
          </div>

          <button type="submit" disabled={loading}
            style={{
              padding: "13px", borderRadius: 12, border: "none",
              background: loading ? "var(--color-surface-3)" : "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "#fff", fontWeight: 700, fontSize: "0.9rem", cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.25s", fontFamily: "var(--font-sans)",
              boxShadow: loading ? "none" : "0 8px 24px rgba(99,102,241,0.4)",
            }}
          >
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "var(--color-primary-light)", fontWeight: 600, textDecoration: "none" }}>
            Create one free
          </Link>
        </p>
      </motion.div>

      <style>{`@media (max-width: 700px) { .auth-left { display: none !important; } }`}</style>
    </div>
  );
}

export default Login;