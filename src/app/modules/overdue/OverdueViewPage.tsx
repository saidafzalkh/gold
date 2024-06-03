import React from "react";

function OverdueViewPage() {
  return (
    <div
      className="mx-auto"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 30,
        marginBottom: 30,
        maxWidth: 1160,
      }}
    >
      {/* Input field 1 */}
      <div className="col">
        <label
          className="fw-semibold required"
          style={{ fontSize: 18, marginBottom: 2, color: "#3F4254" }}
        >
          ФИО клиента
        </label>
        <b style={{ fontSize: 18 }} className="fw-semibold d-block">
          Lorem Ipsum
        </b>
      </div>
      {/* Input field 2 */}
      <div className="col">
        <label
          className="fw-semibold required"
          style={{ fontSize: 18, marginBottom: 2, color: "#3F4254" }}
        >
          Сумма
        </label>
        <b style={{ fontSize: 18 }} className="fw-semibold d-block">
          Lorem Ipsum
        </b>
      </div>

      {/* Input field 3 */}
      <div className="col" style={{ gridColumn: "span 2" }}>
        <label
          className="fw-semibold required"
          style={{ fontSize: 18, marginBottom: 2, color: "#3F4254" }}
        >
          Результат
        </label>
        <b style={{ fontSize: 18 }} className="fw-semibold d-block">
          Lorem Ipsum
        </b>
      </div>

      {/* Input field 4 */}
      <div className="col">
        <label
          className="fw-semibold required"
          style={{ fontSize: 18, marginBottom: 2, color: "#3F4254" }}
        >
          Возвращено, сумма
        </label>
        <b style={{ fontSize: 18 }} className="fw-semibold d-block">
          Lorem Ipsum
        </b>
      </div>

      {/* Input field 4 */}
      <div className="col">
        <label
          className="fw-semibold required"
          style={{ fontSize: 18, marginBottom: 2, color: "#3F4254" }}
        >
          Статус
        </label>
        <b style={{ fontSize: 18 }} className="fw-semibold d-block">
          Lorem Ipsum
        </b>
      </div>

      {/* Input field 4 */}
      <div className="col" style={{ gridColumn: "span 2" }}>
        <label
          className="fw-semibold required"
          style={{ fontSize: 18, marginBottom: 2, color: "#3F4254" }}
        >
          Дата выхода на просрочку
        </label>
        <b style={{ fontSize: 18 }} className="fw-semibold d-block">
          Lorem Ipsum
        </b>
      </div>
    </div>
  );
}

export default OverdueViewPage;
