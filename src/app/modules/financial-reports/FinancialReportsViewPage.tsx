import ExpensesTable from "../../../components/ExpensesTable/ExpensesTable";
import Accordion from "../../../components/UI/Accordion";
import { ExpensesTableConfig, ExpensesTableData } from "../../constants/tables";
import { AddFinancialReportFormConfig } from "./FinancialReportsAddPage";

function FinancialReportsViewPage() {
  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <div className="container">
        <div className="row row-cols-2">
          {AddFinancialReportFormConfig.map((field) => (
            <div className="d-flex flex-column mb-5">
              <span
                className="fw-semibold"
                style={{ fontSize: 16, marginBottom: 4, color: "#3F4254" }}
              >
                {field.label}
              </span>
              <b className="fs-4 fw-semibold" style={{ color: "#000" }}>
                Lorem Ipsum
              </b>
            </div>
          ))}
        </div>
      </div>

      <ExpensesTable
        title="Расход за смену"
        columns={ExpensesTableConfig}
        data={ExpensesTableData}
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
