import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import Transactions from "../Pages/Transactions";
import Analytics from "../Pages/Analytics";
import AiMentor from "../Pages/AiMentor";

const router = createBrowserRouter([
  // ===== Auth Routes =====
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  // ===== App Routes =====
  {
    element: <MainLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/ai-mentor", element: <AiMentor /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;