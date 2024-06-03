/* eslint-disable react-refresh/only-export-components */
import { FormikValues, useFormik } from "formik";
import {
  FC,
  useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { WithChildren } from "../../../../../../_metronic/helpers";
import { emailSendSchema, passwordRecoverySchema } from "./schema";

const emailSendFormInitialState = {
  email: "",
};

const passwordRecoveryFormInitialState = {
  password: "",
  password_confirmation: "",
};

export type Formik<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

type ForgotPasswordContextProps = {
  emailForm?: Formik<typeof emailSendFormInitialState>;
  passwordRecoveryForm?: Formik<typeof passwordRecoveryFormInitialState>;
  loading?: boolean;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};
const ForgotPasswordContext = createContext<ForgotPasswordContextProps>({
  step: 0,
  setStep: () => {},
});

const useForgotPassword = () => useContext(ForgotPasswordContext);

const ForgotPasswordProvider: FC<WithChildren> = ({ children }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const emailForm = useFormik({
    initialValues: emailSendFormInitialState,
    validationSchema: emailSendSchema,
    onSubmit: async (values, { setFieldError, setStatus, setSubmitting }) => {
      try {
        setLoading(true);
        setStep(1);
        setStatus("");
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    validateOnBlur: false,
    validateOnChange: true,
  });

  const passwordRecoveryForm = useFormik({
    initialValues: passwordRecoveryFormInitialState,
    validationSchema: passwordRecoverySchema,
    onSubmit: async (values, { setFieldError, setStatus, setSubmitting }) => {
      try {
        setLoading(true);

        setStatus("");
      } catch (error: any) {
        // const errors = error?.response?.data?.errors || {};
        // const message = error?.response?.data?.message;
        // handle400FormErrors(errors, { setFieldError });
        // saveAuth(undefined);
        // setStatus(message || "The registration details is incorrect");
        // setSubmitting(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    },

    validateOnBlur: false,
    validateOnChange: true,
  });

  return (
    <ForgotPasswordContext.Provider
      value={{ emailForm, passwordRecoveryForm, loading, step, setStep }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
};

export { ForgotPasswordProvider, useForgotPassword };
