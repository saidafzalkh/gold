import classNames from "classnames";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ExpensesTable from "../../../components/ExpensesTable/ExpensesTable";
import Accordion from "../../../components/UI/Accordion";
import axiosInstance from "../../api/axiosInstance";
import { useGetLastShift } from "../../api/get-last-shift";
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
  const { shift, isSuccess } = useGetLastShift();

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
      form.resetForm();
      toast("Отчет отправлен");
    },
  });

  useEffect(() => {
    form.setFieldValue("start_shift", shift?.end_shift || 0);
    form.setFieldValue("smart_start_shift", shift?.smart_end_shift || 0);
  }, [isSuccess]);

  const {
    deposit_tickets,
    smart_deposit_tickets,
    end_shift,
    smart_end_shift,
    investor_capital,
    smart_investor_capital,
    used_goods,
    smart_used_goods,
    start_shift,
    smart_start_shift,
    refreshment,
    smart_refreshment,
    ransom,
    smart_ransom,
    renewal,
    smart_renewal,
    selling_goods,
    smart_selling_goods,
    collection,
    smart_collection,
    deposit,
    smart_deposit,
    smart_buying_up,
    return_goods,
    smart_return_goods,
    express_consumptions,
    smart_consumptions,
    partial_redemption,
    smart_partial_redemption,
  } = form.values;

  useEffect(() => {
    const express_consumptions_sum = express_consumptions.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.sum,
      0
    );
    const smart_consumptions_sum = smart_consumptions.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.sum,
      0
    );

    form.setFieldValue(
      "equity",
      +deposit_tickets + +end_shift - +investor_capital
    );

    form.setFieldValue(
      "smart_equity",
      +smart_deposit_tickets + +smart_end_shift - +smart_investor_capital
    );

    form.setFieldValue(
      "own_capital",
      +deposit_tickets + +used_goods + +end_shift - +investor_capital
    );

    form.setFieldValue(
      "smart_own_capital",
      +smart_deposit_tickets +
        +smart_used_goods +
        +smart_end_shift -
        +smart_investor_capital
    );

    form.setFieldValue(
      "end_shift",
      +start_shift +
        +refreshment +
        +ransom +
        +partial_redemption +
        +renewal +
        +selling_goods -
        +collection -
        +deposit -
        +return_goods -
        +express_consumptions_sum
    );

    form.setFieldValue(
      "smart_end_shift",
      +smart_start_shift +
        +smart_refreshment +
        +smart_ransom +
        +smart_partial_redemption +
        +smart_renewal +
        +smart_selling_goods -
        +smart_collection -
        +smart_buying_up -
        +smart_deposit -
        +smart_return_goods -
        +smart_consumptions_sum
    );
  }, [
    deposit_tickets,
    end_shift,
    investor_capital,
    smart_deposit_tickets,
    smart_end_shift,
    smart_investor_capital,

    used_goods,
    smart_used_goods,

    start_shift,
    refreshment,
    ransom,
    renewal,
    selling_goods,
    collection,
    deposit,
    return_goods,
    smart_start_shift,
    smart_refreshment,
    smart_ransom,
    smart_renewal,
    smart_selling_goods,
    smart_collection,
    smart_buying_up,
    smart_deposit,
    smart_return_goods,

    express_consumptions,
    smart_consumptions,
  ]);

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
          {AddFinancialReportForm2Config.map((field) => (
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
                disabled={field.disabled}
              />
            </div>
          ))}

          {AddFinancialReportForm1Config.map((field) => (
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
                disabled={field.disabled}
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

      <Toaster />
    </div>
  );
}

export default FinancialReportsAddPage;
