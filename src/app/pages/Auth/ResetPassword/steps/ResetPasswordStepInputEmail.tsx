import clsx from "clsx";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";

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

export function ResetPasswordInputEmail() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setFieldError, setStatus, setSubmitting }) => {},
  });

  return (
    <div
      className="d-flex justify-content-center min-vh-100 p-"
      style={{
        backgroundImage: `url(${toAbsoluteUrl("media/auth/background2.png")})`,
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
            className="w-100 w-sm-100"
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
              <h1 className="text-gray-900 fw-bolder mb-3">Сброс пароля</h1>
              <div className="text-gray-500 fw-semibold fs-6">
                Пожалуйста введите свою электронную почту, мы отправим код для
                сброс пароля
              </div>
            </div>
            {/* begin::Heading */}

            {/* begin::Form group */}
            <div className="fv-row mb-8 d-flex flex-column flex-sm-row align-items-start gap-5">
              <div className="w-100 flex-grow-1 ">
                <input
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                  className={clsx(
                    "form-control bg-transparent w-100",
                    {
                      "is-invalid": formik.touched.email && formik.errors.email,
                    },
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
                        Требуется почта
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn btn-primary w-100 w-sm-auto"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className="indicator-label">Отправить</span>}
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
            {/* end::Form group */}

            <div className="d-flex justify-content-center" style={{marginTop: 70}}>
              <img src={toAbsoluteUrl("media/auth/chart.png")} width={240}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
