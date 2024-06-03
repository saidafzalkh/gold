import { getCSSVariableValue } from "../../../_metronic/assets/ts/_utils";
import { toAbsoluteUrl } from "../../../_metronic/helpers";

const ProfilePage = () => (
  <>
    <div
      className="w-100 position-absolute top-0 d-none d-sm-block"
      style={{
        height: 70,
        backgroundColor: getCSSVariableValue(
          "--bs-app-header-minimize-bg-color"
        ),
        left: 0,
      }}
    />
    <div
      className="card mb-5 mb-xl-10 accordion-collapse mx-auto"
      style={{ maxWidth: 1160, transform: "translateY(-30px)" }}
    >
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_details"
        aria-expanded="true"
        aria-controls="kt_account_profile_details"
      >
        <div className="card-title m-0">
          <h3 className="fw-bold m-0">Настройки профиля</h3>
        </div>
      </div>

      {/* begin::Form */}
      <form className="form d-flex flex-center ">
        <div className="card-body  card-body border-top p-9">
          {/* Avatar */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              Аватар
            </label>

            <div className="col-lg-8">
              <div
                className="image-input image-input-outline"
                data-kt-image-input="true"
              >
                <img
                  className="image-input-wrapper w-125px h-125px"
                  src={toAbsoluteUrl("media/avatars/300-1.jpg")}
                  alt="profile-image"
                />

                <label
                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="Change avatar"
                >
                  <i className="ki-duotone ki-pencil fs-4">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="avatar_remove" />
                </label>
                <span
                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="cancel"
                  data-bs-toggle="tooltip"
                  title="Cancel avatar"
                >
                  <i className="ki-duotone ki-cross fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </span>
                <span
                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  title="Remove avatar"
                >
                  <i className="ki-duotone ki-cross fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </span>
              </div>
              <div className="form-text">
                Доступные расширения: png, jpg, jpeg.
              </div>
            </div>
          </div>
          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">
              Полное имя
            </label>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 fv-row">
                  <input
                    type="text"
                    name="fname"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Алихан"
                  />
                </div>
                <div className="col-lg-6 fv-row">
                  <input
                    type="text"
                    name="lname"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Батырханов"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">
              Филиал/регион
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="text"
                name="school"
                className="form-control form-control-lg form-control-solid"
                placeholder="г. Актау, Филиал №15"
              />
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Должность</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="Occupation tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <select
                name="cities"
                aria-label="Select a city"
                data-control="select2"
                data-placeholder="Select a city..."
                className="form-select form-select-solid form-select-lg fw-semibold"
              >
                <option value="almaty">Генеральный директор</option>
                <option value="kostanay">Админ</option>
                <option value="shym">Дректор филиала</option>
              </select>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Телефон</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="Phone tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="tel"
                name="phone"
                className="form-control form-control-lg form-control-solid"
                placeholder="+7 777 777 7777"
              />
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Почта</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="Email tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="email"
                name="school"
                className="form-control form-control-lg form-control-solid"
                placeholder="a.batyrkhanov@gmail.com"
              />
            </div>
          </div>

          {/* end::Form row */}

          <div className="separator separator-solid my-10"></div>

          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Старый пароль</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="Old password tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="password"
                className="form-control form-control-lg form-control-solid"
              />
            </div>
          </div>

          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Новый пароль</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="New password tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="password"
                className="form-control form-control-lg form-control-solid"
              />
            </div>
          </div>

          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Подтвердите пароль</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="Confirmed password tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="password"
                className="form-control form-control-lg form-control-solid"
              />
            </div>
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button className="btn btn-light btn-active-light-primary text-muted me-2">
              Отменить
            </button>
            <button className="btn btn-warning">Сохранить изменения</button>
          </div>
        </div>
      </form>
      {/* end::Form */}
    </div>
  </>
);

export default ProfilePage;
