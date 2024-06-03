import { string, ref, bool, object, InferType } from "yup";

export type IRegistrationFormSchema = InferType<typeof registrationFormSchema>;

export const registrationFormSchema = object().shape({
  firstname: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  email: string()
    .email("Неверный формат email")
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  lastname: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  school: string(),
  password: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  password_confirmation: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле")
    .oneOf([ref("password")], "Пароль и подтверждение пароля не совпадают"),
  acceptTerms: bool().required("Вы должны принять условия и положения"),
});
