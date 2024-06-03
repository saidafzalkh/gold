import React from "react";

function OverdueAddPage() {
  return (
    <div style={{ maxWidth: 1160, margin: "0px auto" }}>
      <form>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 30,
            marginBottom: 30,
          }}
        >
          {/* Input field 1 */}
          <div className="col">
            <label
              className="fw-semibold required"
              style={{ fontSize: 16, marginBottom: 10 }}
            >
              ФИО клиента
            </label>
            <input
              name="fullname"
              type="text"
              className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
              placeholder=""
            />
          </div>
          {/* Input field 2 */}
          <div className="col">
            <label
              className="fw-semibold required"
              style={{ fontSize: 16, marginBottom: 10 }}
            >
              Сумма
            </label>
            <input
              name="amount"
              type="number"
              className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
              placeholder=""
            />
          </div>
          {/* Input field 3 */}
          <div className="col" style={{ gridColumn: "span 2" }}>
            <label
              className="fw-semibold required"
              style={{ fontSize: 16, marginBottom: 10 }}
            >
              Результат
            </label>
            <textarea
              name="result"
              className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
              placeholder=""
            />
          </div>

          {/* Input field 4 */}
          <div className="col">
            <label
              className="fw-semibold required"
              style={{ fontSize: 16, marginBottom: 10 }}
            >
              Возвращено, сумма
            </label>
            <input
              name="amount"
              type="number"
              className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
              placeholder=""
            />
          </div>

          {/* Input field 5 */}
          <div className="col">
            <label
              className="fw-semibold required"
              style={{ fontSize: 16, marginBottom: 10 }}
            >
              Статус
            </label>
            <input
              name="amount"
              type="number"
              className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
              placeholder="Выберите статус"
            />
          </div>

          {/* Input field 6 */}
          <div className="col">
            <label
              className="fw-semibold required"
              style={{ fontSize: 16, marginBottom: 10 }}
            >
              Дата выхода на просрочку
            </label>
            <input
              name="amount"
              type="datetime-local"
              className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
              placeholder="Выбрать дату и время"
            />
          </div>
        </div>
        <button className="btn btn-primary">Отправить просрочника</button>
      </form>
    </div>
  );
}

export default OverdueAddPage;
