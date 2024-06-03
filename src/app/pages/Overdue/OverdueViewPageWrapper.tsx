import React, { Suspense, lazy } from "react";
import {
  PageTitle,
  PageTitleWithPortal,
} from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";
import { useParams } from "react-router-dom";

function OverdueViewPageWrapper() {
  const { id } = useParams();
  const titleContainer = useDOMElement("app-page-title-portal");

  const OverdueViewPage = lazy(
    () => import("../../modules/overdue/OverdueViewPage")
  );
  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle
          title={`Информация о просрочнике №${id}`}
          breadcrumbs={["Реестр просрочников"]}
        />
      </PageTitleWithPortal>
      <Suspense>
        <OverdueViewPage />
      </Suspense>
    </>
  );
}

export default OverdueViewPageWrapper;
