// import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from "../../../../helpers";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";

const SidebarMenuMain = () => {
  // const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        icon={
          <span
            className="rounded-circle d-flex justify-content-center align-items-center "
            style={{ width: 48, height: 48, backgroundColor: "#FE0000" }}
          >
            <img src={toAbsoluteUrl("media/svg/sidebar/setting.svg")} width={24} height={24}/>
          </span>
        }
        to="/analytics"
        title="Аналитика"
      />
      <SidebarMenuItem
        icon={<img src={toAbsoluteUrl("media/svg/sidebar/files.svg")} />}
        to="/financial-reports"
        title="Фин. Отчёты"
        className="menu-extra-icon"
      />
      <SidebarMenuItem
        icon={<img src={toAbsoluteUrl("media/svg/sidebar/document.svg")} />}
        to="/overdue-list"
        title="Реестр просрочников"
        className="menu-extra-icon"
      />

      <SidebarMenuItem
        icon={<img src={toAbsoluteUrl("media/svg/sidebar/user.svg")} />}
        to="/profile"
        title="Профиль"
        className="menu-extra-icon"
      />
    </>
  );
};

export { SidebarMenuMain };
