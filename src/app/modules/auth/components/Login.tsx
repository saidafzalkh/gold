import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { getUserByToken, login } from "../core/_requests";
import { useAuth } from "../core/Auth";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { handle400FormErrors } from "../../../helpers/errors";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setFieldError, setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.email, values.password);
        saveAuth(auth.user);
        const { data: user } = await getUserByToken(auth.user.token);
        setCurrentUser(user);
      } catch (error: any) {
        const errors = error?.response?.data?.errors || {};
        const message = error?.response?.data?.message;
        handle400FormErrors(errors, { setFieldError });
        saveAuth(undefined);
        setStatus(message || "The login details are incorrect");
        setSubmitting(false);
        setLoading(false);
        console.error(error);
      }
    },
  });

  return (
    <div
      className="d-flex justify-content-center min-vh-100 p-"
      style={{
        backgroundImage: `url(${toAbsoluteUrl("media/auth/login-bg.png")})`,
        backgroundSize: "cover", // Add this for better coverage
      }}
    >
      <form
        className="form"
        onSubmit={formik.handleSubmit}
        noValidate
        id="kt_login_signin_form"
      >
        <div
          className="d-flex align-items-center flex-column"
          style={{ margin: "40px 0" }}
        >
          <img
            width={151}
            height={147}
            src={toAbsoluteUrl("media/auth/login-logo.png")}
            alt="logo"
          />
          <h3
            className="fs-1"
            style={{ color: "white", textShadow: "0px 6px 10.4px #000" }}
          >
            Национальный центр
          </h3>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{
            width: "450px",
          }}
        >
          <div
            className="w-75 w-sm-100"
            style={{
              padding: "40px 60px",
              borderRadius: "16px",
              boxShadow: "0px 0px 40px 0px rgba(94, 107, 141, 0.08)",
              backgroundColor: "#fff",
            }}
          >
            {/* begin::Heading */}
            <div className="text-center mb-11">
              <h1 className="text-gray-900 fw-bolder mb-3">Вход в аккаунт</h1>
              <div className="text-gray-500 fw-semibold fs-6">
                Введите ваши данные
              </div>
            </div>
            {/* begin::Heading */}

            {/* begin::Form group */}
            <div className="fv-row mb-8">
              <input
                placeholder="Телефон"
                {...formik.getFieldProps("email")}
                className={clsx(
                  "form-control bg-transparent",
                  { "is-invalid": formik.touched.email && formik.errors.email },
                  {
                    "is-valid": formik.touched.email && !formik.errors.email,
                  }
                )}
                type="email"
                name="email"
                autoComplete="off"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert font-color-error">
                      Требуется номер телефона
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className="fv-row mb-3">
              <input
                type="password"
                autoComplete="off"
                {...formik.getFieldProps("password")}
                placeholder="Пароль"
                className={clsx(
                  "form-control bg-transparent",
                  {
                    "is-invalid":
                      formik.touched.password && formik.errors.password,
                  },
                  {
                    "is-valid":
                      formik.touched.password && !formik.errors.password,
                  }
                )}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert font-color-error">Требуется пароль</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Wrapper */}
            <div className="text-gray-500 mb-5">
              Забыли пароль?
              <Link to="/auth/forgot-password">
                <span className="ms-1 link-primary">Восстановить</span>
              </Link>
            </div>
            {/* end::Wrapper */}

            {/* begin::Action */}
            <div className="d-grid mb-10">
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn btn-primary"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className="indicator-label">Вход</span>}
                {loading && (
                  <span
                    className="indicator-progress"
                    style={{ display: "block" }}
                  >
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
            </div>
            {/* end::Action */}

            <div className="text-gray-500  text-center">
              Еще нет аккаунта?
              <Link to="/auth/registration">
                <span className="ms-1 link-primary">Зарегистрироваться</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
