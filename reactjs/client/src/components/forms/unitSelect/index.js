import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function UnitSelect({ defaultValue }) {
  const { units } = useSelector((state) => state.unit);

  return (
    <>
      <Form.Select
        name="unitId"
        placeholder="Select Unit Type"
        aria-label="Select unit of measure"
        required
        defaultValue={defaultValue}
      >
        <option value="">Select Unit Type</option>
        {units &&
          units.map((unit) => (
            <option key={unit.id} value={unit.id}>
              {unit.name} ({unit.abbr})
            </option>
          ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please select a unit type.
      </Form.Control.Feedback>
    </>
  );
}

export default UnitSelect;

// PropTypes
UnitSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
