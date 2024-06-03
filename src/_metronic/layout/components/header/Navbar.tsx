import clsx from "clsx";
import { toAbsoluteUrl } from "../../../helpers";
import { HeaderUserMenu } from "../../../partials";

const itemClass = "ms-1 ms-md-4";
const btnClass = "btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px";
const userAvatarClass = "symbol-35px";
const btnIconClass = "fs-2";

const Navbar = () => {
  return (
    <div className="app-navbar flex-shrink-0 flex-column w-100 mx-auto " style={{maxWidth: 1160}}>
      <div className={clsx("app-navbar-item gap-5 align-items-center justify-content-end", itemClass)}>
        <span className="text-white fw-semibold fs-6">г. Актау, Филиал №15</span>
        <div
          className={clsx("cursor-pointer symbol ml-3", userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <img src={toAbsoluteUrl("media/svg/avatars/IconButton.svg")} alt="" />
        </div>
        <HeaderUserMenu />
      </div>
      <div id="app-page-title-portal"></div>
    </div>
  );
};

export { Navbar };
