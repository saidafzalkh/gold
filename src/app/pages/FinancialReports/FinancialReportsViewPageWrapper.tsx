import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import {
    PageTitle,
    PageTitleWithPortal,
} from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function FinancialReportsViewPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");
  const { id } = useParams();

  const FinancialReportsViewPage = lazy(
    () => import("../../modules/financial-reports/FinancialReportsViewPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle title={`Отчёт №${id}`} breadcrumbs={["Фин. Отчёты"]} />,
      </PageTitleWithPortal>

      <Suspense>
        <FinancialReportsViewPage />
      </Suspense>
    </>
  );
}

export default FinancialReportsViewPageWrapper;
