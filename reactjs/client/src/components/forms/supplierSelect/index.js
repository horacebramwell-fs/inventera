import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SupplierSelect({ defaultValue }) {
  const { suppliers } = useSelector((state) => state.supplier);

  return (
    <>
      {/* Select form */}
      <Form.Label className="text-muted h6">Supplier</Form.Label>
      <Form.Select name="supplierId" defaultValue={defaultValue} required>
        <option value="">Select Supplier</option>
        {suppliers &&
          suppliers.map((supplier) => (
            // if defaultValue is the same as the supplierId, then it will be selected
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please select a supplier.
      </Form.Control.Feedback>
    </>
  );
}

SupplierSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
