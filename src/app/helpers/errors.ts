export type THandle400FormErrors = {
  errors: Record<string, any>;
  options?: {
    setFieldError?: (field: string, message: string | undefined) => void;
  };
};

export const handle400FormErrors = (
  errors: THandle400FormErrors["errors"],
  options?: THandle400FormErrors["options"]
) => {
  let formErrors: Record<string, any> = {};
  for (let i in errors) {
    const key = i as keyof typeof errors;
    const errorMessage = errors?.[key]?.[0];
    if (typeof errorMessage === typeof "") {
      options?.setFieldError && options?.setFieldError(key, errorMessage);
      formErrors[key] = errorMessage;
    }
  }

  return formErrors;
};
