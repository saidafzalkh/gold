import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";
import { ExpenseTypeOptions } from "../../../constants/common";

interface AddExpenseModal extends ModalProps {
  expense?: {
    id: number;
    sum: number;
    description?: string;
    type?: string;
  } | null;
  onSave: (id: number | null, expense: AddExpenseFormType) => void;
  onRemove: (id: number) => void;
}

export type AddExpenseFormType = {
  sum: number;
  description?: string;
  type?: string;
};
function AddExpenseModal(props: AddExpenseModal) {
  const isEditing = !!props.expense;
  const modalTitle = isEditing
    ? "Редактирование расхоода"
    : "Добавление расхода";
  const [formState, setFormState] = useState({
    sum: 0,
    description: "",
    type: "",
  });

  const setFormField = <T extends keyof AddExpenseFormType>(
    field: T,
    value: AddExpenseFormType[T]
  ) => {
    setFormState((cur) => ({
      ...cur,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (props.show && props.expense) {
      setFormState({
        sum: props.expense.sum,
        description: props.expense.description as any,
        type: props.expense.type as any,
      });
    } else if (!props.show) {
      setFormState({
        sum: 0,
        description: "",
        type: "",
      });
    }
  }, [props.expense, props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ marginBottom: 20 }}>
          <label
            className="fw-semibold required"
            style={{ fontSize: 16, marginBottom: 10 }}
          >
            Сумма
          </label>
          <input
            type="number"
            onChange={(e) => setFormField("sum", +e.target.value)}
            value={formState.sum}
            className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
            placeholder="Введите сумму"
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label
            className="fw-semibold"
            style={{ fontSize: 16, marginBottom: 10 }}
          >
            Описание
          </label>
          <input
            type="text"
            onChange={(e) => setFormField("description", e.target.value)}
            value={formState.description}
            className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
            placeholder="Введите описание"
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label
            className="fw-semibold"
            style={{ fontSize: 16, marginBottom: 10 }}
          >
            Тип
          </label>
          <select
            className="form-select form-select-solid form-select-lg"
            name="expense-type"
            value={formState.type}
            onChange={(e) => setFormField("type", e.target.value)}
          >
            <option value="">Выберите тип расхода</option>
            {ExpenseTypeOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {isEditing && (
          <Button
            onClick={() => props.onRemove((props.expense as any).id)}
            variant="outline-secondary"
            className="me-auto"
          >
            Удалить
          </Button>
        )}
        <Button onClick={props.onHide} variant="outline-secondary">
          Отменить
        </Button>
        <Button
          onClick={() =>
            props.onSave(
              isEditing ? (props.expense as any).id : null,
              formState
            )
          }
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddExpenseModal;
