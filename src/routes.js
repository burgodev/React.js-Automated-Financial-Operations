import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import {
  ManagerDashboard,
  ClientManagement,
  SupportList,
  SupportCenter,
} from "./pages/Manager";
import NewSignature from "./pages/Signatures/NewSignature/index";
import MySignatures from "./pages/Signatures/MySignatures/index";
import Signatures from "./pages/Signatures";
import Operations from "./pages/Operations";
import Login from "./pages/Login";
import ChangePassword from "./pages/Login/components/ChangePassword";
import Profile from "./pages/Profile";
import AppWrapper from "./_common/components/AppWrapper";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/assinaturas" element={<MySignatures />} />
          <Route
            path="/assinaturas/novas-assinaturas"
            element={<NewSignature />}
          />
          {/* <Route path="/assinaturas" element={<Signatures />} /> */}
          {/* <Route path={`/assinaturas/pagamento/:id`} element={<Payment />} /> */}
          <Route path="/operations" element={<Operations />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route
            path="/manager/clientManagement"
            element={<ClientManagement />}
          />
          <Route path="/" element={<Login />} />
          <Route
            path={`/auth/password-recovery/:token`}
            element={<ChangePassword />}
          />
          <Route path="/manager/supportList" element={<SupportList />} />
          <Route path="/manager/supportCenter" element={<SupportCenter />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}
