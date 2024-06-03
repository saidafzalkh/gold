import React, { Suspense, lazy } from "react";
import {
  PageTitle,
  PageTitleWithPortal,
} from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function OverdueListPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");
  const OverdueListPage = lazy(
    () => import("../../modules/overdue/OverdueListPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle
          title="Реестр просрочников"
          breadcrumbs={["Реестр просрочников"]}
        />
      </PageTitleWithPortal>
      <Suspense>
        <OverdueListPage />
      </Suspense>
    </>
  );
}

export default OverdueListPageWrapper;
