import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
 import Login from "../pages/Home/Authentication/Login";
import Registration from "../pages/Home/Authentication/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '',
          element: <Home></Home>
        },
        {
          path: '/logIn',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }
      ]
    },
  ]);
export default router;
