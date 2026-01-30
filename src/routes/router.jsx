import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../HomeLayout/HomeLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: async () => {
          const res = await fetch('/data.json');
          return res.json();
        }
      }
    ]
  },
  {
    path: "/*",
    element: <div>Error</div>,
  },
]);



export default router;