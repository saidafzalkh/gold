import clsx from "clsx";
import { KTIcon } from "../../../helpers";

type Props = {
  toggleBtnClass?: string;
  toggleBtnIconClass?: string;
  menuPlacement?: string;
  menuTrigger?: string;
};

const LocaleSwitcher = ({
  toggleBtnClass = "",
  toggleBtnIconClass = "fs-1",
  menuPlacement = "bottom-end",
  menuTrigger = "{default: 'click', lg: 'hover'}",
}: Props) => {
  return (
    <>
      {/* begin::Menu toggle */}
      <a
        href="#"
        className={clsx("btn btn-icon ", toggleBtnClass)}
        data-kt-menu-trigger={menuTrigger}
        data-kt-menu-attach="parent"
        data-kt-menu-placement={menuPlacement}
      >
        <div>ru</div>
      </a>
      {/* begin::Menu toggle */}

      {/* begin::Menu */}
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
        data-kt-menu="true"
      >
        {/* begin::Menu item */}
        <div className="menu-item px-3 my-0">
          <a href="#" className={clsx("menu-link px-3 py-2")}>
            <span className="menu-title">Русский</span>
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className="menu-item px-3 my-0">
          <a href="#" className={clsx("menu-link px-3 py-2")}>
            <span className="menu-title">Казахский</span>
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  );
};

export { LocaleSwitcher };
