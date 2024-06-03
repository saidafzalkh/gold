import { Suspense, lazy } from "react";
import { PageTitleWithPortal } from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function AnalyticsPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");

  const AnalyticsPage = lazy(
    () => import("../../modules/analytics/AnalyticsPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <div style={{ transform: "translateY(-100%)" }}>
          <h1
            className="text-white fw-bolder"
            style={{ fontSize: 24, marginBottom: 10, lineHeight: "24px" }}
          >
            Аналитика
          </h1>
          <span
            style={{
              color: "#CFAEAE",
              fontSize: 14,
              lineHeight: "14px",
              fontWeight: 500,
            }}
          >
            Добро пожаловать, Азамат
          </span>
        </div>
      </PageTitleWithPortal>
      <Suspense>
        <AnalyticsPage />
      </Suspense>
    </>
  );
}

export default AnalyticsPageWrapper;
