import React from "react";
import { getCSSVariableValue } from "../../../_metronic/assets/ts/_utils";
import BranchAddFormWidget from "./partials/BranchAddFormWidget";

function BranchAddPage() {
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
      <div
        style={{ maxWidth: 1160 }}
        className="mx-auto"
      >
        <BranchAddFormWidget/>
      </div>
    </>
  );
}

export default BranchAddPage;
