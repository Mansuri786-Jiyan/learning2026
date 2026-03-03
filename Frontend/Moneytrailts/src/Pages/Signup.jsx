import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Signup:", data);
      await new Promise(r => setTimeout(r, 800));
      toast.success("Account created! Welcome to Moneytraits 🎉");
      navigate("/dashboard");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 44px 12px 16px", borderRadius: 12,
    fontSize: "0.875rem", fontFamily: "var(--font-sans)",
  };

  return (
    <div style={{
      width: "100%", maxWidth: 480, margin: "0 auto",
      background: "var(--color-surface)", border: "1px solid var(--color-border)",
      borderRadius: 24, padding: "40px 36px",
      boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
    }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14, margin: "0 auto 14px",
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 800, color: "#fff",
            boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
          }}>M</div>
          <h2 style={{ fontWeight: 800, fontSize: "1.4rem", color: "var(--color-text)", marginBottom: 4 }}>Create Account</h2>
          <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>Join Moneytraits and take control of your finances</p>
        </div>

        {/* Google */}
        <button type="button" style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          padding: "11px", borderRadius: 12, border: "1px solid var(--color-border)",
          background: "var(--color-surface-2)", color: "var(--color-text)", cursor: "pointer",
          fontSize: "0.85rem", fontWeight: 500, fontFamily: "var(--font-sans)", marginBottom: 20,
          transition: "all 0.2s",
        }}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" style={{ width: 18, height: 18 }} />
          Continue with Google
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: "var(--color-border)" }} />
          <span style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)" }}>OR</span>
          <div style={{ flex: 1, height: 1, background: "var(--color-border)" }} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Name */}
          <div>
            <label style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 6, display: "block" }}>Full Name</label>
            <input className="input-dark" style={{ ...inputStyle, paddingRight: 16 }} placeholder="Your full name"
              {...register("name", { required: "Name is required" })} />
            {errors.name && <p style={{ color: "#f43f5e", fontSize: "0.72rem", marginTop: 4 }}>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 6, display: "block" }}>Email</label>
            <input className="input-dark" type="email" style={{ ...inputStyle, paddingRight: 16 }} placeholder="you@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })} />
            {errors.email && <p style={{ color: "#f43f5e", fontSize: "0.72rem", marginTop: 4 }}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 6, display: "block" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input className="input-dark" type={showPassword ? "text" : "password"} style={inputStyle} placeholder="••••••••"
                {...register("password", { required: "Password required", minLength: { value: 6, message: "Min 6 chars" } })} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)" }}>
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p style={{ color: "#f43f5e", fontSize: "0.72rem", marginTop: 4 }}>{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 6, display: "block" }}>Confirm Password</label>
            <div style={{ position: "relative" }}>
              <input className="input-dark" type={showConfirm ? "text" : "password"} style={inputStyle} placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: v => v === password || "Passwords don't match",
                })} />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)" }}>
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && <p style={{ color: "#f43f5e", fontSize: "0.72rem", marginTop: 4 }}>{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" disabled={loading} style={{
            padding: "13px", borderRadius: 12, border: "none",
            background: loading ? "var(--color-surface-3)" : "linear-gradient(135deg, #6366f1, #4f46e5)",
            color: "#fff", fontWeight: 700, fontSize: "0.9rem",
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "var(--font-sans)",
            boxShadow: loading ? "none" : "0 8px 24px rgba(99,102,241,0.4)",
            transition: "all 0.25s",
          }}>
            {loading ? "Creating account..." : "Create Account →"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "var(--color-primary-light)", fontWeight: 600, textDecoration: "none" }}>Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;