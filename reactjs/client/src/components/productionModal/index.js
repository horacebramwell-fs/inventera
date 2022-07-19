import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getDaysLeft } from '../../utils/date';
import { setStatusText } from '../../utils/status';

export default function ProductionModal({ show, handleClose }) {
  const { production } = useSelector((state) => state.production);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {production && production.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {production && (
          <>
            {/* DUE DATE */}
            <p className="d-flex justify-content-start gap-2 align-items-center primary">
              <strong>Due Date: </strong>
              <span
                className={
                  getDaysLeft(production.dueDate) < 7 ? 'text-danger' : ''
                }
              >
                {new Date(production.dueDate).toLocaleDateString()}
              </span>
            </p>
            {/* PRODUCT NAME */}
            <p className="d-flex justify-content-start gap-2 align-items-center primary">
              <strong>Product: </strong>
              {production.product && production.product.name}
            </p>
            {/* QUANTITY */}
            <p className="d-flex justify-content-start gap-2 align-items-center primary">
              <strong>Quantity: </strong> {production.quantity}
              <span className="text-muted">
                <small>({production.unit && production.unit.abbr})</small>
              </span>
            </p>
            {/* STATUS */}
            <p className="d-flex justify-content-start gap-2 align-items-center primary">
              <strong>Status: </strong>
              <span
                className={`text-light badge badge-${
                  production && production.status === 0
                    ? 'incomplete'
                    : production.status === 1
                    ? 'progress'
                    : production.status === 2
                    ? 'complete'
                    : ''
                }`}
              >
                {setStatusText(production.status)}
              </span>
            </p>
            {/* NOTES */}
            <p className="d-flex justify-content-start align-items-center gap-2 primary">
              <strong>Notes: </strong>{' '}
              <span className="font-italic">
                {production && production.notes && production.notes}
              </span>
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

/* PROP TYPES */
ProductionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
