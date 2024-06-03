import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { StatisticsCardBody } from "../../../../components/UI/StatisticsWidget/StatisticsWidget";

interface ComparisonWidgetProps {
  value1: { value: number | string; percent: number; desc: string };
  value2: { value: number | string; percent: number; desc: string };
}

export default function ComparisonWidget({
  value1,
  value2,
}: ComparisonWidgetProps) {
  return (
    <div
      className="card shadow-sm bg-white"
      style={{ borderRadius: 12, padding: "50px 0px" }}
    >
      <div
        className="d-flex align-items-center justify-content-center "
        style={{ gap: 64 }}
      >
        <div className="d-flex align-items-center" style={{ gap: 64 }}>
          <StatisticsCardBody
            title={value1.value}
            icon={
              <img
                src={toAbsoluteUrl("media/svg/business.svg")}
                className="d-d-inline-block "
              />
            }
            description={value1.desc}
            unit="₸"
          />

          <div>
            <span className="badge badge-light-success fs-base">
              <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              {`${value1.percent}%`}
            </span>
          </div>
        </div>

        <div>
          <span
            className="fw-bold text-dark"
            style={{ fontSize: 38, lineHeight: "38px" }}
          >
            {">"}
          </span>
        </div>

        <div className="d-flex align-items-center" style={{ gap: 64 }}>
          <div>
            <span className="badge badge-light-success fs-base">
              <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              {`${value2.percent}%`}
            </span>
          </div>
          <StatisticsCardBody
            title={value2.value}
            icon={
              <img
                src={toAbsoluteUrl("media/svg/business.svg")}
                className="d-d-inline-block "
              />
            }
            description={value2.desc}
            unit="₸"
          />
        </div>
      </div>
    </div>
  );
}
