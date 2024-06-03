import React from "react";
import { Link } from "react-router-dom";
import {
  PageTitle,
  PageTitleWithPortal,
} from "../../components/PageTitle/PageTitle";
import useDOMElement from "../hooks/useDOMElement";

function ProgressPage() {
  const titleContainer = useDOMElement("app-page-title-portal");

  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle title="Прогресс" breadcrumbs={["Прогресс"]} />
      </PageTitleWithPortal>

      <ul>
        <li>
          <Link to="/financial-reports">Financial reports - list</Link>
        </li>
        <li>
          <Link to="/financial-reports/add">
            Financial reports Page - add new
          </Link>
        </li>
        <li>
          <Link to="/financial-reports/1">Financial reports - view report</Link>
        </li>

        <li>
          <Link to="/auth">Auth - login</Link>
        </li>
        <li>
          <Link to="/auth/forgot-password">
            Auth - reset password (enter email)
          </Link>
        </li>
        <li>
          <Link to="/auth/forgot-password/confirm">
            Auth - reset password (confirm code)
          </Link>
        </li>
        <li>
          <Link to="/analytics">Analytics page</Link>
        </li>
        <li>
          <Link to="/error/404">Error page - error 404</Link>
        </li>
        <li>
          <Link to="/error/500">Error page - error 500</Link>
        </li>
        <li>
          <Link to="/overdue-list">Overdue - overdue list</Link>
        </li>
        <li>
          <Link to="/overdue-list/add">Overdue - add overdue</Link>
        </li>
        <li>
          <Link to="/overdue-list/1">Overdue - view overdue</Link>
        </li>
        <li>
          <Link to="/profile">Profile - view/edit profile</Link>
        </li>
        <li>
          <Link to="/user-management">User Management - list users</Link>
        </li>
        <li>
          <Link to="/user-management/1">User Management - view/edit user</Link>
        </li>
        <li>
          <Link to="/branches">Branches - view</Link>
        </li>
        <li>
          <Link to="/branches/add">Branches - add</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProgressPage;
