import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../../modules/auth";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import axiosInstance from "../../api/axiosInstance";
import useToken from "../../hooks/useToken";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неправильный формат электронной почты")
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Требуется электронная почта"),
  password: Yup.string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Необходим пароль"),
});

const initialValues = {
  email: "",
  password: "",
};

export function SignInPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setToken } = useToken();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setFieldError }) => {
      setLoading(true);

      try {
        const res = await axiosInstance.post("/auth/login", values);
        if (res.data?.success) {
          setToken(res.data?.data.token);
          navigate("/analytics");
        } else {
          setFieldError(res.data?.data.error, res.data?.data.message);
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    },
  });

  return (
    <div
      className="d-flex justify-content-center min-vh-100 p-"
      style={{
        backgroundImage: `url(${toAbsoluteUrl("media/auth/background.jpg")})`,
        backgroundSize: "cover", // Add this for better coverage
      }}
    >
      <form
        className="form d-flex align-items-center"
        onSubmit={formik.handleSubmit}
        noValidate
        id="kt_login_signin_form"
      >
        <div
          className="d-flex justify-content-center"
          style={{
            maxWidth: "540px",
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
            <div
              className="d-flex justify-content-center w-100"
              style={{ marginBottom: 35, marginTop: 35 }}
            >
              <img
                src={toAbsoluteUrl("media/svg/logo.svg")}
                height={107}
                width={107}
              />
            </div>
            {/* begin::Heading */}
            <div className="text-center mb-11">
              <h1 className="text-gray-900 fw-bolder mb-3">Вход в аккаунт</h1>
              <div className="text-gray-500 fw-semibold fs-6">
                Пожалуйста введите ваши данные
              </div>
            </div>
            {/* begin::Heading */}

            {/* begin::Form group */}
            <div className="fv-row mb-8">
              <input
                placeholder="Электронная почта"
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
                      {formik.errors.email}
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
                    <span role="alert font-color-error">
                      {formik.errors.password}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Wrapper */}
            <div className="d-flex justify-content-between align-items-center my-5">
              <label className="form-check form-check-inline form-check-solid me-5">
                <input
                  className="form-check-input"
                  name="communication[]"
                  type="checkbox"
                />
                <span className="fw-semibold ps-2" style={{ fontSize: 13 }}>
                  Запомнить меня
                </span>
              </label>

              <div className="fw-semibold">
                <Link
                  to="/auth/forgot-password"
                  className="text-primary"
                  style={{ fontSize: 13 }}
                >
                  Забыли пароль?
                </Link>
              </div>
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

            <div className="text-gray-500 text-center fs-5">
              Нет аккаунта?
              <Link to="/auth/registration">
                <span className="ms-1 link-primary">
                  Просим связаться с администратором
                </span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
