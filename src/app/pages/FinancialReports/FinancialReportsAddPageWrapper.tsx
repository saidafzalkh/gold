import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import {
  PageTitle,
  PageTitleWithPortal,
} from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function FinancialReportsAddPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");

  const FinancialReportsAddPage = lazy(
    () => import("../../modules/financial-reports/FinancialReportsAddPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle title={`Отчёты`} breadcrumbs={["Фин. Отчёты"]} />
      </PageTitleWithPortal>

      <Suspense>
        <FinancialReportsAddPage />
      </Suspense>

      <Toaster />
    </>
  );
}

export default FinancialReportsAddPageWrapper;
