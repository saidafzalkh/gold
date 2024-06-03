export const registrationFormFieldsData = [
  {
    name: "firstname",
    label: "Имя",
    placeholder: "Имя",
    type: "text",
    required: true,
  },
  {
    name: "lastname",
    label: "Фамилия",
    placeholder: "Фамилия",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
    required: true,
  },
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
  {
    name: "school",
    label: "Школа",
    placeholder: "Школа",
    type: "text",
    required: false,
  },
] as const;

const registrationFormSteps = {
  required: [registrationFormFieldsData[0], registrationFormFieldsData[1]],
  optional: [
    registrationFormFieldsData[2],
    registrationFormFieldsData[3],
    registrationFormFieldsData[4],
    registrationFormFieldsData[5],
  ],
};

export const registrationFormStepsData = [
  {
    title: "",
    schema: registrationFormSteps["required"],
    fieldNames: registrationFormSteps["required"].map((field) => field.name),
  },
  {
    title: "",
    schema: registrationFormSteps["optional"],
    fieldNames: registrationFormSteps["optional"].map((field) => field.name),
  },
] as const;
