import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import UserNavbar from "../Components/user/UserNavbar";
import Allusers from "../Components/user/Allusers";
import AdminSidebar from "../Components/admin/AdminSidebar";

function AppRouter() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path:"/user", element:<UserNavbar />,
      children:[{
        path:"Allusers", element:<Allusers/>
      }]
    },
    {
      path:"admin",element:<AdminSidebar/>
    } 
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;