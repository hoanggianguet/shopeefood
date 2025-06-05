
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import Main from "@/pages/Main";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
