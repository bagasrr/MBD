import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage/Home.jsx";
import List from "./Pages/ListPage/List.jsx";
import Transact from "./Pages/TransactionPage/Transac.jsx";
import TransactStatus from "./Pages/TransactionPage/TransactStatus/TransacStatus.jsx";
import AdminPage from "./Pages/AdminPage/Admin.jsx";
import AddUser from "./Pages/AdminPage/AddUser.jsx";
import EditUser from "./Pages/AdminPage/EditUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/transaction/:id",
    element: <Transact />,
  },
  {
    path: "/transaction/:id/status",
    element: <TransactStatus />,
  },
  {
    path: "/adminpage",
    element: <AdminPage />,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
  {
    path: "/edit/:id",
    element: <EditUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
