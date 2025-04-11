import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPasswordPage from "./modules/authentication/pages/ForgotPasswordPage";
import RegisterPage from "./modules/authentication/pages/RegisterPage";
import LoginPage from "./modules/authentication/pages/LoginPage";
import ErrorNotFoundpage from "./modules/common/pages/ErrorNotFoundpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/404" element={<ErrorNotFoundpage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
