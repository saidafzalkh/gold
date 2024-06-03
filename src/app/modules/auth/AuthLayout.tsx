import { PropsWithChildren, useEffect } from "react";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import SVG from "react-inlinesvg";

const AuthLayout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div className="d-flex bg-light p-5 m-auto w-100 h-100">
      <div className="d-none d-md-flex w-50 p-5 flex-column justify-content-center align-items-center">
        <SVG src={toAbsoluteUrl("media/svg/illustrations/easy/landing.svg")} />
        <h2 className="text-center mt-5">
          Добро пожаловать в Center.Nnpcfk.Kz
        </h2>
        <p className="text-center mt-2 w-75">
          Доступ к эксклюзивным ресурсам и функциям для образовательных
          профессионалов в сфере физической культуры. Войдите, чтобы получить
          доступ к курсам, тренировкам, соревнованиям и всестороннему развитию
          спортивного потенциала Казахстана.
        </p>
      </div>

      <div
        className="container m-auto bg-white rounded w-100 w-md-50"
        style={{ padding: "40px", maxWidth: "600px" }}
      >
        {children}
      </div>
    </div>
  );
};

export { AuthLayout };
