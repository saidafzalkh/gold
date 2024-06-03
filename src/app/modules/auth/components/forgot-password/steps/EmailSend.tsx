import { useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { PasswordMeterComponent } from "../../../../../../_metronic/assets/ts/components";
import { useForgotPassword } from "../core/ForgotPasswordContext";

export function EmailSend() {
  const { emailForm: formik, loading } = useForgotPassword();
  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <form
      className="m-auto p-5 form w-130 fv-plugins-bootstrap5 fv-plugins-framework"
      noValidate
      id="kt_login_signup_form"
      onSubmit={formik?.handleSubmit}
    >
      {formik?.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik?.status}</div>
        </div>
      )}

      <div className="fv-row mb-8">
        <label className="form-label fw-bolder text-gray-900 fs-6">
          Email <span className="text-danger">*</span>
        </label>
        <input
          placeholder="Email"
          type="email"
          autoComplete="off"
          {...formik?.getFieldProps("email")}
          className={clsx(
            "form-control bg-transparent",
            {
              "is-invalid": formik?.touched["email"] && formik?.errors["email"],
            },
            {
              "is-valid": formik?.touched["email"] && !formik?.errors["email"],
            }
          )}
        />
        {formik?.touched["email"] && formik?.errors["email"] && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik?.errors["email"]}</span>
            </div>
          </div>
        )}
      </div>

      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="d-flex text-center gap-5">
        <button
          type="submit"
          id="kt_sign_up_submit"
          className="btn btn-lg btn-primary w-100 mb-5"
          disabled={formik?.isSubmitting || !formik?.isValid}
        >
          {!loading && <span className="indicator-label">Сбросить пароль</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>

      <div className="text-gray-500  text-center">
        Я помню пароль.
        <Link to="/auth/login">
          <span className="ms-1 link-primary">Войти</span>
        </Link>
      </div>
    </form>
  );
}
