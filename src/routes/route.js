import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Login from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import UsrLogin from "../pages/Auth/UsrLogin";

const route = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/usr/login",
    element: <UsrLogin />,
  },
  {
    path: "/",
    // element: <PrivateRoute>{<Main />}</PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/usr/dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);

export default route;
