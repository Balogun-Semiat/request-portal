// Dashboard.js
import React from "react";
import { useUser } from "./UserContext";
import { Navigate } from "react-router-dom"; // To redirect if no role is set
import AdminDashboardLayout from "../pages/Admin/AdminDashboardLayout";
import DashboardLayout from "../pages/Staff/DashboardLayout";

const Dashboard = () => {
  const { role } = useUser(); // Get the role from context

  if (!role) {
    return <Navigate to="/login" />; // Redirect to login if no role is set
  }

  // Conditional rendering based on role
  if (role === "admin") {
    return <AdminDashboardLayout />;
  } else if (role === "staff") {
    return <DashboardLayout />;
  }

  return <div>Unauthorized</div>; // If role doesn't match, show unauthorized
};

export default Dashboard;
