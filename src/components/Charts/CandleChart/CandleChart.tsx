import React, { useEffect, useRef } from "react";
import { useThemeMode } from "../../../_metronic/partials";
import {
  getCSS,
  getCSSVariableValue,
} from "../../../_metronic/assets/ts/_utils";
import ApexCharts, { ApexOptions } from "apexcharts";

interface CandleChartProps {
  className?: string;
  title: string | React.ReactElement;
  toolbar?: React.ReactElement;
  data: Record<string, { profit: number; expenses: number }>;
}

function CandleChart({ className, title, toolbar, data }: CandleChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();
  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, "height"));

    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(data, height)
    );
    if (chart) {
      chart.render();
    }

    return chart;
  };

  useEffect(() => {
    const chart = refreshChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">{title}</h3>

        {/* begin::Toolbar */}
        <div className="card-toolbar" data-kt-buttons="true">
          {toolbar}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body">
        {/* begin::Chart */}
        <div
          ref={chartRef}
          id="kt_charts_widget_5_chart"
          style={{ height: "350px" }}
        ></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
}

export default CandleChart;

function getChartOptions(
  data: Record<string, { profit: number; expenses: number }>,
  height: number
): ApexOptions {
  const labelColor = getCSSVariableValue("--bs-gray-500");
  const borderColor = getCSSVariableValue("--bs-gray-200");

  const baseColor = getCSSVariableValue("--bs-success");
  const secondaryColor = getCSSVariableValue("--bs-danger");

  const categories = Object.keys(data);
  const profitData = categories.map((category) => data[category].profit);
  const expensesData = categories.map(
    (category) => -1 * data[category].expenses
  );

  return {
    series: [
      {
        name: "Доходы",
        data: profitData,
      },
      {
        name: "Расходы",
        data: expensesData,
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      stacked: true,
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20px",
        borderRadius: 5,
      },
    },
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // min: -80,
      // max: 80,
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          return `${val} тг`;
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
