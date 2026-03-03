import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout() {
    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ background: "var(--color-bg)" }}>

            {/* Background Orbs */}
            <div style={{
                position: "absolute", top: "-10%", left: "-5%",
                width: 500, height: 500, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "-15%", right: "-5%",
                width: 600, height: 600, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Brand Badge */}
            <div style={{ position: "absolute", top: 24, left: 32, display: "flex", alignItems: "center", gap: 10, zIndex: 10 }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, color: "#fff",
                    boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
                }}>M</div>
                <span style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "1.1rem" }}>Moneytraits</span>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Outlet />
            </motion.div>
        </div>
    );
}

export default AuthLayout;
