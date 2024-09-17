import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/dashboard/HomePage";
import UserPage from "./pages/UserPage";
import AppLoader from "./component/loading/AppLoader";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { AuthProvider } from "./context/Auth";



function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* 
            protected Routes
            */}

          <Route path="/" Component={HomePage}>
            <Route path="users" element={<UserPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
