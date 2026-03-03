import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard, ArrowLeftRight, BarChart2,
    Bot, ChevronRight, TrendingUp, LogOut,
} from "lucide-react";
import { mockUser } from "../../utils/mockData";
import { getInitials } from "../../utils/helpers";

const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/transactions", label: "Transactions", icon: ArrowLeftRight },
    { to: "/analytics", label: "Analytics", icon: BarChart2 },
    { to: "/ai-mentor", label: "AI Mentor", icon: Bot },
];

function Sidebar({ open, mobileOpen, setMobileOpen }) {
    const navigate = useNavigate();

    const sidebarStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: open ? 240 : 72,
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
        display: "flex",
        flexDirection: "column",
        zIndex: 50,
        transition: "width 0.3s ease",
        overflow: "hidden",
    };

    const mobileSidebarStyle = {
        ...sidebarStyle,
        width: 240,
        transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <aside style={isMobile ? mobileSidebarStyle : sidebarStyle}>

            {/* Logo */}
            <div style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "20px 16px", borderBottom: "1px solid var(--color-border)",
                minHeight: 70, cursor: "pointer",
            }}
                onClick={() => navigate("/dashboard")}
            >
                <div style={{
                    minWidth: 40, height: 40, borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, fontWeight: 800, color: "#fff",
                    boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
                    flexShrink: 0,
                }}>M</div>
                {open && (
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text)", whiteSpace: "nowrap" }}>
                            Money<span style={{ color: "var(--color-primary-light)" }}>traits</span>
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                            <TrendingUp size={10} /> Smart Tracker
                        </div>
                    </div>
                )}
            </div>

            {/* Nav Links */}
            <nav style={{ flex: 1, padding: "16px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
                {navItems.map(({ to, label, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => `sidebar-link${isActive ? " active" : ""}`}
                        style={{ justifyContent: open ? "flex-start" : "center" }}
                        title={!open ? label : ""}
                    >
                        <Icon size={20} style={{ flexShrink: 0 }} />
                        {open && <span style={{ whiteSpace: "nowrap" }}>{label}</span>}
                        {open && <ChevronRight size={14} style={{ marginLeft: "auto", opacity: 0.4 }} />}
                    </NavLink>
                ))}
            </nav>

            {/* User Profile */}
            <div style={{
                padding: "12px 10px",
                borderTop: "1px solid var(--color-border)",
            }}>
                <div style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 12px", borderRadius: 12,
                    background: "var(--color-surface-2)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                }}>
                    <div style={{
                        minWidth: 34, height: 34, borderRadius: 10,
                        background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, fontSize: "0.85rem", color: "#fff",
                        flexShrink: 0,
                    }}>
                        {getInitials(mockUser.name)}
                    </div>
                    {open && (
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {mockUser.name}
                            </div>
                            <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {mockUser.email}
                            </div>
                        </div>
                    )}
                    {open && (
                        <LogOut
                            size={16}
                            style={{ color: "var(--color-text-muted)", cursor: "pointer", transition: "color 0.2s", flexShrink: 0 }}
                            onClick={() => navigate("/")}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
