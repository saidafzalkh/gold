import React, { useEffect, useRef } from "react";
import { useThemeMode } from "../../../_metronic/partials";
import {
  getCSS,
  getCSSVariableValue,
} from "../../../_metronic/assets/ts/_utils";
import ApexCharts, { ApexOptions } from "apexcharts";

interface CandleChartProps {
  className?: string;
  title?: string | React.ReactElement;
  toolbar?: React.ReactElement;
  data: Record<
    string,
    {
      fixedExpense: number;
      factExpense: number;
      profit: number;
      netProfit: number;
    }
  >;
}

function AreaChart({ className, title, toolbar, data }: CandleChartProps) {
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
    <div
      ref={chartRef}
      id="kt_charts_widget_5_chart"
      style={{ height: "200px" }}
    ></div>
  );
}

export default AreaChart;

function getChartOptions(
  data: Record<
    string,
    {
      fixedExpense: number;
      factExpense: number;
      profit: number;
      netProfit: number;
    }
  >,
  height: number
): ApexOptions {
  const labelColor = getCSSVariableValue("#7E8299");
  const borderColor = getCSSVariableValue("--bs-gray-200");

  const color1 = getCSSVariableValue("--bs-info");
  const color1Light = getCSSVariableValue("--bs-info-light");

  const color2 = getCSSVariableValue("--bs-danger");
  const color2Light = getCSSVariableValue("--bs-danger-light");

  const color3 = getCSSVariableValue("--bs-success");
  const color3Light = getCSSVariableValue("--bs-success-light");

  const color4 = getCSSVariableValue("--bs-warning");
  const color4Light = getCSSVariableValue("--bs-warning-light");

  const secondaryColor = getCSSVariableValue("--bs-danger");

  const dates = Object.keys(data);
  const fixedExpenses = dates.map((category) => data[category].fixedExpense);
  const factExpenses = dates.map((category) => data[category].factExpense);

  const profits = dates.map((category) => data[category].profit);
  const netProfits = dates.map((category) => data[category].netProfit);

  return {
    series: [
      {
        name: "Фикс. расход",
        data: fixedExpenses,
      },
      {
        name: "Факт. расход",
        data: factExpenses,
      },
      {
        name: "Доход",
        data: profits,
      },
      {
        name: "Чистая прибыль",
        data: netProfits,
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: height,
      width: "100%",
      toolbar: {
        show: false,
        tools: {
          download: false
        }
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 2,
      colors: [color1, color2, color3, color4],
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      categories: dates,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        hideOverlappingLabels: true,
        style: {
          colors: labelColor,
          fontSize: "14px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: "#000",
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -10,
        show: true,
        style: {
          colors: labelColor,
          fontSize: "14px",
        },
      },
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
          return "$" + val + " thousands";
        },
      },
    },
    colors: [color1Light, color2Light, color3Light, color4Light],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    markers: {
      colors: [color1, color2, color3, color4],
      strokeColors: [color1, color2, color3, color4],
      strokeWidth: 3,
    },
  };
}
