import classNames from 'classnames';
import { useState } from 'react';

import ExpensesTable from '../../../components/ExpensesTable/ExpensesTable';
import Accordion from '../../../components/UI/Accordion';
import { useGetReport } from '../../api/get-report';
import { AddFinancialReportForm1Config } from '../../constants/form-config';
import { ExpensesTableConfig } from '../../constants/tables';

function FinancialReportsViewPage(props: { id: string }) {
  const { report, isSuccess } = useGetReport(props.id);
  const [mode, setMode] = useState<"smart" | "express">("express");

  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-4" style={{ width: "fit-content" }}>
        <li className="nav-item" onClick={() => setMode("express")} style={{ cursor: "pointer" }}>
          <a className={classNames("nav-link text-dark fw-semibold", mode === "express" && "active")}>
            Экспресс ломбард
          </a>
        </li>
        <li className="nav-item" onClick={() => setMode("smart")} style={{ cursor: "pointer" }}>
          <a className={classNames("nav-link text-dark fw-semibold", mode === "smart" && "active")}>Смарт ломбард</a>
        </li>
      </ul>

      <div className="container">
        <div className="row row-cols-2">
          {isSuccess &&
            AddFinancialReportForm1Config.map((field) => (
              <div className="d-flex flex-column mb-5">
                <span className="fw-semibold" style={{ fontSize: 16, marginBottom: 4, color: "#3F4254" }}>
                  {field.label}
                </span>
                <b className="fs-4 fw-semibold" style={{ color: "#000" }}>
                  {mode === "express" ? report.report[field.name] : report.report[`${mode}_${field.name}`]}
                </b>
              </div>
            ))}
        </div>
      </div>

      <ExpensesTable
        title="Расход за смену"
        columns={ExpensesTableConfig}
        data={isSuccess && report ? report[`${mode}Consumptions`] : []}
        className="mt-7"
      />

      <div style={{ marginTop: 50 }}>
        <h3 className="">Как сдавать отчёт</h3>
        <p className="my-5 text-muted fw-semibold" style={{ fontSize: 16 }}>
          Необходимые рекомендации по сдачи отчёта, вы можете найти здесь
        </p>

        <Accordion
          data={[
            {
              title: "Залоговые билеты",
              data: "Когда вы залагаете предмет в ломбард, вам выдаётся залоговый билет. Этот документ является вашим подтверждением сделки и важным элементом при последующем выкупе предмета.",
            },
            {
              title: "Расходы",
              data: "Когда вы залагаете предмет в ломбард, вам выдаётся залоговый билет. Этот документ является вашим подтверждением сделки и важным элементом при последующем выкупе предмета.",
            },
            {
              title: "Продажа товаров",
              data: "Когда вы залагаете предмет в ломбард, вам выдаётся залоговый билет. Этот документ является вашим подтверждением сделки и важным элементом при последующем выкупе предмета.",
            },
            {
              title: "Смена",
              data: "Когда вы залагаете предмет в ломбард, вам выдаётся залоговый билет. Этот документ является вашим подтверждением сделки и важным элементом при последующем выкупе предмета.",
            },
          ]}
          className=""
        />
      </div>
    </div>
  );
}

export default FinancialReportsViewPage;
