import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Order from "../Order/Order";
import PrivateRoutes from "../../Routes/PrivateRoutes";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order></Order>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
