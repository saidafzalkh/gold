import { KTIcon, toAbsoluteUrl } from "../../../helpers";

const SidebarFooter = () => {
  return (
    <div
      className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6 position-relative "
      id="kt_app_sidebar_footer"
    >
      <button
        className="btn btn-light rounded-5 mt-auto d-flex justify-content-center align-items-center position-absolute "
        style={{ height: 58, width: 58, left: 41, bottom: 30, borderRadius: 22, backgroundColor: "#F1F1F2" }}
      >
        <img src={toAbsoluteUrl("media/svg/sidebar/exit-right.svg")} />
      </button>
    </div>
  );
};

export { SidebarFooter };
