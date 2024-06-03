import { FormEvent, useState, KeyboardEvent, FC, useEffect } from "react";

type Props = {
  values: string[];
  onSubmit?: (otp: string) => void;
  submitText?: string;
  loading?: boolean;
};

const OtpInput: FC<Props> = ({ values, onSubmit, submitText, loading }) => {
  const length = values.length;
  const [otp, setOtp] = useState(values);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    onSubmit && onSubmit(otp.join(""));
    event.preventDefault();
  };

  const inputFocus = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      const next = index - 1;
      if (next > -1) {
        (
          document.getElementsByName(`otp${next + 1}`)[0] as HTMLInputElement
        ).focus();
      }
    } else {
      const next = index + 1;
      if (next < length) {
        (
          document.getElementsByName(`otp${next + 1}`)[0] as HTMLInputElement
        ).focus();
      }
    }
  };

  useEffect(() => {
    setOtp(values);
  }, [values]);

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center"
    >
      <div className="d-flex gap-3">
        {otp.map((value, index) => (
          <input
            key={index}
            name={`otp${index + 1}`}
            type="text"
            autoComplete="off"
            className="form-control bg-transparent"
            style={{
              width: "60px",
              height: "60px",
              padding: "16px 22px",
              fontSize: "23px",
            }}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            tabIndex={index + 1}
            maxLength={1}
            onKeyUp={(e) => inputFocus(index, e)}
          />
        ))}
      </div>

      <button
        type="submit"
        id="kt_sign_up_submit"
        className="btn btn-lg btn-primary w-100 mt-4"
        disabled={!otp.every((value) => !!value)}
      >
        {!loading && (
          <span className="indicator-label">{submitText || "submit"}</span>
        )}
        {loading && (
          <span className="indicator-progress" style={{ display: "block" }}>
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        )}
      </button>
    </form>
  );
};

export default OtpInput;
