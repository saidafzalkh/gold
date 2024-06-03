import AreaChart from "../../../../components/Charts/AreaChart/AreaChart";
import ChartDurationFilter from "../../../../components/Charts/ChartDurationFilter/ChartDurationFilter";
import { AreaChartData, CandleChart1Data } from "../../../constants/chart";

export default function ProfitExpensesAnalysisWidget() {
  return (
    <div className="card rounded-5 shadow-sm p-9" style={{ borderRadius: 12 }}>
      {/* Card header */}
      <div className="d-flex justify-content-between  align-items-center">
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

      {/* Card body */}
      <div className="d-flex " style={{ marginTop: 50, gap: 50 }}>
        <div
          className="d-flex flex-column fw-bold"
          style={{ width: 155, fontSize: 14, gap: 10 }}
        >
          <div className="d-flex align-items-center ">
            <div className="flex-grow-1">Фикс. расход</div>
            <span
              className="d-block bg-info"
              style={{
                height: 3,
                width: 22,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">Факт. расход</div>
            <span
              className="d-block bg-danger"
              style={{
                height: 3,
                width: 22,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">Доход</div>
            <span
              className="d-block bg-success"
              style={{
                height: 3,
                width: 22,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">Чистая прибыль</div>
            <span
              className="d-block bg-warning"
              style={{
                height: 3,
                width: 22,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
            />
          </div>
        </div>
        <div className="flex-grow-1">
          <AreaChart data={AreaChartData} />
        </div>
      </div>
    </div>
  );
}
