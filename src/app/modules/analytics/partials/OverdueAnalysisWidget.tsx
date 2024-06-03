import BarChart from "../../../../components/Charts/BarChart/BarChart";
import ChartDurationFilter from "../../../../components/Charts/ChartDurationFilter/ChartDurationFilter";
import { CandleChart1Data, OverdueChartData } from "../../../constants/chart";

interface OverdueAnalysisWidgetProps {
    height: string;
}

export default function OverdueAnalysisWidget({height}: OverdueAnalysisWidgetProps) {
  return (
    <div className="card shadow-sm" style={{ borderRadius: 12, padding: 30 }}>
      <div className="d-flex flex-row align-items-center  justify-content-between">
        <div>
          <h2>Анализ</h2>
          <span>Суммы указаны в тысячах</span>
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

      <BarChart className="mt-9" data={OverdueChartData} height={height}/>
    </div>
  );
}
