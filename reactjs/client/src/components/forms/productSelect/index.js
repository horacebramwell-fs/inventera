import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductSelect({ defaultValue }) {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <Form.Select
        required
        name="productId"
        defaultValue={defaultValue}
        arial-label="Select a product"
      >
        <option value="">Select product</option>
        {products &&
          products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please select a product to make.
      </Form.Control.Feedback>
    </>
  );
}

export default ProductSelect;

// PropTypes
ProductSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
