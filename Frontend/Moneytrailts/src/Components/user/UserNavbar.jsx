import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  // Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    // Later remove token from localStorage
    navigate("/");
  };

  const linkStyle =
    "px-3 py-2 rounded-md transition-all duration-300";

  return (
    <>
    <Outlet></Outlet>
      {/* Glassmorphism Navbar */}
      <nav className="backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 shadow-lg border-b border-white/20 dark:border-gray-700 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Moneytrails
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">

            <NavLink
              to="/user"
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/user/all-users"
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
                }`
              }
            >
              Users
            </NavLink>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"
              >
                JM
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3">

            <NavLink
              to="/user"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/user/all-users"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Users
            </NavLink>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block"
            >
              Toggle Dark Mode
            </button>

            <button
              onClick={handleLogout}
              className="block text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-24 px-6 bg-gray-100 dark:bg-gray-900 min-h-screen transition-all">
        <Outlet />
      </div>
    </>
  );
}

export default UserNavbar;