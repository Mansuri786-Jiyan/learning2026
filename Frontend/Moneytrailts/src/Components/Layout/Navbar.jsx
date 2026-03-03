import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Bell, Search, Plus, X } from "lucide-react";
import { mockUser } from "../../utils/mockData";
import { getInitials } from "../../utils/helpers";

const pageTitles = {
    "/dashboard": { title: "Dashboard", subtitle: "Overview of your finances" },
    "/transactions": { title: "Transactions", subtitle: "All your income & expenses" },
    "/analytics": { title: "Analytics", subtitle: "Deep dive into your spending" },
    "/ai-mentor": { title: "AI Mentor", subtitle: "Smart financial advice" },
};

function Navbar({ onMenuClick }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchOpen, setSearchOpen] = useState(false);
    const page = pageTitles[location.pathname] || { title: "Moneytraits", subtitle: "" };

    return (
        <header style={{
            height: 68,
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: 16,
            position: "sticky",
            top: 0,
            zIndex: 30,
        }}>

            {/* Menu Toggle */}
            <button
                onClick={onMenuClick}
                style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 10,
                    width: 38, height: 38,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", color: "var(--color-text-muted)",
                    transition: "all 0.2s", flexShrink: 0,
                }}
            >
                <Menu size={18} />
            </button>

            {/* Page Title */}
            {!searchOpen && (
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.2 }}>
                        {page.title}
                    </h1>
                    <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginTop: 1 }}>
                        {page.subtitle}
                    </p>
                </div>
            )}

            {/* Search Bar (expanded on click) */}
            {searchOpen && (
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                    <div style={{
                        flex: 1, display: "flex", alignItems: "center", gap: 10,
                        background: "var(--color-surface-2)",
                        border: "1px solid var(--color-primary)",
                        borderRadius: 10, padding: "0 14px", height: 38,
                        boxShadow: "0 0 0 3px rgba(99,102,241,0.15)",
                    }}>
                        <Search size={15} style={{ color: "var(--color-text-muted)" }} />
                        <input
                            autoFocus
                            placeholder="Search transactions, categories..."
                            style={{
                                background: "transparent", border: "none", outline: "none",
                                color: "var(--color-text)", fontSize: "0.875rem", flex: 1,
                                fontFamily: "var(--font-sans)",
                            }}
                        />
                    </div>
                    <button
                        onClick={() => setSearchOpen(false)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: "0 8px" }}
                    >
                        <X size={16} />
                    </button>
                </div>
            )}

            {/* Right Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
                {!searchOpen && (
                    <button
                        onClick={() => setSearchOpen(true)}
                        style={{
                            background: "var(--color-surface-2)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 10, width: 38, height: 38,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer", color: "var(--color-text-muted)",
                        }}
                    >
                        <Search size={17} />
                    </button>
                )}

                {/* Add Transaction */}
                <button
                    onClick={() => navigate("/transactions")}
                    style={{
                        display: "flex", alignItems: "center", gap: 6,
                        padding: "0 14px", height: 38, borderRadius: 10,
                        background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                        border: "none", color: "#fff", cursor: "pointer",
                        fontSize: "0.8rem", fontWeight: 600,
                        transition: "all 0.2s", fontFamily: "var(--font-sans)",
                        boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
                    }}
                    className="hidden-mobile"
                >
                    <Plus size={16} /> Add
                </button>

                {/* Notifications */}
                <button style={{
                    position: "relative",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 10, width: 38, height: 38,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", color: "var(--color-text-muted)",
                }}>
                    <Bell size={17} />
                    <span style={{
                        position: "absolute", top: 8, right: 8,
                        width: 7, height: 7, borderRadius: "50%",
                        background: "#f43f5e",
                        border: "1.5px solid var(--color-surface)",
                    }} />
                </button>

                {/* Avatar */}
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "0.8rem", color: "#fff", cursor: "pointer",
                }}>
                    {getInitials(mockUser.name)}
                </div>
            </div>

            <style>{`
        @media (max-width: 550px) { .hidden-mobile { display: none !important; } }
      `}</style>
        </header>
    );
}

export default Navbar;
