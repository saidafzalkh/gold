import React from "react";
import { getCSSVariableValue } from "../../../_metronic/assets/ts/_utils";
import UserManagementTable from "./partials/UserManagementTable";
import {
  UserManagementTableConfig,
  UserManagementTableData,
} from "../../constants/tables";

function UserManagementListPage() {
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
        className="card mx-auto"
        style={{ maxWidth: 1160, transform: "translateY(-30px)", padding: 30 }}
      >
        <UserManagementTable
          columns={UserManagementTableConfig}
          data={UserManagementTableData}
          title=""
        />
      </div>
    </>
  );
}

export default UserManagementListPage;
