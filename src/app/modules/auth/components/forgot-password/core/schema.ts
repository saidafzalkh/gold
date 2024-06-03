import { string, object, InferType, ref } from "yup";

export type EmailSendSchemaProps = InferType<typeof emailSendSchema>;
export type PasswordRecoverySchemaProps = InferType<
  typeof passwordRecoverySchema
>;

export const emailSendSchema = object().shape({
  email: string()
    .email("Неверный формат email")
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
});

export const passwordRecoverySchema = object().shape({
  password: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  password_confirmation: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле")
    .oneOf([ref("password")], "Пароль и подтверждение пароля не совпадают"),
});
