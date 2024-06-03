import React, { useEffect, useRef } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";
import { useThemeMode } from "../../../_metronic/partials";
import ApexCharts from "apexcharts";

interface StatisticsWidgetProps {
  className?: string;
  icon?: React.ReactElement;
  title: string | React.ReactElement;
  description?: string | React.ReactElement;
  percent?: number;
}

function StatisticsWidget({
  icon,
  className,
  title,
  description,
  percent,
}: StatisticsWidgetProps) {
  return (
    <a
      href="#"
      className={`card bg-white hoverable ${className} shadow-sm`}
      style={{ borderRadius: 12 }}
    >
      <div className="card-body d-flex flex-column">
        <div>{icon}</div>

        <div className="mt-auto mb-auto ">
          <div className={`text-dark fw-bold fs-2 mb-2 mt-5 flex-grow-1 `}>
            {title}
          </div>

          <div className={`fw-semibold`} style={{ color: "#A1A5B7" }}>
            {description}
          </div>
        </div>

        {percent && (
          <div>
            <span className="badge badge-light-success fs-base">
              <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              {`${percent}%`}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

interface StatisticsCardProps {
  className?: string;
  icon?: React.ReactElement;
  title: string | number | React.ReactElement;
  unit?: string;
  description?: string | React.ReactElement;
}

export function StatisticsCardBody({
  icon,
  className,
  title,
  description,
  unit,
}: StatisticsCardProps) {
  return (
    <div className={className}>
      <div className="d-flex align-items-baseline gap-3">
        {icon}
        <h3
          style={{
            fontSize: 38,
            color: "#3F4254",
            lineHeight: "38px",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <span style={{ fontSize: 14, color: "#3F4254" }}>{unit}</span>
      </div>
      <span
        style={{
          display: "block",
          fontSize: 14,
          color: "#A1A5B7",
          fontWeight: 600,
          marginTop: 10,
        }}
      >
        {description}
      </span>
    </div>
  );
}

export function StatisticsCard(props: StatisticsCardProps) {
  return (
    <div
      className="card shadow-sm"
      style={{ borderRadius: 12, padding: "50px 30px" }}
    >
      <StatisticsCardBody {...props} />
    </div>
  );
}

interface StatisticsWidget2Props {
  title?: string | React.ReactElement;
  className?: string;
  data: { value: string | number; unit: string; desc: string }[];
}

export function StatisticsWidget2({
  title,
  className,
  data,
}: StatisticsWidget2Props) {
  return (
    <div className={`card ${className} shadow-sm`} style={{ borderRadius: 12 }}>
      {/* begin::Beader */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">{title}</span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body p-0 d-flex flex-column">
        {/* begin::Stats */}
        <div className="card-px pt-5 pb-10 flex-grow-1">
          {/* begin::Row */}
          <div className="row g-0 mt-5 mb-10">
            {/* begin::Col */}
            <div className="col">
              <div className="d-flex align-items-center me-2">
                {/* begin::Symbol */}
                <div className="symbol symbol-50px me-3">
                  <div className="symbol-label bg-light-info">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M18.3333 7.16666H6.66666L9.99999 3.83332H15.8333C16.0966 3.83246 16.3548 3.9054 16.5787 4.04386C16.8026 4.18232 16.9832 4.38075 17.1 4.61666L18.3333 7.16666ZM2.94166 16.3833C3.05848 16.6192 3.23908 16.8177 3.46297 16.9561C3.68686 17.0946 3.94508 17.1675 4.20832 17.1667H10.0417L13.375 13.8333H1.66666L2.94166 16.3833ZM15.8833 17.5583C16.113 17.4447 16.3073 17.2706 16.4453 17.0547C16.5833 16.8389 16.6599 16.5895 16.6667 16.3333V10.5L13.3333 7.16666V18.8333L15.8833 17.5583ZM4.11666 3.44166C3.88075 3.55848 3.68232 3.73908 3.54386 3.96297C3.4054 4.18686 3.33246 4.44508 3.33332 4.70832V10.5417L6.66666 13.875V2.16666L4.11666 3.44166Z"
                        fill="#181C32"
                      />
                      <path
                        d="M18.3333 7.16666L16.6667 10.5L13.3333 7.16666H18.3333ZM6.66666 13.8333L3.33332 10.5L1.66666 13.8333H6.66666ZM13.3333 13.8333L9.99999 17.1667L13.3333 18.8333V13.8333ZM6.66666 7.16666L9.99999 3.83332L6.66666 2.16666V7.16666Z"
                        fill="#181C32"
                      />
                    </svg>
                  </div>
                </div>
                {/* end::Symbol */}

                {/* begin::Title */}
                <div>
                  <div className="fs-4 text-gray-900 fw-bold">{`${data[0].value} ${data[0].unit}`}</div>
                  <div className="fs-7 text-muted fw-semibold">
                    {data[0].desc}
                  </div>
                </div>
                {/* end::Title */}
              </div>
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className="col">
              <div className="d-flex align-items-center me-2">
                {/* begin::Symbol */}
                <div className="symbol symbol-50px me-3">
                  <div className="symbol-label bg-light-info">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.16666 18.8333C6.94565 18.8333 6.73369 18.7455 6.57741 18.5892C6.42113 18.433 6.33333 18.221 6.33333 18V7.99999C6.33333 7.77898 6.42113 7.56701 6.57741 7.41073C6.73369 7.25445 6.94565 7.16666 7.16666 7.16666C7.38768 7.16666 7.59964 7.25445 7.75592 7.41073C7.9122 7.56701 7.99999 7.77898 7.99999 7.99999V18C7.99999 18.221 7.9122 18.433 7.75592 18.5892C7.59964 18.7455 7.38768 18.8333 7.16666 18.8333Z"
                        fill="#181C32"
                      />
                      <path
                        opacity="0.3"
                        d="M3.83333 13C3.61232 13 3.40036 12.9122 3.24408 12.7559C3.0878 12.5996 3 12.3877 3 12.1667V5.49999C3 5.27898 3.0878 5.06701 3.24408 4.91073C3.40036 4.75445 3.61232 4.66666 3.83333 4.66666C4.05435 4.66666 4.26631 4.75445 4.42259 4.91073C4.57887 5.06701 4.66667 5.27898 4.66667 5.49999V12.1667C4.66667 12.3877 4.57887 12.5996 4.42259 12.7559C4.26631 12.9122 4.05435 13 3.83333 13ZM11.3333 16.3333V2.99999C11.3333 2.77898 11.2455 2.56701 11.0893 2.41073C10.933 2.25445 10.721 2.16666 10.5 2.16666C10.279 2.16666 10.067 2.25445 9.91074 2.41073C9.75446 2.56701 9.66667 2.77898 9.66667 2.99999V16.3333C9.66667 16.5543 9.75446 16.7663 9.91074 16.9226C10.067 17.0789 10.279 17.1667 10.5 17.1667C10.721 17.1667 10.933 17.0789 11.0893 16.9226C11.2455 16.7663 11.3333 16.5543 11.3333 16.3333ZM14.6667 13.8333V4.66666C14.6667 4.44564 14.5789 4.23368 14.4226 4.0774C14.2663 3.92112 14.0543 3.83332 13.8333 3.83332C13.6123 3.83332 13.4004 3.92112 13.2441 4.0774C13.0878 4.23368 13 4.44564 13 4.66666V13.8333C13 14.0543 13.0878 14.2663 13.2441 14.4226C13.4004 14.5789 13.6123 14.6667 13.8333 14.6667C14.0543 14.6667 14.2663 14.5789 14.4226 14.4226C14.5789 14.2663 14.6667 14.0543 14.6667 13.8333ZM18 15.5V8.83332C18 8.61231 17.9122 8.40035 17.7559 8.24407C17.5996 8.08779 17.3877 7.99999 17.1667 7.99999C16.9457 7.99999 16.7337 8.08779 16.5774 8.24407C16.4211 8.40035 16.3333 8.61231 16.3333 8.83332V15.5C16.3333 15.721 16.4211 15.933 16.5774 16.0892C16.7337 16.2455 16.9457 16.3333 17.1667 16.3333C17.3877 16.3333 17.5996 16.2455 17.7559 16.0892C17.9122 15.933 18 15.721 18 15.5Z"
                        fill="#181C32"
                      />
                    </svg>
                  </div>
                </div>
                {/* end::Symbol */}

                {/* begin::Title */}
                <div>
                  <div className="fs-4 text-gray-900 fw-bold">{`${data[1].value} ${data[1].unit}`}</div>
                  <div className="fs-7 text-muted fw-semibold">
                    {data[1].desc}
                  </div>
                </div>
                {/* end::Title */}
              </div>
            </div>
            {/* end::Col */}
          </div>
          {/* end::Row */}

          {/* begin::Row */}
          <div className="row g-0">
            {/* begin::Col */}
            <div className="col">
              <div className="d-flex align-items-center me-2">
                {/* begin::Symbol */}
                <div className="symbol symbol-50px me-3">
                  <div className="symbol-label bg-light-info">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M9.48335 6.62501C9.91782 6.18971 10.4717 5.89309 11.0748 5.77267C11.6779 5.65226 12.3032 5.71347 12.8715 5.94856C13.4398 6.18365 13.9256 6.58205 14.2674 7.09334C14.6092 7.60463 14.7917 8.20583 14.7917 8.82085C14.7917 9.43587 14.6092 10.0371 14.2674 10.5484C13.9256 11.0597 13.4398 11.458 12.8715 11.6931C12.3032 11.9282 11.6779 11.9894 11.0748 11.869C10.4717 11.7486 9.91782 11.452 9.48335 11.0167C8.90373 10.4329 8.57845 9.64353 8.57845 8.82085C8.57845 7.99816 8.90373 7.20884 9.48335 6.62501ZM6.98335 4.12501C6.0482 5.05625 5.41049 6.24408 5.15099 7.53805C4.8915 8.83202 5.02189 10.1739 5.52565 11.3937C6.02941 12.6135 6.88388 13.6563 7.98081 14.3901C9.07774 15.1239 10.3678 15.5156 11.6875 15.5156C13.0072 15.5156 14.2973 15.1239 15.3942 14.3901C16.4911 13.6563 17.3456 12.6135 17.8494 11.3937C18.3531 10.1739 18.4835 8.83202 18.224 7.53805C17.9645 6.24408 17.3268 5.05625 16.3917 4.12501C15.1422 2.8808 13.4508 2.18225 11.6875 2.18225C9.92424 2.18225 8.23278 2.8808 6.98335 4.12501Z"
                        fill="#181C32"
                      />
                      <path
                        d="M9.42501 15.075C8.81534 15.3122 8.14649 15.3515 7.51323 15.1874C6.87997 15.0233 6.31441 14.664 5.89666 14.1606C5.47891 13.6572 5.23016 13.0351 5.18565 12.3824C5.14114 11.7298 5.30312 11.0796 5.64866 10.5242C5.99419 9.96868 6.50575 9.53601 7.11087 9.28745C7.71599 9.03888 8.38398 8.98703 9.0202 9.13922C9.65643 9.29142 10.2286 9.63996 10.6558 10.1355C11.0829 10.631 11.3433 11.2483 11.4 11.9C12.0719 11.9675 12.7473 11.8113 13.3214 11.4557C13.8955 11.1001 14.3362 10.565 14.575 9.93333C14.0521 8.47537 13.0379 7.24496 11.7065 6.45343C10.3752 5.66191 8.80974 5.35866 7.27911 5.59578C5.74847 5.8329 4.34816 6.59558 3.31869 7.75283C2.28921 8.91009 1.69481 10.3897 1.63758 11.9375C1.58035 13.4854 2.06386 15.0048 3.00506 16.2349C3.94627 17.4651 5.28643 18.3291 6.79537 18.6786C8.30432 19.0281 9.88787 18.8413 11.2741 18.1502C12.6602 17.4592 13.7626 16.307 14.3917 14.8917C12.8216 15.5907 11.0423 15.6564 9.42501 15.075Z"
                        fill="#181C32"
                      />
                    </svg>
                  </div>
                </div>
                {/* end::Symbol */}

                {/* begin::Title */}
                <div>
                  <div className="fs-4 text-gray-900 fw-bold">{`${data[2].value} ${data[2].unit}`}</div>
                  <div className="fs-7 text-muted fw-semibold">
                    {data[2].desc}
                  </div>
                </div>
                {/* end::Title */}
              </div>
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className="col">
              <div className="d-flex align-items-center me-2">
                {/* begin::Symbol */}
                <div className="symbol symbol-50px me-3">
                  <div className="symbol-label bg-light-info">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.16667 10.5L8.83334 12.5L18.8333 10.5L12.1667 8.5L2.16667 10.5Z"
                        fill="#181C32"
                      />
                      <path
                        opacity="0.3"
                        d="M17.9167 7.34999L2.16667 10.5V6.43332C2.16727 6.17004 2.25885 5.91505 2.42591 5.71155C2.59296 5.50805 2.82521 5.36854 3.08333 5.31665L17.6833 2.39999C17.8223 2.37006 17.9662 2.3717 18.1044 2.40476C18.2426 2.43783 18.3717 2.50149 18.482 2.59106C18.5924 2.68062 18.6812 2.7938 18.742 2.92227C18.8028 3.05073 18.834 3.1912 18.8333 3.33332V6.23332C18.8327 6.4966 18.7411 6.75159 18.5741 6.95509C18.407 7.15859 18.1748 7.2981 17.9167 7.34999ZM18.8333 14.5667V10.5L3.08333 13.65C2.82521 13.7019 2.59296 13.8414 2.42591 14.0449C2.25885 14.2484 2.16727 14.5034 2.16667 14.7667V17.6667C2.16598 17.8088 2.19718 17.9492 2.25798 18.0777C2.31879 18.2062 2.40764 18.3194 2.518 18.4089C2.62835 18.4985 2.75739 18.5621 2.89562 18.5952C3.03384 18.6283 3.17773 18.6299 3.31667 18.6L17.9167 15.6833C18.1748 15.6314 18.407 15.4919 18.5741 15.2884C18.7411 15.0849 18.8327 14.8299 18.8333 14.5667Z"
                        fill="#181C32"
                      />
                    </svg>
                  </div>
                </div>
                {/* end::Symbol */}

                {/* begin::Title */}
                <div>
                  <div className="fs-4 text-gray-900 fw-bold">{`${data[3].value} ${data[3].unit}`}</div>
                  <div className="fs-7 text-muted fw-semibold">
                    {data[3].desc}
                  </div>
                </div>
                {/* end::Title */}
              </div>
            </div>
            {/* end::Col */}
          </div>
          {/* end::Row */}
        </div>
        {/* end::Stats */}
      </div>
      {/* end::Body */}
    </div>
  );
}

interface StatisticsWidget3Props {
  title?: string | React.ReactElement;
  className?: string;
  data: { value: string | number; unit: string; desc: string };
}

export function StatisticsWidget3({
  data,
  className,
  title,
}: StatisticsWidget3Props) {
  return (
    <div className={`card ${className} shadow-sm`} style={{ borderRadius: 12 }}>
      {/* begin::Beader */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">{title}</span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body p-0 d-flex flex-column">
        {/* begin::Stats */}
        <div className="card-px pt-5 pb-10 flex-grow-1">
          {/* begin::Row */}
          <div className="row g-0">
            {/* begin::Col */}
            <div className="col">
              <div className="d-flex align-items-center me-2">
                {/* begin::Symbol */}
                <div className="symbol symbol-50px me-3">
                  <div className="symbol-label bg-light-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66666 10L8.33332 12L18.3333 10L11.6667 8L1.66666 10Z"
                        fill="#181C32"
                      />
                      <path
                        opacity="0.3"
                        d="M17.4167 6.85002L1.66667 10V5.93335C1.66727 5.67007 1.75885 5.41508 1.92591 5.21158C2.09296 5.00808 2.32521 4.86857 2.58333 4.81668L17.1833 1.90002C17.3223 1.87009 17.4662 1.87173 17.6044 1.9048C17.7426 1.93786 17.8717 2.00152 17.982 2.09109C18.0924 2.18065 18.1812 2.29383 18.242 2.4223C18.3028 2.55076 18.334 2.69123 18.3333 2.83335V5.73335C18.3327 5.99664 18.2411 6.25162 18.0741 6.45512C17.907 6.65862 17.6748 6.79813 17.4167 6.85002ZM18.3333 14.0667V10L2.58333 13.15C2.32521 13.2019 2.09296 13.3414 1.92591 13.5449C1.75885 13.7484 1.66727 14.0034 1.66667 14.2667V17.1667C1.66598 17.3088 1.69718 17.4493 1.75798 17.5777C1.81879 17.7062 1.90764 17.8194 2.018 17.9089C2.12835 17.9985 2.25739 18.0622 2.39562 18.0952C2.53384 18.1283 2.67773 18.1299 2.81667 18.1L17.4167 15.1833C17.6748 15.1315 17.907 14.992 18.0741 14.7885C18.2411 14.585 18.3327 14.33 18.3333 14.0667Z"
                        fill="#181C32"
                      />
                    </svg>
                  </div>
                </div>
                {/* end::Symbol */}

                {/* begin::Title */}
                <div>
                  <div className="fs-4 text-gray-900 fw-bold">{`${data.value} ${data.unit}`}</div>
                  <div className="fs-7 text-muted fw-semibold">{data.desc}</div>
                </div>
                {/* end::Title */}
              </div>
            </div>
            {/* end::Col */}
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatisticsWidget4Props {
  value: string | number;
  unit?: string;
  desc: string;
  percent?: number;
  className?: string;
}

export function StatisticsWidget4({
  value,
  desc,
  percent,
  unit,
  className,
}: StatisticsWidget4Props) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();
  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(chartRef.current, {
      series: [
        {
          name: "Net Profit",
          data: [15, 25, 15, 40, 20, 50],
        },
      ],
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: 82,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: ["#FFCB45"],
      },
      grid: {
        show: true,
        strokeDashArray: 4,
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: "#FFCB45",
            fontSize: "12px",
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
        },
      },
      yaxis: {
        show: false,
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
          formatter: function (val: any) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: ["transparent"],
      markers: {
        colors: ["#FFCB45"],
        strokeColors: ["#FFCB45"],
        strokeWidth: 3,
      },
    });
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
    <div className={`card ${className} shadow-none border-0 `}>
      {/* begin::Body */}
      <div className="card-body d-flex flex-column p-0">
        {/* begin::Stats */}
        <div className="flex-grow-1 card-p pb-0">
          <div className="d-flex flex-stack flex-wrap">
            <div className="me-2">
              <div className="d-flex flex-row align-items-center">
                {unit && (
                  <span
                    className="d-block align-self-baseline "
                    style={{
                      fontSize: 20,
                      color: "#A1A5B7",
                      lineHeight: "20px",
                    }}
                  >
                    {unit}
                  </span>
                )}
                <h3
                  className="text-gray-900 fw-bold"
                  style={{ fontSize: 34, lineHeight: "34px" }}
                >
                  {value}
                </h3>
                {percent && (
                  <div style={{ marginLeft: 7 }}>
                    <span className="d-block badge badge-light-success fs-base">
                      <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                      {`${percent}%`}
                    </span>
                  </div>
                )}
              </div>

              <div
                className="text-muted fw-semibold"
                style={{ color: "#A1A5B7", fontSize: 14 }}
              >
                {desc}
              </div>
            </div>
          </div>
        </div>
        {/* end::Stats */}

        {/* begin::Chart */}
        <div
          ref={chartRef}
          className="mixed-widget-7-chart card-rounded-bottom"
        ></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
}

export default StatisticsWidget;
