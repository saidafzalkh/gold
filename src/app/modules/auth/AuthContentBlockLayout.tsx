import { HTMLAttributes, PropsWithChildren } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";
import SVG from "react-inlinesvg";

type ElementProps = {
  back: HTMLAttributes<HTMLDivElement>;
};

type AuthContentBlockLayoutProps = {
  title: string;
  description: string;
  iconUrl?: string;
  props?: ElementProps;
};

const AuthContentBlockLayout = ({
  children,
  title,
  description,
  iconUrl,
  props,
}: PropsWithChildren<AuthContentBlockLayoutProps>) => {
  return (
    <div className="position-relative">
      {!!props?.back && <Back props={props.back} />}

      <div>
        {!!iconUrl && <Icon iconUrl={iconUrl} />}
        <h1 className="text-center">{title}</h1>
        <p className="text-center text-gray-500 fw-semibold fs-6">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
};

export { AuthContentBlockLayout };

const Back = ({ props }: { props: ElementProps["back"] }) => {
  return (
    <div
      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
      {...props}
    >
      <KTIcon iconName="arrow-left" className="fs-3" />
    </div>
  );
};

const Icon = ({ iconUrl }: { iconUrl: string }) => {
  return (
    <div className="d-flex justify-content-center mb-5">
      <SVG src={toAbsoluteUrl(iconUrl)} />
    </div>
  );
};
