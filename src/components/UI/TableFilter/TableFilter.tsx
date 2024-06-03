import moment from "moment";
import React, { useState } from "react";
import { FloatingLabel, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }: any, ref) => (
  <a
    className="btn btn-sm btn-light me-3"
    ref={ref as any}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

type FilterState = Record<string, { equal: null | string }>;

interface TableFilterProps {
  columns: { key: string; label: string; type?: string; className?: string }[];
  onFilter: (filterState: FilterState) => void;
}

export default function TableFilter({ columns, onFilter }: TableFilterProps) {
  const [showFilter, setShowFilter] = useState(false);
  const initialFilterState = {} as FilterState;
  columns.forEach(
    (column) => (initialFilterState[column.key] = { equal: null })
  );
  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterState);

  const setFilterField = (field: string, value: any) => {
    setFilterState((state) => ({ ...state, [field]: { equal: value } }));
  };

  return (
    <Dropdown show={showFilter}>
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-custom-components"
        onClick={() => setShowFilter(true)}
      >
        Фильтр
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: 300, padding: 20 }}>
        {columns
          .filter((col) => col.key !== "id" && col.key !== "action")
          .map((column) => (
            <FloatingLabel
              controlId="floatingInput"
              label={column.label}
              className="mb-3"
            >
              {column.type === "date" ? (
                <Flatpickr
                  options={{
                    dateFormat: "d.m.Y",
                  }}
                  className="form-control form-control-solid"
                  placeholder="Pick date"
                />
              ) : (
                <Form.Control
                  className="form-control-solid"
                  type={column.type ?? "text"}
                  placeholder={column.type === "date" ? "dd/mm/yyyy" : ""}
                  size="sm"
                  value={filterState[column.key]?.equal as string}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (column.type === "date") {
                      value = moment(value).format("YYYY-MM-DD");
                    }
                    setFilterField(column.key, value);
                  }}
                />
              )}
            </FloatingLabel>
          ))}
        <div className="d-flex flex-row justify-content-between ">
          <Button className="btn-primary" onClick={() => setShowFilter(false)}>
            Применить
          </Button>
          <Button
            className="btn-secondary"
            onClick={() => setShowFilter(false)}
          >
            Отменить
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
