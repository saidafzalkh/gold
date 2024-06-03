import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {
  checkIsActive,
  KTIcon,
  toAbsoluteUrl,
  WithChildren,
} from "../../../../helpers";
import { useLayout } from "../../../core";
import classNames from "classnames";

type Props = {
  to: string;
  title: string;
  icon?: React.ReactElement;
  fontIcon?: string;
  hasBullet?: boolean;
  className?: string;
};

const SidebarMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  className = "",
  fontIcon,
  hasBullet = false,
}) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { config } = useLayout();
  const { app } = config;

  return (
    <div className="menu-item" style={{ marginLeft: 0 }}>
      <Link
        className={clsx("menu-link without-sub", { active: isActive })}
        to={to}
      >
        {icon && (
          <span
            className={classNames("menu-icon", className )}
            style={{ width: "auto" }}
          >
            {icon}
          </span>
        )}
        <span
          className="menu-title fw-semibold text-dark"
          style={{ fontSize: 16, marginLeft: 12 }}
        >
          {title}
        </span>
      </Link>
      {children}
    </div>
  );
};

export { SidebarMenuItem };
