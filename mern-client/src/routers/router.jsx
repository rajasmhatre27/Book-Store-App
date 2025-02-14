import { createBrowserRouter } from "react-router-dom";
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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/shop", // Changed to lowercase for consistency
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
            try {
              const response = await fetch(`http://localhost:5000/book/${params.id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch book data');
              }
              return response.json();
            } catch (error) {
              console.error(error);
              throw new Response("Error loading book data", { status: 500 });
            }
          }
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute> <DashboardMain /></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBook />
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBook />,
          loader: async ({ params }) => {
            try {
              const response = await fetch(`http://localhost:5000/book/${params.id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch book data');
              }
              return response.json();
            } catch (error) {
              console.error(error);
              throw new Response("Error loading book data", { status: 500 });
            }
          }
        }
      ]
    },
    {
      path: "/sign-up",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login/>
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true
    }
  }
);

export default router;
