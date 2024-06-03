import React, { useEffect, useRef } from "react";
import { useThemeMode } from "../../../_metronic/partials";
import {
  getCSS,
  getCSSVariableValue,
} from "../../../_metronic/assets/ts/_utils";
import ApexCharts, { ApexOptions } from "apexcharts";

interface CandleChartProps {
  className?: string;
  data: Record<string, { count: number }>;
  height?: string;
}

function BarChart({ className, data, height = "300px" }: CandleChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();
  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(data, parseInt(height) || 200)
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
      style={{ height }}
      className={className}
    />
  );
}

export default BarChart;

function getChartOptions(
  data: Record<string, { count: number }>,
  height: number
): ApexOptions {
  const labelColor = getCSSVariableValue("--bs-gray-500");
  const borderColor = getCSSVariableValue("--bs-gray-200");

  const baseColor = getCSSVariableValue("--bs-success");
  const secondaryColor = getCSSVariableValue("--bs-danger");

  const categories = Object.keys(data);
  const countData = categories.map((category) => data[category].count);

  return {
    series: [
      {
        name: "Просрочники",
        data: countData,
      },
    ],
    chart: {
      type: "bar",
      height: height,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "24px",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: categories,
      axisTicks: {
        show: false,
      },
    },
    yaxis: {},
    fill: {
      colors: ["#FFCB45"],
      opacity: 1,
    },
  };
}
