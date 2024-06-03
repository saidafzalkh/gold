import { FormikErrors } from "formik";

export const validateFields = async <T extends string[]>(
  fieldNames: T,
  options: {
    validateForm: (values?: any) => Promise<FormikErrors<any>>;
    setFieldTouched: (
      field: string,
      touched?: boolean,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<any>> | Promise<void>;
  }
) => {
  const validation = await options.validateForm();
  const isFieldsValid = fieldNames.map((name) => {
    const error = validation?.[name];
    if (error) {
      options.setFieldTouched(name, true, true);
      return false;
    }
    return true;
  });
  return isFieldsValid.every(Boolean);
};
