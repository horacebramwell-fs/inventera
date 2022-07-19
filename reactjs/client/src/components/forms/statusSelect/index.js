import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function StatusSelect({ defaultValue }) {
  const { boards } = useSelector((state) => state.board);

  return (
    <>
      <Form.Select
        required
        name="productionBoardId"
        defaultValue={defaultValue}
        arial-label="Select a status"
      >
        <option value="">Select status</option>
        {boards &&
          boards.map((board) => (
            <option key={board.id} value={board.status}>
              {board.name}
            </option>
          ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please select a status.
      </Form.Control.Feedback>
    </>
  );
}

/* PROP TYPES */
StatusSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
