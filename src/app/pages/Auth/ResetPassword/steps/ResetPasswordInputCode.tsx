import React, { useEffect, useRef, useState } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
import { useWindowSize } from "usehooks-ts";

function ResetPasswordInputCode() {
  const [confirmCode, setConfirmCode] = useState(["", "", "", "", "", ""]);
  const { width = 0 } = useWindowSize();
  const codeInputSize = width < 650 ? 40 : 60;
  const codeInputFontSize = width < 650 ? 26 : 32;

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const currentInput = useRef<number>(0);

  useEffect(() => {
    inputRefs.current[currentInput.current]?.focus();
  }, []);

  const codeInputs = Array(6)
    .fill(null)
    .map((el, idx) => idx);

  return (
    <div
      className="d-flex justify-content-center min-vh-100"
      style={{
        backgroundImage: `url(${toAbsoluteUrl("media/auth/background.jpg")})`,
        backgroundSize: "cover", // Add this for better coverage
      }}
    >
      <form
        className="form d-flex align-items-center"
        noValidate
        id="kt_login_signin_form"
      >
        <div
          className="d-flex justify-content-center"
          style={{
            width: "min(100%, 540px)",
          }}
        >
          <div
            className="w-100 w-sm-100"
            style={{
              padding: width < 650 ? "20px 30px" : "40px 60px",
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
                src={toAbsoluteUrl("media/auth/smartphone.svg")}
                height={162}
                width={162}
              />
            </div>
            {/* begin::Heading */}
            <div className="text-center mb-11">
              <h1 className="text-gray-900 fw-bolder mb-3">Забыли пароль</h1>
              <div className="text-gray-500 fw-semibold fs-6">
                Код подтверждения выслан вам на
              </div>
              <b className="fs-5">******ev@gmail.com</b>
            </div>
            {/* begin::Heading */}

            <div className="d-flex gap-3 gap-sm-5">
              {codeInputs.map((val, idx) => (
                <input
                  key={val}
                  ref={(el) =>
                    (inputRefs.current[idx] = el as HTMLInputElement)
                  }
                  onClick={() => {
                    currentInput.current = idx;
                    inputRefs.current[currentInput.current].select();
                  }}
                  value={confirmCode[idx]}
                  onChange={(e) => {
                    const inputLength = e.target.value.length;
                    const currentCharacter = e.target.value[inputLength - 1];
                    if (!e.target.value) {
                      const tmp = [...confirmCode]; // convert to an array
                      tmp[idx] = "";
                      setConfirmCode(tmp); // reconstruct the string
                      return;
                    }

                    const parsedDigit = parseInt(currentCharacter);
                    if (!isNaN(parsedDigit)) {
                      const tmp = [...confirmCode]; // convert to an array
                      tmp[idx] = parsedDigit.toString();
                      setConfirmCode(tmp);

                      if (idx < 5) {
                        currentInput.current++;
                        inputRefs.current[currentInput.current].focus();
                      } else {
                        inputRefs.current[5].blur();
                      }
                    }
                  }}
                  style={{
                    width: codeInputSize,
                    height: codeInputSize,
                    borderRadius: 6,
                    border: "2px solid #E1E3EA",
                    fontSize: codeInputFontSize,
                    textAlign: "center",
                    color: "#7E8299",
                    fontWeight: 600,
                  }}
                />
              ))}
            </div>

            <div
              className="d-flex justify-content-center "
              style={{ marginTop: 30 }}
            >
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn btn-primary w-100 w-sm-auto"
              >
                Сбросить пароль
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordInputCode;
