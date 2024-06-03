import { useEffect, useState } from "react";
import OtpInput from "../../../../../../_metronic/helpers/components/OtpInput";
import { emailVerify } from "../../../core/_requests";
import { AuthModel } from "../../..";

export function EmailVerification({
  user,
  onSuccess,
}: {
  user?: AuthModel;
  onSuccess?: (user: AuthModel) => void;
}) {
  const [values, setValues] = useState(["0", "0", "0", "0", "0", "0"]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailVerification = async (otp: string) => {
    try {
      setLoading(true);
      const token = user?.token;
      if (!user || !token) throw new Error("token is empty");
      await emailVerify(token, otp);
      onSuccess && onSuccess(user);
      setErrorMessage("");
      setValues(["", "", "", "", "", ""]);
    } catch (error: any) {
      const message = error?.response?.data?.message;
      setErrorMessage(message || "Неправильный код");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {errorMessage && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{errorMessage}</div>
        </div>
      )}
      <OtpInput
        values={values}
        submitText="Отправить"
        onSubmit={handleEmailVerification}
        loading={loading}
      />
    </div>
  );
}
