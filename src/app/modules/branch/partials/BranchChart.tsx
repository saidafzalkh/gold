import { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";
import {
    getCSSVariableValue
} from "../../../../_metronic/assets/ts/_utils";
import { useThemeMode } from "../../../../_metronic/partials";
import ApexCharts from "apexcharts";

type BranchChartData = Record<string, { value1: number; value2: number }>;
interface BranchChartProps {
    height: number,
    data: BranchChartData,
}

function BranchChart({height, data}: BranchChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();

  useEffect(() => {
    const chart = refreshChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions(data, height));
    if (chart) {
      chart.render();
    }

    return chart;
  };
  return (
    <div
      ref={chartRef}
      style={{width: "100%"}}
      id="kt_charts_widget_1_chart"
    />
  );
}

function getChartOptions(data: BranchChartData, height: number): ApexOptions {
  const labelColor = getCSSVariableValue("--bs-gray-500");
  const borderColor = getCSSVariableValue("--bs-gray-200");
  const baseColor = "#219653";
  const secondaryColor = getCSSVariableValue("--bs-gray-300");

  const categories = Object.keys(data);
  const values1 = categories.map(cat => data[cat].value1);
  const values2 = categories.map(cat => data[cat].value2);

  return {
    series: [
      {
        name: "value1",
        data: values1,
      },
      {
        name: "value2",
        data: values2,
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: height,
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 6,
      },
    },
    legend: {
      show: false,
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
        formatter: function (val: number) {
          return "$" + val + " thousands";
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

export default BranchChart;
