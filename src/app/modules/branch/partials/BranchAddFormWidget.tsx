import React from "react";
import { CandleChart1Data } from "../../../constants/chart";

function BranchAddFormWidget() {
  return (
    <div
      className="card mb-5 mb-xl-10 accordion-collapse mx-auto"
      style={{
        maxWidth: 1160,
        transform: "translateY(-30px)",
        borderRadius: 12,
      }}
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
          <h3 className="fw-bold m-0">Добавить филиал</h3>
        </div>
      </div>

      {/* begin::Form */}
      <form className="form d-flex flex-center ">
        <div className="card-body  card-body border-top p-9">
          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">
              Название филиала
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                name="fname"
                className="form-control form-control-lg form-control-solid"
                placeholder="№15"
              />
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">
              Регион
            </label>
            <div className="col-lg-8 fv-row">
              <select
                name="cities"
                aria-label="Select a city"
                data-control="select2"
                data-placeholder="Выберите регион"
                className="form-select form-select-solid form-select-lg fw-semibold"
              >
                <option value="">Выберите регион</option>
                {Object.keys(CandleChart1Data).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Город</span>
            </label>
            <div className="col-lg-8 fv-row">
              <select
                name="cities"
                aria-label="Select a city"
                data-control="select2"
                data-placeholder="Выберите город"
                className="form-select form-select-solid form-select-lg fw-semibold"
              >
                <option value="">Выберите город</option>
                {Object.keys(CandleChart1Data).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Директор</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="CEO tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <select
                name="cities"
                aria-label="Select a city"
                data-control="select2"
                data-placeholder="Выберите пользователя"
                className="form-select form-select-solid form-select-lg fw-semibold"
              >
                <option value="">Выберите пользователя</option>
              </select>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Адрес</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-4"
                data-bs-toggle="tooltip"
                title="Address tooltip"
              ></i>
            </label>
            <div className="col-lg-8 fv-row">
              <input
                type="text"
                name="school"
                className="form-control form-control-lg form-control-solid"
                placeholder="Введите адрес филиала"
              />
            </div>
          </div>

          {/* end::Form row */}

          <div className="separator separator-solid my-10"></div>

          <h3>KPI Филиала - План</h3>
          <div className="row mb-6">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-semibold fs-6 ">
                  <span className="required">За день</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="number"
                    name="school"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="50 000 ₸"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-semibold fs-6 text-end">
                  <span className="required">За месяц</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="number"
                    name="school"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="50 000 ₸"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-semibold fs-6 text-end">
                  <span className="required">За год</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="number"
                    name="school"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="50 000 ₸"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3>KPI Филиала - Факт</h3>
          <div className="row mb-6">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                  <span className="required">За день</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="number"
                    name="school"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="50 000 ₸"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-semibold fs-6 text-end">
                  <span className="required">За месяц</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="number"
                    name="school"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="50 000 ₸"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-semibold fs-6 text-end">
                  <span className="required">За год</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="number"
                    name="school"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="50 000 ₸"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button className="btn btn-light btn-active-light-primary text-muted me-2">
              Отменить
            </button>
            <button className="btn btn-outline border-danger text-danger border-1 me-2">
              Удалить
            </button>
            <button className="btn btn-warning">Сохранить изменения</button>
          </div>
        </div>
      </form>
      {/* end::Form */}
    </div>
  );
}

export default BranchAddFormWidget;
