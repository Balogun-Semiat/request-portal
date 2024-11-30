import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Staff/Dashboard";
import DashboardLayout from "../pages/Staff/DashboardLayout";
import Login from "../components/Login";
import NewRequest from "../pages/Staff/NewRequest";
import TrackRequest from "../pages/Staff/TrackRequest";
import RequestDetails from "../pages/Staff/RequestDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    },
    {
        path: "/staff",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'request/new',
                element: <NewRequest />
            },
            {
                path: 'request/details',
                element: <RequestDetails />
            },
            {
                path: 'track-requests',
                element: <TrackRequest />
            }
        ]
    },
    {
        path: "/head-dept",
        element: <h1>Head of Department Route</h1>,
        children:[
            // Define routes for head of department here
            {
                index: true,
                element: <h1>this is the hod's Dashboard</h1>
            }
        ]
    },
    {
        path: "/admin",
        element: <h1>this is admin route</h1>,
        children:[
            {
                path: '',
                element: <h1>this is the admin's Dashboard</h1>
            },
            {
                path: 'add-user',
                element: <h1>this is the add user route</h1>
            }
        ]
    }
])


export default router;