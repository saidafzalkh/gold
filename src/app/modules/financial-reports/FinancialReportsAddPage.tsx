import classNames from "classnames";
import { useFormik } from "formik";
import { useState } from "react";
import ExpensesTable from "../../../components/ExpensesTable/ExpensesTable";
import Accordion from "../../../components/UI/Accordion";
import axiosInstance from "../../api/axiosInstance";
import {
  AddFinancialReportForm1Config,
  AddFinancialReportForm2Config,
  initialFormState,
} from "../../constants/form-config";
import { ExpensesTableConfig } from "../../constants/tables";
import { generateId } from "../../helpers/utils";
import AddExpenseModal, {
  AddExpenseFormType,
} from "./partials/AddExpenseModal";

function FinancialReportsAddPage() {
  const [mode, setMode] = useState<"smart" | "express">("express");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedExpense, setCurrentExpense] = useState<
    (AddExpenseFormType & { id: number }) | null
  >(null);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState<boolean>(false);

  const form = useFormik({
    initialValues: initialFormState,
    onSubmit: async (val) => {
      setLoading(true);
      try {
        await axiosInstance.post("/reports", val);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
      form.resetForm()
    },
  });

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
      const tmp = [...form.values[`${mode}_consumptions`], expense];
      form.setFieldValue(`${mode}_consumptions`, tmp);
    } else {
      //save existing
      console.log("save existing");
      const tmp = [...form.values[`${mode}_consumptions`]];
      const idx = tmp.findIndex((el) => (el as any).id === id);
      tmp[idx] = expense;
      form.setFieldValue(`${mode}_consumptions`, tmp);
    }

    closeExpenseModal();
  };

  const handleRemoveExpense = (id: number) => {
    const idx = form.values[`${mode}_consumptions`].findIndex(
      (el) => (el as any).id === id
    );
    const tmp = form.values[`${mode}_consumptions`].slice(idx, 1);
    console.log(id);
    form.setFieldValue(`${mode}_consumptions`, tmp);
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
          {AddFinancialReportForm1Config.map((field) => (
            <div
              className="col"
              key={field.label}
              style={{
                marginBottom: 20,
                ...(mode === "express" ? { display: "none" } : {}),
              }}
            >
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

          {AddFinancialReportForm2Config.map((field) => (
            <div
              className="col"
              key={field.label}
              style={{
                marginBottom: 20,
                ...(mode === "smart" ? { display: "none" } : {}),
              }}
            >
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
          data={form.values[`${mode}_consumptions`]}
          onRowClick={(idx, expense) => openExpenseModal(expense)}
          toolbar={
            <button
              onClick={() => openExpenseModal()}
              className="btn btn-sm btn-warning me-3"
              type="button"
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
          mode={mode}
        />

        <button type="submit" className="btn btn-warning me-3 mt-7">
          {!loading && <span className="indicator-label">Отправить отчёт</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>

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
