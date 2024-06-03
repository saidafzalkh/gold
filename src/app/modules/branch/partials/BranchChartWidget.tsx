import ChartDurationFilter from "../../../../components/Charts/ChartDurationFilter/ChartDurationFilter";
import { BranchChartData, CandleChart1Data } from "../../../constants/chart";
import BranchChart from "./BranchChart";

function BranchChartWidget() {
  return (
    <div className="card rounded-5 shadow-sm p-9" style={{ borderRadius: 12 }}>
      {/* Card header */}
      <div className="d-flex justify-content-between  align-items-center">
        <div>
          <h2>KPI филиалов</h2>
          <span>{`Показано ${"6"} филиалов`}</span>
        </div>
        <div className="d-flex flex-row gap-7">
          <ChartDurationFilter />
          <select
            className="form-select form-select-solid form-select-lg"
            name="city"
          >
            <option value="">Выберите регион/город</option>
            {Object.keys(CandleChart1Data).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Card body */}
      <div className="d-flex " style={{ marginTop: 50, gap: 50 }}>
        <BranchChart data={BranchChartData} height={286} />
      </div>
    </div>
  );
}

export default BranchChartWidget;
