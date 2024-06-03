import React from "react";
import { StatisticsWidget4 } from "../../../components/UI/StatisticsWidget/StatisticsWidget";
import OverdueTable from "./partials/OverdueTable";
import { OverdueTableConfig, OverdueTableData } from "../../constants/tables";
import { useNavigate } from "react-router-dom";

function OverdueListPage() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }}
      >
        <div>
          <StatisticsWidget4 value="47,769" desc="Количество клиентов" />
        </div>
        <div>
          <StatisticsWidget4
            value="69,700"
            desc="Сумма"
            unit="₸"
            percent={2.2}
          />
        </div>
        <div>
          <StatisticsWidget4
            value="39,700"
            desc="Возвращено"
            unit="₸"
            percent={2.2}
          />
        </div>
        <div
          style={{ gridColumn: "span 3", borderRadius: 12 }}
          className="card border-0"
        >
          <OverdueTable
            columns={OverdueTableConfig}
            data={OverdueTableData}
            title="Просрочники"
            onRowClick={(id) => navigate(`/overdue-list/${id}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default OverdueListPage;
