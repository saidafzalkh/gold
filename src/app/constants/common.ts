import { AddExpenseFormType } from "../modules/financial-reports/partials/AddExpenseModal";

export const ExpenseTypeOptions = [
  { key: "wage", label: "Зарплата" },
  { key: "rent", label: "Аренда помещения" },
  { key: "investor", label: "Инвесторы" },
  { key: "loan", label: "Кредит" },
  { key: "other", label: "Прочие расходы" },
  { key: "unexpected", label: "Непредвиденный расход" },
];

export const initialFormState = {
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
  field10: "",
  field11: "",
  field12: "",
  field13: "",
  field14: "",
  field15: "",
  field16: "",
  field17: "",
  field18: "",
  field19: "",
  field20: "",
  expenses: [] as AddExpenseFormType[],
};
