import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import AnalyticsPageWrapper from "../pages/Analytics/AnalyticsPageWrapper.tsx";
import BranchAddPageWrapper from "../pages/Branch/BranchAddPageWrapper.tsx";
import BranchListPageWrapper from "../pages/Branch/BranchListPageWrapper.tsx";
import FinancialReportsAddPageWrapper from "../pages/FinancialReports/FinancialReportsAddPageWrapper.tsx";
import FinancialReportsListPageWrapper from "../pages/FinancialReports/FinancialReportsListPageWrapper.tsx";
import FinancialReportsViewPageWrapper from "../pages/FinancialReports/FinancialReportsViewPageWrapper.tsx";
import OverdueAddPageWrapper from "../pages/Overdue/OverdueAddPageWrapper.tsx";
import OverdueListPageWrapper from "../pages/Overdue/OverdueListPageWrapper.tsx";
import OverdueViewPageWrapper from "../pages/Overdue/OverdueViewPageWrapper.tsx";
import ProfilePageWrapper from "../pages/Profile/ProfilePageWrapper.tsx";
import ProgressPage from "../pages/ProgressPage.tsx";
import UserManagementListPageWrapper from "../pages/UserManagement/UserManagementListPageWrapper.tsx";
import UserManagementViewPageWrapper from "../pages/UserManagement/UserManagementViewPageWrapper.tsx";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="analytics" element={<AnalyticsPageWrapper />} />
        <Route
          path="financial-reports"
          element={<FinancialReportsListPageWrapper />}
        />
        <Route
          path="financial-reports/add"
          element={<FinancialReportsAddPageWrapper />}
        />
        <Route
          path="financial-reports/:id"
          element={<FinancialReportsViewPageWrapper />}
        />
        <Route path="overdue-list" element={<OverdueListPageWrapper />} />
        <Route path="overdue-list/add" element={<OverdueAddPageWrapper />} />
        <Route path="overdue-list/:id" element={<OverdueViewPageWrapper />} />

        <Route path="profile" element={<ProfilePageWrapper />} />
        <Route
          path="user-management"
          element={<UserManagementListPageWrapper />}
        />
        <Route
          path="user-management/:id"
          element={<UserManagementViewPageWrapper />}
        />

        <Route path="branches" element={<BranchListPageWrapper />} />
        <Route path="branches/add" element={<BranchAddPageWrapper />} />

        <Route path="progress" element={<ProgressPage />} />

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
