 import { Routes, Route, } from "react-router-dom";
import React from 'react'
import DashboardPage from "./pages/Dashboard";
import AuditPage from "./pages/Audit";
import DistrictWisePage from "./pages/DistrictWise";
import ExternalRiskPage from "./pages/ExternalRisk";
import FacilityRiskPage from "./pages/FacilityRisk";
import ReportPage from "./pages/Reports";
import SecurityRiskPage from "./pages/SecurityRisk";
import TicketPage from "./pages/Tickets";
import Footer from "./components/layouts/Footer";
import SideNav from "./components/layouts/SideNav";
import Example from "./pages/Test";
import Setting from "./pages/settings";
import LoginPage from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ForgotPassword from "./pages/auth/forgotPassword";
import AuthProvider from "./contexts/AuthContext";
import TotalAlerts from "./pages/TotalAlerts";

const pagePath = [
  { path: "/", element: <DashboardPage /> },
  { path: "security-risk", element: <SecurityRiskPage /> },
  { path: "audit", element: <AuditPage /> },
  { path: "district-wise", element: <DistrictWisePage /> },
  { path: "external-risk", element: <ExternalRiskPage /> },
  { path: "facility-risk", element: <FacilityRiskPage /> },
  { path: "reports", element: <ReportPage /> },
  { path: "tickets", element: <TicketPage /> },
  { path: "settings", element: <Setting /> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <Signup /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "total-alerts", element: <TotalAlerts /> },
];

function App() {
  return (
    <div className="flex flex-col flex-grow flex-shrink w-full min-h-screen">
      <div className="flex flex-col flex-grow flex-shrink relative">
        <div
          className="min-h-screen ml-20"
          style={{ backgroundColor: "#F3F6F8" }}
        >
          <AuthProvider>
            <SideNav />
            <Routes>
              {pagePath.map((items) => (
                <Route path={items.path} element={items.element} />
              ))}
            </Routes>
            <Footer />
          </AuthProvider>
        </div>
      </div>
    </div>
  );
}


export default App;
