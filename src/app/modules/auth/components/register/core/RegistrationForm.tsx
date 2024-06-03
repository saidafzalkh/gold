/* eslint-disable react-refresh/only-export-components */
import { FormikValues, useFormik } from "formik";
import {
  FC,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { registrationFormSchema } from "./schema";
import { WithChildren } from "../../../../../../_metronic/helpers";
import { register } from "../../../core/_requests";
import { AuthModel } from "../../../core/_models";
import { handle400FormErrors } from "../../../../../helpers/errors";
import { useAuth } from "../../../core/Auth";

const initailFormValues = {
  school: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  password_confirmation: "",
  acceptTerms: false,
};

export type Formik<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

type RegistrationFormContextProps = {
  loading: boolean;
  step: number;
  user?: AuthModel;
  formik?: Formik<typeof initailFormValues>;
  setStep?: Dispatch<SetStateAction<number>>;
};
const RegistrationFormContext = createContext<RegistrationFormContextProps>({
  loading: false,
  user: undefined,
  step: 0,
});

const useRegistrationForm = () => useContext(RegistrationFormContext);

const RegistrationFormProvider: FC<WithChildren> = ({ children }) => {
  const [step, setStep] = useState(0);
  const { saveAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<AuthModel | undefined>(undefined);

  const formik = useFormik({
    initialValues: initailFormValues,
    validationSchema: registrationFormSchema,
    onSubmit: async (values, { setFieldError, setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.password_confirmation
        );
        setUser(auth.user);
        setLoading(false);
        setStatus("");
      } catch (error: any) {
        const errors = error?.response?.data?.errors || {};
        const message = error?.response?.data?.message;
        handle400FormErrors(errors, { setFieldError });
        saveAuth(undefined);
        setStatus(message || "The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
        console.error(error);
      }
    },

    validateOnBlur: false,
    validateOnChange: true,
  });

  return (
    <RegistrationFormContext.Provider
      value={{ loading, user, formik: formik, step, setStep }}
    >
      {children}
    </RegistrationFormContext.Provider>
  );
};

export { RegistrationFormProvider, useRegistrationForm };
