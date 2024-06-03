import classNames from "classnames";
import { Link } from "react-router-dom";
import { PaginationWidget } from "../../../../components/UI/Pagination/Pagination";

interface BranchTableProps {
  columns: { label: string; key: string; className?: string }[];
  data: Record<string, any>[];
  className?: string;
}

function BranchTable(props: BranchTableProps) {
  const { data, columns } = props;

  return (
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
            <tr style={{ borderTop: !idx ? "" : "1px dashed #E1E3EA", cursor: "pointer" }}>
              <td>
                <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                  {dataItem.name}
                </span>
                <span className="text-gray-500 fw-bold text-hover-primary d-block mb-1 fs-6">
                  {dataItem.address}
                </span>
              </td>
              <td>
                <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                  {dataItem.region}
                </span>
              </td>
              <td>
                <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                  {dataItem.city}
                </span>
              </td>
              <td className="text-end">
                <Link
                  to={`/branches/${dataItem.id}`}
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
  );
}

export default BranchTable;
