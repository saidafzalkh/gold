import React from "react";
import BranchTable from "./BranchTable";
import { PaginationWidget } from "../../../../components/UI/Pagination/Pagination";
import { Link } from "react-router-dom";
import { BranchTableConfig } from "../../../constants/tables";
import TableFilter from "../../../../components/UI/TableFilter/TableFilter";

interface BranchTableWidgetProps {
  data: Record<string, any>[];
}

function BranchTableWidget({ data }: BranchTableWidgetProps) {
  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: 12 }}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Филиалы</span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            {`Найдено ${data.length} элементов`}
          </span>
        </h3>
        <div className="card-toolbar">
          <div className="d-flex align-items-center position-relative me-4">
            <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-3">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
            <input
              type="text"
              id="kt_filter_search"
              className="form-control form-control-white form-control-sm w-150px ps-9"
              placeholder="Поиск"
            />
          </div>
          <TableFilter
            columns={BranchTableConfig}
            onFilter={(filterState) => console.log(filterState)}
          />
          <Link
            to="/branches/add"
            className="btn btn-sm btn-warning me-3 mt-3 mt-sm-0"
          >
            Добавить филиал
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body" style={{ paddingTop: 30 }}>
        {/* begin::Table container */}
        <BranchTable data={data} columns={BranchTableConfig} />
        {/* end::Table container */}
        <div className="d-flex justify-content-end">
          <PaginationWidget pages={2} currentPage={0} />
        </div>
      </div>
    </div>
  );
}

export default BranchTableWidget;
