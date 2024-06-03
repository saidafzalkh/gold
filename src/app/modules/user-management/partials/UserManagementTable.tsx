import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { PaginationWidget } from "../../../../components/UI/Pagination/Pagination";
import TableFilter from "../../../../components/UI/TableFilter/TableFilter";
import { UserManagementTableConfig } from "../../../constants/tables";

interface UserManagementTableProps {
  title: string;
  columns: { label: string; key: string; className?: string }[];
  data: Record<string, any>[];
  className?: string;
  toolbar?: React.ReactElement;
}

function UserManagementTable({
  title,
  columns,
  data,
  className,
  toolbar,
}: UserManagementTableProps) {
  return (
    <div>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Пользователи</span>
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
            columns={UserManagementTableConfig}
            onFilter={(filterState) => console.log(filterState)}
          />
          <Link
            to="/overdue-list/add"
            className="btn btn-sm btn-warning me-3 mt-3 mt-sm-0"
          >
            Добавить пользователя
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body" style={{ paddingTop: 30 }}>
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table align-middle gs-0 gy-4">
            {/* begin::Table head */}
            <thead>
              {columns.map((column, idx) => (
                <th
                  className={classNames(
                    "min-w-150px fw-bolder text-dark bg-light",
                    !idx && "rounded-start ps-4",
                    idx === columns.length - 1 && "rounded-end"
                  )}
                  key={column.key}
                  style={{ fontSize: 16 }}
                >
                  {column.label}
                </th>
              ))}
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map((dataItem, idx) => (
                <tr
                  style={{
                    borderTop: !idx ? "" : "1px dashed #E1E3EA",
                    cursor: "pointer",
                  }}
                >
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light">
                          <img
                            src={toAbsoluteUrl("media/svg/avatars/001-boy.svg")}
                            className="h-75 align-self-end"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex justify-content-start flex-column">
                        <a
                          href="#"
                          className="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                        >
                          {dataItem.name}
                        </a>
                        <span className="text-muted fw-semibold text-muted d-block fs-7">
                          {dataItem.role}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                      {dataItem.region}
                    </span>
                  </td>
                  <td>
                    <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                      {dataItem.branch}
                    </span>
                  </td>
                  <td className="text-end">
                    <Link
                      to={`/user-management/${dataItem.id}`}
                      className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4"
                    >
                      Редактировать
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
        <div className="d-flex justify-content-end">
          <PaginationWidget pages={2} currentPage={0} />
        </div>
      </div>
    </div>
  );
}

export default UserManagementTable;
