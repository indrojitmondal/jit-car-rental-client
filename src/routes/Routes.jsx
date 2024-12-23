import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
 import Login from "../pages/Home/Authentication/Login";
import Registration from "../pages/Home/Authentication/Register";
import ErrorPage from "../pages/Home/ErrorPage";
import AvailableCars from "../pages/Home/AvailableCars";
import AddCar from "../pages/Home/AddCar";
import MyCars from "../pages/Home/MyCars";
import MyBookings from "../pages/Home/MyBookings";


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
          path: '/available-cars',
          element: <AvailableCars></AvailableCars>
  
        },
        {
          path:'/add-car',
          element: <AddCar></AddCar>
        },
        {
          path: '/my-cars',
          element: <MyCars></MyCars>
        },
        {
          path: '/my-bookings',
          element: <MyBookings></MyBookings>
        }
       
      ]
    },
    {
      path: '/logIn',
      element: <Login></Login>
    },
    {
      path: '/registration',
      element: <Registration></Registration>
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);
export default router;
