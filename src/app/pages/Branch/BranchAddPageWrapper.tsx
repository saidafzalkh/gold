import { Suspense, lazy } from "react";
import { PageTitleWithPortal } from "../../../components/PageTitle/PageTitle";
import useDOMElement from "../../hooks/useDOMElement";

function BranchAddPageWrapper() {
  const titleContainer = useDOMElement("app-page-title-portal");
  const BranchAddPage = lazy(
    () => import("../../modules/branch/BranchAddPage")
  );

  return (
    <>
      <PageTitleWithPortal container={titleContainer}>
        <div style={{ transform: "translateY(-100%)" }}>
          <h1
            className="text-white fw-bolder"
            style={{ fontSize: 24, marginBottom: 10, lineHeight: "24px" }}
          >
            Филиалы
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
        <BranchAddPage />
      </Suspense>
    </>
  );
}

export default BranchAddPageWrapper;
