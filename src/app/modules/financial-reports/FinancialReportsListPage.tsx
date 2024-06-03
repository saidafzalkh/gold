import { useNavigate } from "react-router-dom";
import CandleChart from "../../../components/Charts/CandleChart/CandleChart";
import FinancialReportTable from "../../../components/FinancialReportTable/FinancialReportTable";
import {
  FinancialReportTableConfig,
  FinancialReportTableData,
} from "../../constants/tables";
import { CandleChart1Data } from "../../constants/chart";

function FinancialReportsListPage() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <CandleChart
        data={CandleChart1Data}
        className=""
        title={
          <div>
            <h2>Доходы/расходы по городам</h2>
            <span>Суммы в тысячах в тенге</span>
          </div>
        }
      />
      <CandleChart
        data={CandleChart1Data}
        className="my-7"
        toolbar={
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
        }
        title={
          <div>
            <h2>Доходы/расходы по филиалам</h2>
            <span>Суммы в тысячах в тенге</span>
          </div>
        }
      />

      {/* begin::Row */}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        {/* begin::Col */}
        <div className="col-12 mb-md-5 mb-xl-10">
          <FinancialReportTable
            title="Смарт ломбард"
            columns={FinancialReportTableConfig}
            data={FinancialReportTableData}
            onRowClick={(id) => navigate(`/financial-reports/${id}`)}
          />
        </div>
        {/* end::Col */}
      </div>
    </div>
  );
}

export default FinancialReportsListPage;
