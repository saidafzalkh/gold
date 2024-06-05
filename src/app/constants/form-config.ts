import * as Yup from "yup";
import { AddExpenseFormType } from "../modules/financial-reports/partials/AddExpenseModal";

export const AddFinancialReportForm1Config = [
  {
    label: "Начало смены",
    name: "start_shift",
    required: true,
    type: "number",
  },
  {
    label: "Фиксированный расход",
    name: "fixed_flow",
    required: true,
    type: "text",
  },
  { label: "Подкрепление", name: "refreshment", required: true, type: "text" },
  { label: "Инкасация", name: "collection", required: true, type: "text" },
  { label: "Залог", name: "deposit", required: true, type: "text" },
  { label: "Выкуп", name: "ransom", required: true, type: "text" },
  { label: "Продление", name: "renewal", required: true, type: "text" },
  {
    label: "Вывод из залогов",
    name: "withdraw_pledges",
    required: true,
    type: "text",
  },
  {
    label: "Частичный выкуп",
    name: "partial_redemption",
    required: true,
    type: "text",
  },
  {
    label: "Продажа товаров",
    name: "selling_goods",
    required: true,
    type: "text",
  },
  {
    label: "Доход за проценты",
    name: "interest_income",
    required: true,
    type: "text",
  },
  {
    label: "Доход за товары",
    name: "income_goods",
    required: true,
    type: "text",
  },
  {
    label: "Возврат товаров",
    name: "return_goods",
    required: true,
    type: "text",
  },
  { label: "Товары бу", name: "used_goods", required: true, type: "text" },
  {
    label: "Залоговые билеты/товары",
    name: "deposit_tickets",
    required: true,
    type: "text",
  },
  {
    label: "Залоговые билеты/готов к продаже",
    name: "pledge_tickets",
    required: true,
    type: "text",
  },
  {
    label: "Заёмный капитал инвесторов",
    name: "investor_capital",
    required: true,
    type: "text",
  },
  {
    label: "Заёмный капитал кредит",
    name: "borrowed_capital",
    required: true,
    type: "text",
  },
  {
    label: "Собственный капитал на руках",
    name: "equity",
    required: true,
    type: "number",
  },
  {
    label: "Собственный капитал в товарах",
    name: "own_capital",
    required: true,
    type: "number",
  },
];

export const AddFinancialReportForm2Config = [
  {
    label: "Начало смены",
    name: "smart_start_shift",
    required: true,
    type: "number",
  },
  {
    label: "Фиксированный расход",
    name: "smart_fixed_flow",
    required: true,
    type: "text",
  },
  { label: "Подкрепление", name: "smart_refreshment", required: true, type: "text" },
  { label: "Инкасация", name: "smart_collection", required: true, type: "text" },
  { label: "Залог", name: "smart_deposit", required: true, type: "text" },
  { label: "Выкуп", name: "smart_ransom", required: true, type: "text" },
  { label: "Продление", name: "smart_renewal", required: true, type: "text" },
  {
    label: "Вывод из залогов",
    name: "smart_withdraw_pledges",
    required: true,
    type: "text",
  },
  {
    label: "Частичный выкуп",
    name: "smart_partial_redemption",
    required: true,
    type: "text",
  },
  {
    label: "Продажа товаров",
    name: "smart_selling_goods",
    required: true,
    type: "text",
  },
  {
    label: "Доход за проценты",
    name: "smart_interest_income",
    required: true,
    type: "text",
  },
  {
    label: "Доход за товары",
    name: "smart_income_goods",
    required: true,
    type: "text",
  },
  {
    label: "Возврат товаров",
    name: "smart_return_goods",
    required: true,
    type: "text",
  },
  { label: "Товары бу", name: "smart_used_goods", required: true, type: "text" },
  {
    label: "Залоговые билеты/товары",
    name: "smart_deposit_tickets",
    required: true,
    type: "text",
  },
  {
    label: "Залоговые билеты/готов к продаже",
    name: "smart_pledge_tickets",
    required: true,
    type: "text",
  },
  {
    label: "Заёмный капитал инвесторов",
    name: "smart_investor_capital",
    required: true,
    type: "text",
  },
  {
    label: "Заёмный капитал кредит",
    name: "smart_borrowed_capital",
    required: true,
    type: "text",
  },
  {
    label: "Собственный капитал на руках",
    name: "smart_equity",
    required: true,
    type: "number",
  },
  {
    label: "Собственный капитал в товарах",
    name: "smart_own_capital",
    required: true,
    type: "number",
  },
];

const emptyErrorMessage = "hello";

export const reportSchema = Yup.object().shape({
  start_shift: Yup.number().required("").min(1, emptyErrorMessage),
  fixed_flow: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  refreshment: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  collection: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  deposit: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  ransom: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  renewal: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  withdraw_pledges: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  partial_redemption: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  selling_goods: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  interest_income: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  income_goods: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  return_goods: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  deposit_tickets: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  pledge_tickets: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  investor_capital: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  borrowed_capital: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  equity: Yup.number().required("").min(1, emptyErrorMessage),
  own_capital: Yup.number().required("").min(1, emptyErrorMessage),
  smart_start_shift: Yup.number().required("").min(1, emptyErrorMessage),
  smart_fixed_flow: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_refreshment: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_collection: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_deposit: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_ransom: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_renewal: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_withdraw_pledges: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_partial_redemption: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_selling_goods: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_interest_income: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_income_goods: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_return_goods: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_deposit_tickets: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_pledge_tickets: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_investor_capital: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_borrowed_capital: Yup.string()
    .required("")
    .test("empty-check", emptyErrorMessage, (value) => value.length == 0),
  smart_equity: Yup.number().required("").min(1, emptyErrorMessage),
  smart_own_capital: Yup.number().required("").min(1, emptyErrorMessage),
});

export const initialFormState = {
  start_shift: "",
  fixed_flow: "",
  refreshment: "",
  collection: "",
  deposit: "",
  ransom: "",
  renewal: "",
  withdraw_pledges: "",
  partial_redemption: "",
  selling_goods: "",
  interest_income: "",
  income_goods: "",
  return_goods: "",
  deposit_tickets: "",
  pledge_tickets: "",
  investor_capital: "",
  borrowed_capital: "",
  equity: "",
  own_capital: "",
  express_consumptions: [] as AddExpenseFormType[],
  smart_start_shift: "",
  smart_fixed_flow: "",
  smart_refreshment: "",
  smart_collection: "",
  smart_deposit: "",
  smart_ransom: "",
  smart_renewal: "",
  smart_withdraw_pledges: "",
  smart_partial_redemption: "",
  smart_selling_goods: "",
  smart_interest_income: "",
  smart_income_goods: "",
  smart_return_goods: "",
  smart_deposit_tickets: "",
  smart_pledge_tickets: "",
  smart_investor_capital: "",
  smart_borrowed_capital: "",
  smart_equity: "",
  smart_own_capital: "",
  smart_consumptions: [] as AddExpenseFormType[],
};