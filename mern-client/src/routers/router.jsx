import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";

import UploadBook from "../dashboard/UploadBook";
import DashboardMain from "../dashboard/DashboardMain";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Signup from "../components/Signup";

// Define the router with the future flag options correctly set in the options
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/Shop',
          element: <Shop />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/book/:id",
          element: <SingleBook />,
          loader: async ({ params }) => {
            const response = await fetch(`http://localhost:5000/book/${params.id}`);
            return response.json(); // Directly returning the JSON response without checking if successful
          }
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element: <DashboardMain/>

        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBook/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },{
      path: "sign-up",
      element: <Signup/>
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
