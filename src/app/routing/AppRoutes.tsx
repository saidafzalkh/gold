/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "../App";
import { AuthPage, Logout, useAuth } from "../modules/auth";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { PrivateRoutes } from "./PrivateRoutes";
import ProgressPage from "../pages/ProgressPage";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/*" element={<PrivateRoutes />} />
          <Route index element={<Navigate to="/analytics" />} />
          <Route path="auth/*" element={<AuthPage />} />
          {/* {currentUser ? (
						<>
							<Route path='/*' element={<PrivateRoutes />} />
							<Route index element={<Navigate to='/crafted/pages/console' />} />
						</>
					) : (
						<>
							<Route path='auth/*' element={<AuthPage />} />
							<Route path='*' element={<Navigate to='/auth' />} />
						</>
					)} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
