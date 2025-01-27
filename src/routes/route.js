import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Login from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import Register from "../pages/Auth/RegisterPage";

const route = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/usr/register",
    element: <Register />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/usr/dashboard",
    element: <UserDashboard />,
  },
]);

export default route;
