import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Dashboard options/Dashboard";
import DashboardLayout from "../pages/Staff/DashboardLayout";
import Login from "../components/Login";
import NewRequest from "../components/Dashboard options/NewRequest";
import TrackRequest from "../components/Dashboard options/TrackRequest";
import RequestDetails from "../components/Dashboard options/RequestDetails";
import AddNewUser from "../pages/Admin/AddNewUser";
import AdminDashboardLayout from "../pages/Admin/AdminDashboardLayout";
import CreateCampus from "../pages/Admin/CreateCampus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/staff",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "request/new",
        element: <NewRequest />,
      },
      {
        path: "request/details",
        element: <RequestDetails />,
      },
      {
        path: "track-requests",
        element: <TrackRequest />,
      },
    ],
  },
  {
    path: "/head-dept",
    element: <h1>Head of Department Route</h1>,
    children: [
      // Define routes for head of department here
      {
        index: true,
        element: <h1>this is the hod's Dashboard</h1>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "request/new",
        element: <NewRequest />,
      },
      {
        path: "request/details",
        element: <RequestDetails />,
      },
      {
        path: "track-requests",
        element: <TrackRequest />,
      },
      {
        path: "add-user",
        element: <AddNewUser />,
      },
      {
        path: "create-campus",
        element: <CreateCampus />,
      },
      {
        path: "create-faculty",
        element: <AddNewUser />,
      },
    ],
  },
]);

export default router;
