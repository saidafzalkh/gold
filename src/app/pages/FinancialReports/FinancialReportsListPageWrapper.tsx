import React, { Suspense, lazy } from "react";
import {
  PageTitle,
  PageTitleWithPortal,
} from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function FinancialReportsListPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");

  const FinancialReportsListPage = lazy(
    () => import("../../modules/financial-reports/FinancialReportsListPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle title="Отчёты" breadcrumbs={["Фин. Отчёты"]} />,
      </PageTitleWithPortal>

      <Suspense>
        <FinancialReportsListPage />
      </Suspense>
    </>
  );
}

export default FinancialReportsListPageWrapper;
