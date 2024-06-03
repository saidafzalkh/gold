import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/register/Registration";
import { Login } from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { RegistrationFormProvider } from "./components/register/core/RegistrationForm";
import { ForgotPassword } from "./components/forgot-password/ForgotPassword";
import { ForgotPasswordProvider } from "./components/forgot-password/core/ForgotPasswordContext";
import { SignInPage } from "../../pages/Auth/SignInPage";
import ResetPasswordPage from "../../pages/Auth/ResetPassword/ResetPasswordPage";

const AuthPage = () => (
  <Routes>
    <Route path="login" element={<SignInPage />} />
    <Route path="forgot-password/*" element={<ResetPasswordPage />} />
    <Route index element={<SignInPage />} />
  </Routes>
);

export { AuthPage };
