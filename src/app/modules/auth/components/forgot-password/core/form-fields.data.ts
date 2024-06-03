export const passwordRecoveryFieldsData = [
  {
    name: "password",
    label: "Пароль",
    placeholder: "Пароль",
    type: "password",
    required: true,
  },
  {
    name: "password_confirmation",
    label: "Подтверждение пароля",
    placeholder: "Подтверждение пароля",
    type: "password",
    required: true,
  },
] as const;
