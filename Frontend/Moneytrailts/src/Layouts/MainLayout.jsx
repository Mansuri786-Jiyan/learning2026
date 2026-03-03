import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Layout/Sidebar";
import Navbar from "../Components/Layout/Navbar";

function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--color-bg)" }}>

            {/* Mobile Overlay */}
            {mobileSidebarOpen && (
                <div
                    onClick={() => setMobileSidebarOpen(false)}
                    style={{
                        position: "fixed", inset: 0, zIndex: 40,
                        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
                    }}
                />
            )}

            {/* Sidebar */}
            <Sidebar
                open={sidebarOpen}
                mobileOpen={mobileSidebarOpen}
                setMobileOpen={setMobileSidebarOpen}
            />

            {/* Main Content */}
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                marginLeft: sidebarOpen ? 240 : 72,
                transition: "margin-left 0.3s ease",
            }}
                className="main-content"
            >
                <Navbar
                    onMenuClick={() => {
                        if (window.innerWidth < 768) {
                            setMobileSidebarOpen(true);
                        } else {
                            setSidebarOpen(!sidebarOpen);
                        }
                    }}
                />

                <main style={{
                    flex: 1,
                    padding: "24px",
                    overflowY: "auto",
                }}>
                    <Outlet />
                </main>
            </div>

            {/* Responsive override */}
            <style>{`
        @media (max-width: 768px) {
          .main-content { margin-left: 0 !important; }
        }
      `}</style>
        </div>
    );
}

export default MainLayout;
