import React from "react";
import { getCSSVariableValue } from "../../../_metronic/assets/ts/_utils";
import BranchChartWidget from "./partials/BranchChartWidget";
import BranchTableWidget from "./partials/BranchTableWidget";
import { BranchTableData } from "../../constants/tables";

function BranchListPage() {
  return (
    <>
      <div
        className="w-100 position-absolute top-0 d-none d-sm-block"
        style={{
          height: 70,
          backgroundColor: getCSSVariableValue(
            "--bs-app-header-minimize-bg-color"
          ),
          left: 0,
        }}
      />
      <div style={{ maxWidth: 1160, transform: "translateY(-30px)" }} className="mx-auto">
        <BranchChartWidget />
      </div>

      <div style={{ maxWidth: 1160, marginTop: 10 }} className="mx-auto">
        <BranchTableWidget data={BranchTableData}/>
      </div>
    </>
  );
}

export default BranchListPage;
