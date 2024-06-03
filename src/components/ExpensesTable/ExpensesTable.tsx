import React from "react";
import { Link } from "react-router-dom";

interface ExpensesTableProps {
  title: string;
  columns: { label: string; key: string; className?: string }[];
  data: Record<string, any>[];
  className?: string;
  toolbar?: React.ReactElement;
  onRowClick?: (idx: number, expense: any) => void
}

function ExpensesTable(props: ExpensesTableProps) {
  const { className = "", columns, data, title = "" } = props;
  return (
    <div className={`card ${className} border-0 rounded-3 shadow-sm`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">{title}</span>
        </h3>
        <div className="card-toolbar">{props.toolbar}</div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-bordered table-row-gray-200 align-middle gs-0 gy-3 table-hover">
            {/* begin::Table head */}
            <thead style={{ borderTop: "1px solid var(--bs-gray-200)" }}>
              <tr className="fw-bold text-muted" style={{ height: 55 }}>
                {columns.map((column) => (
                  <th
                    className="min-w-150px fw-bolder text-dark"
                    key={column.key}
                    style={{ fontSize: 16 }}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map((dataItem, idx) => (
                <tr style={{ height: 55, cursor: "pointer" }} onClick={()=>props.onRowClick?.(idx, dataItem)}>
                  {columns.map((column) => (
                    <td
                      className={column.className || ""}
                      style={{ fontSize: 14, fontWeight: 600 }}
                    >
                      <span>{dataItem[column.key]}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
}

export default ExpensesTable;
