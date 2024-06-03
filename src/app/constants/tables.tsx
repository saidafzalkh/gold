export const OverdueTableConfig = [
  { key: "fullname", label: "ФИО клиента" },
  { key: "status", label: "Статус" },
  { key: "amount", label: "Сумма" },
  { key: "returned", label: "Возвращено" },
];

export const UserManagementTableConfig = [
  { key: "user", label: "Пользователь" },
  { key: "region", label: "Регион" },
  { key: "branch", label: "Филиал" },
  { key: "action", label: "" },
];

export const OverdueTableData = [
  {
    id: 1,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-success fs-base">
        Переданные юристу
      </span>
    ),
    amount: <span className="text-success">3800 тг</span>,
    returned: <span className="text-success">3800 тг</span>,
  },
  {
    id: 2,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-success fs-base">
        Переданные юристу
      </span>
    ),
    amount: <span className="text-danger">2600 тг</span>,
    returned: <span className="text-danger">2600 тг</span>,
  },
  {
    id: 3,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-danger fs-base">Приостановленные</span>
    ),
    amount: <span className="text-danger">2600 тг</span>,
    returned: <span className="text-danger">2600 тг</span>,
  },
  {
    id: 4,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-warning fs-base">Без документов</span>
    ),
    amount: <span className="text-success">2600 тг</span>,
    returned: <span className="text-success">2600 тг</span>,
  },
  {
    id: 5,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-warning fs-base">Без документов</span>
    ),
    amount: <span className="text-danger">2600 тг</span>,
    returned: <span className="text-success">2600 тг</span>,
  },
  {
    id: 6,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-warning fs-base">Без документов</span>
    ),
    amount: <span className="text-success">3900 тг</span>,
    returned: <span className="text-success">4000 тг</span>,
  },
  {
    id: 7,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-success fs-base">
        Переданные юристу
      </span>
    ),
    amount: <span className="text-success">3800 тг</span>,
    returned: <span className="text-success">3800 тг</span>,
  },
  {
    id: 8,
    fullname: "Нургалиев Данияр",
    status: (
      <span className="badge badge-light-success fs-base">
        Переданные юристу
      </span>
    ),
    amount: <span className="text-danger">2600 тг</span>,
    returned: <span className="text-danger">2600 тг</span>,
  },
];

export const UserManagementTableData = [
  {
    id: 1,
    name: "Брэд Симмонс",
    role: "Региональный директор",
    region: "Акмолинская",
    branch: "Весь регион",
  },
  {
    id: 2,
    name: "Леброн Вайд",
    role: "Региональный директор",
    region: "Акмолинская",
    branch: "Весь регион",
  },
  {
    id: 3,
    name: "Брэнда Симмонс",
    role: "Региональный директор",
    region: "Акмолинская",
    branch: "Весь регион",
  },
  {
    id: 4,
    name: "Натали Трамп",
    role: "Региональный директор",
    region: "Акмолинская",
    branch: "Весь регион",
  },
  {
    id: 5,
    name: "Джесси Кларксон",
    role: "Админ",
    region: "Павлодарская",
    branch: "г. Павлодар, Филиал №4",
  },
];

export const BranchTableConfig = [
  { key: "branch", label: "Филиал" },
  { key: "region", label: "Регион" },
  { key: "city", label: "Город" },
  { key: "action", label: "" },
];

export const BranchTableData = [
  {
    id: 1,
    name: "Филиал №1",
    address: "ул. Кажымукана, д. 15",
    region: "Акмолинская",
    city: "г. Астана",
  },
  {
    id: 2,
    name: "Филиал №2",
    address: "ул. Кажымукана, д. 5",
    region: "Алматинская",
    city: "г. Алматы",
  },
  {
    id: 3,
    name: "Филиал №3",
    address: "ул. Кажымукана, д. 7",
    region: "Акмолинская",
    city: "г. Астана",
  },
  {
    id: 4,
    name: "Филиал №4",
    address: "ул. Кажымукана, д. 23",
    region: "Алматинская",
    city: "г. Алматы",
  },
  {
    id: 5,
    name: "Филиал №5",
    address: "ул. Кажымукана, д. 74",
    region: "Акмолинская",
    city: "г. Астана",
  },
];

export const FinancialReportTableConfig = [
  { key: "id", label: "№" },
  { key: "date", label: "Дата", type: "date"},
  { key: "equity_capital_on_hand", label: "Собственный капитал на руках" },
  { key: "equity_capital_in_goods", label: "Собственный капитал на товар" },
  { key: "expenses", label: "Расходы", className: "text-danger" },
  { key: "net_profit", label: "Чистая прибыль", className: "text-success" },
  { key: "sold_in_goods", label: "Продано в товарах" },
];

export const FinancialReportTableData = [
  {
    id: 1,
    date: "27.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 2,
    date: "28.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 3,
    date: "29.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 4,
    date: "30.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 5,
    date: "30.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 6,
    date: "30.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 7,
    date: "30.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 8,
    date: "30.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
  {
    id: 9,
    date: "30.04.2024",
    equity_capital_on_hand: "3000 тг",
    equity_capital_in_goods: "3000 тг",
    expenses: "3000 тг",
    net_profit: "3000 тг",
    sold_in_goods: "3000 тг",
  },
];

export const ExpensesTableConfig = [
  { label: "Сумма", key: "sum", className: "text-muted" },
  { label: "Описание", key: "description", className: "text-muted" },
  { label: "Тип", key: "type", className: "text-muted" },
];

export const ExpensesTableData = [
  {
    sum: " 1000 тг",
    description: "Chrome - Windows",
    type: "Зарплата",
  },
  {
    sum: " 2000 тг",
    description: "Chrome - Windows",
    type: "Аренда помещения",
  },
  {
    sum: " 3000 тг",
    description: "Chrome - Windows",
    type: "Кредит",
  },
  {
    sum: " 4000 тг",
    description: "Chrome - Windows",
    type: "Инвесторы",
  },
];