import classNames from "classnames";
import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import ExpensesTable from "../../../components/ExpensesTable/ExpensesTable";
import Accordion from "../../../components/UI/Accordion";
import { ExpensesTableConfig } from "../../constants/tables";
import AddExpenseModal, {
  AddExpenseFormType,
} from "./partials/AddExpenseModal";
import { generateId } from "../../helpers/utils";
import { initialFormState } from "../../constants/common";

export const AddFinancialReportFormConfig = [
  {
    label: "Начало смены",
    name: "field1",
    required: true,
    type: "number",
  },
  {
    label: "Фиксированный расход",
    name: "field2",
    required: true,
    type: "text",
  },
  { label: "Подкрепление", name: "field3", required: true, type: "text" },
  { label: "Инкасация", name: "field4", required: true, type: "text" },
  { label: "Залог", name: "field5", required: true, type: "text" },
  { label: "Выкуп", name: "field6", required: true, type: "text" },
  { label: "Продление", name: "field7", required: true, type: "text" },
  { label: "Вывод из залогов", name: "field8", required: true, type: "text" },
  { label: "Частичный выкуп", name: "field9", required: true, type: "text" },
  { label: "Продажа товаров", name: "field10", required: true, type: "text" },
  { label: "Доход за проценты", name: "field11", required: true, type: "text" },
  { label: "Доход за товары", name: "field12", required: true, type: "text" },
  { label: "Возврат товаров", name: "field13", required: true, type: "text" },
  { label: "Товары бу", name: "field14", required: true, type: "text" },
  {
    label: "Залоговые билеты/товары",
    name: "field15",
    required: true,
    type: "text",
  },
  {
    label: "Залоговые билеты/готов к продаже",
    name: "field16",
    required: true,
    type: "text",
  },
  {
    label: "Заёмный капитал инвесторов",
    name: "field17",
    required: true,
    type: "text",
  },
  {
    label: "Заёмный капитал кредит",
    name: "field18",
    required: true,
    type: "text",
  },
  {
    label: "Собственный капитал на руках",
    name: "field19",
    required: true,
    type: "number",
  },
  {
    label: "Собственный капитал в товарах",
    name: "field20",
    required: true,
    type: "number",
  },
];

function FinancialReportsAddPage() {
  const [mode, setMode] = useState<"smart" | "express">("express");
  const [selectedExpense, setCurrentExpense] = useState<
    (AddExpenseFormType & { id: number }) | null
  >(null);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState<boolean>(false);

  const form1 = useFormik({
    initialValues: initialFormState,
    onSubmit: (val) => console.log(val),
  });

  const form2 = useFormik({
    initialValues: initialFormState,
    onSubmit: (val) => console.log(val),
  });

  let form = form1;
  if (mode === "express") {
    form = form2;
  }

  const openExpenseModal = (expense?: AddExpenseFormType & { id: number }) => {
    setIsExpenseModalOpen(true);
    if (expense) {
      setCurrentExpense(expense);
    }
  };

  const closeExpenseModal = () => {
    setIsExpenseModalOpen(false);
    setCurrentExpense(null);
  };

  const handleSaveExpense = (
    id: number | null,
    expense: AddExpenseFormType
  ) => {
    if (!expense.sum) return;

    if (id === null) {
      //add new
      (expense as any).id = generateId();
      const tmp = [...form.values.expenses, expense];
      form.setFieldValue("expenses", tmp);
    } else {
      //save existing
      console.log("save existing");
      const tmp = [...form.values.expenses];
      const idx = tmp.findIndex((el) => (el as any).id === id);
      tmp[idx] = expense;
      form.setFieldValue("expenses", tmp);
    }

    closeExpenseModal();
  };

  const handleRemoveExpense = (id: number) => {
    const idx = form.values.expenses.findIndex((el) => (el as any).id === id);
    const tmp = form.values.expenses.slice(idx, 1);
    console.log(id);
    form.setFieldValue("expenses", tmp);
  };

  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <ul
        className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-4"
        style={{ width: "fit-content" }}
      >
        <li
          className="nav-item"
          onClick={() => setMode("express")}
          style={{ cursor: "pointer" }}
        >
          <a
            className={classNames(
              "nav-link text-dark fw-semibold",
              mode === "express" && "active"
            )}
          >
            Экспресс ломбард
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => setMode("smart")}
          style={{ cursor: "pointer" }}
        >
          <a
            className={classNames(
              "nav-link text-dark fw-semibold",
              mode === "smart" && "active"
            )}
          >
            Смарт ломбард
          </a>
        </li>
      </ul>
      <form
        onSubmit={form.handleSubmit}
        className="form container mx-auto"
        style={{ maxWidth: 1160 }}
      >
        <div className="row row-cols-2">
          {AddFinancialReportFormConfig.map((field) => (
            <div className="col" key={field.label} style={{ marginBottom: 20 }}>
              <label
                className="fw-semibold"
                style={{ fontSize: 16, marginBottom: 10 }}
              >
                {field.label}
              </label>
              <input
                onBlur={form.handleBlur}
                name={field.name}
                type={field.type}
                required={field.required}
                onChange={form.handleChange}
                value={(form.values as any)[field.name]}
                className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                placeholder=""
              />
            </div>
          ))}
        </div>
        <ExpensesTable
          title="Расход за смену"
          columns={ExpensesTableConfig}
          data={form.values.expenses}
          onRowClick={(idx, expense) => openExpenseModal(expense)}
          toolbar={
            <button
              onClick={() => openExpenseModal()}
              className="btn btn-sm btn-warning me-3"
            >
              Добавить расход
            </button>
          }
        />

        <AddExpenseModal
          show={isExpenseModalOpen}
          onHide={closeExpenseModal}
          onSave={handleSaveExpense}
          onRemove={handleRemoveExpense}
          expense={selectedExpense}
        />

        <button className="btn btn-warning me-3 mt-7">Отправить отчёт</button>

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
      </form>
    </div>
  );
}

export default FinancialReportsAddPage;
