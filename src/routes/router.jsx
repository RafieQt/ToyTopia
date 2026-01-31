import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../HomeLayout/HomeLayout";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import ToyDetails from "../Pages/ToyDetails";
import Loading from "../Pages/Loading";
import ToyQnA from "../Pages/ToyQnA";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch('/data.json');
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/QnA",
        element: <ToyQnA></ToyQnA>
      },
      {
        path: "/ToyDetails/:toyId",
        element: <ToyDetails></ToyDetails>,
        loader: () => fetch('/data.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },


  {
    path: "/*",
    element: <div>Error</div>,
  },

]);



export default router;