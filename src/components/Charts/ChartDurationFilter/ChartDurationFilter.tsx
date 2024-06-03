import React from "react";

function ChartDurationFilter() {
  return (
    <div className="card-toolbar d-flex align-items-center flex-nowrap " data-kt-buttons="true">
      <a
        className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
        id="kt_charts_widget_2_year_btn"
      >
        Месяц
      </a>
      <a
        className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
        id="kt_charts_widget_2_month_btn"
      >
        Полгода
      </a>
      <a
        className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
        id="kt_charts_widget_2_week_btn"
      >
        Год
      </a>
    </div>
  );
}

export default ChartDurationFilter;
