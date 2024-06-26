import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FinancialReportTableConfig } from "../../app/constants/tables";
import { PaginationWidget } from "../UI/Pagination/Pagination";
import TableFilter from "../UI/TableFilter/TableFilter";

interface FinancialReportTableProps {
  title: string;
  columns: { label: string; key: string; className?: string }[];
  data: Record<string, any>[];
  className?: string;
  onRowClick?: (id: number | string) => void;
  page: number;
  pages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setParams: React.Dispatch<React.SetStateAction<any>>;
  refetch: any;
  loading: boolean;
}

function FinancialReportTable(props: FinancialReportTableProps) {
  const { className = "", columns, data, title = "", onRowClick } = props;

  return (
    <div className={`card ${className} border-0 rounded-3`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">{title}</span>
        </h3>
        <div className="card-toolbar">
          {/* <div className="d-flex align-items-center position-relative me-4">
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
          </div> */}
          <TableFilter
            columns={FinancialReportTableConfig}
            onFilter={(filterState) => {
              console.log(filterState);
              props.setParams(filterState);
              props.refetch();
            }}
          />
          <Link
            to="/financial-reports/add"
            className="btn btn-sm btn-warning me-3 mt-3 mt-sm-0"
          >
            Добавить отчёт
          </Link>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-bordered table-hover table-row-gray-200 align-middle gs-0 gy-3">
            {/* begin::Table head */}
            <thead style={{ borderTop: "1px solid var(--bs-gray-200)" }}>
              <tr className="fw-bold text-muted">
                {columns.map((column) => (
                  <th
                    className={`${column.key !== 'id' && 'min-w-150px'} fw-bolder text-dark`}
                    key={column.key}
                    style={{ fontSize: 16 }}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!props.loading ? (
                data.map((dataItem) => (
                  <tr
                    onClick={() => onRowClick?.(dataItem.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {columns.map((column) => (
                      <td
                        className={column.className || ""}
                        style={{ fontSize: 14, fontWeight: 600 }}
                      >
                        <span>
                          {column.key === "created_at"
                            ? moment(dataItem[column.key]).format("DD/MM/YYYY")
                            : dataItem[column.key] || "-"}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5px 0",
                    width: "100%",
                  }}
                >
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </div>
              )}
            </tbody>
            <tfoot
              className="table-default"
              style={{ borderTop: "2px solid #E1E3EA" }}
            >
              <tr className="my-3">
                <td style={{ fontSize: 14 }} className="fw-bolder">
                  <span>Итого</span>
                </td>
                {columns.slice(1).map((column) => {
                  // Calculate the sum of values for the current column key
                  const sum =
                    data &&
                    data.reduce(
                      (accumulator, currentObject) =>
                        accumulator + (currentObject[column.key] || 0),
                      0
                    );

                  return (
                    <td
                      className={column.className || ""}
                      style={{ fontSize: 14, fontWeight: 600 }}
                    >
                      {/* <span>
                        {column.key === "consumptions_sum_sum" ||
                        column.key === "net_profit"
                          ? sum
                          : ""}
                      </span> */}

                      <span>{column.key !== "created_at" ? sum : ""}</span>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ marginTop: "16px" }}
        >
          {!props.loading && (
            <PaginationWidget
              pages={props.pages}
              currentPage={props.page}
              onPaginate={(page) => {
                props.setPage(page);
                props.refetch();
              }}
            />
          )}
        </div>
      </div>
      {/* begin::Body */}
    </div>
  );
}

export default FinancialReportTable;
