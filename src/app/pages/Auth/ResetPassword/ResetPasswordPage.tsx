import React from "react";
import { Route, Routes } from "react-router-dom";
import { ResetPasswordInputEmail } from "./steps/ResetPasswordStepInputEmail";
import ResetPasswordInputCode from "./steps/ResetPasswordInputCode";

function ResetPasswordPage() {
  return (
    <Routes>
      <Route index element={<ResetPasswordInputEmail />} />
      <Route path="confirm" element={<ResetPasswordInputCode />} />
    </Routes>
  );
}

export default ResetPasswordPage;
