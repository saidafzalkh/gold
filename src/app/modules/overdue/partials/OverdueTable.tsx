import { Link } from "react-router-dom";
import { PaginationWidget } from "../../../../components/UI/Pagination/Pagination";
import { OverdueTableConfig } from "../../../constants/tables";
import TableFilter from "../../../../components/UI/TableFilter/TableFilter";

interface OverdueTableProps {
  title: string;
  columns: { label: string; key: string; className?: string }[];
  data: Record<string, number | string | React.ReactElement>[];
  className?: string;
  onRowClick?: (id: number | string) => void;
}

function OverdueTable(props: OverdueTableProps) {
  const { className = "", columns, data, title = "", onRowClick } = props;
  return (
    <div className={`card ${className} border-0 rounded-3`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">{title}</span>
          <span className="fw-semibold fs-5 " style={{ color: "#A1A5B7" }}>
            Найдено {data.length} элементов
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
            columns={OverdueTableConfig}
            onFilter={(filterState) => console.log(filterState)}
          />

          <Link
            to="/overdue-list/add"
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
              {data.map((dataItem) => (
                <tr
                  onClick={() => onRowClick?.(dataItem.id as string)}
                  style={{ cursor: "pointer" }}
                >
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
        <div className="d-flex justify-content-end">
          <PaginationWidget pages={2} currentPage={0} />
        </div>
      </div>
      {/* begin::Body */}
    </div>
  );
}

export default OverdueTable;
