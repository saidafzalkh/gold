import { Suspense, lazy } from "react";
import {
  PageTitle,
  PageTitleWithPortal,
} from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function OverdueAddPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");

  const OverdueAddPage = lazy(
    () => import("../../modules/overdue/OverdueAddPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <PageTitle
          title="Добавить просрочников"
          breadcrumbs={["Реестр просрочников"]}
        />
      </PageTitleWithPortal>
      <Suspense>
        <OverdueAddPage />
      </Suspense>
    </>
  );
}

export default OverdueAddPageWrapper;
