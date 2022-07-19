import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NotFound from '../../notFound';

export default function ProductTable({ handleSelect }) {
  const [colors] = useState(['red', 'blue', 'green', 'yellow']);

  const { products, loading } = useSelector((state) => state.product);

  return (
    <>
      <Table responsive className="nowrap">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Min. Stock</th>
            <th>Unit Cost</th>
            <th>SKU</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {/* List Products if found */}
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <Form.Check type="checkbox">
                    <Form.Check.Input
                      onChange={(e) => handleSelect(e, product.id)}
                    />
                    <Form.Check.Label>
                      <span
                        className={
                          Number(product.stock) < Number(product.minStock)
                            ? 'text-danger'
                            : ''
                        }
                      >
                        {product.name}
                      </span>
                    </Form.Check.Label>
                  </Form.Check>
                </td>
                <td>
                  <span
                    className={
                      Number(product.stock) < Number(product.minStock)
                        ? 'text-danger'
                        : ''
                    }
                  >
                    {product.stock}
                    {product.unit && product.unit.name && (
                      <span> {product.unit.abbr}</span>
                    )}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      Number(product.stock) < Number(product.minStock)
                        ? 'text-danger'
                        : ''
                    }
                  >
                    {product.minStock}
                    {product.unit && product.unit.name && (
                      <span> {product.unit.abbr}</span>
                    )}
                  </span>
                </td>

                <td>$ {Number(product.unitCost).toFixed(2)}</td>

                <td>{product.sku}</td>
                <td>
                  {product.category && product.category.name && (
                    <span
                      className={`badge badge-${
                        product.category.name.length === 4
                          ? colors[0]
                          : product.category.name.length === 5
                          ? colors[1]
                          : product.category.name.length === 6
                          ? colors[2]
                          : product.category.name.length >= 7
                          ? colors[3]
                          : 'secondary'
                      }`}
                    >
                      {product.category.name}
                    </span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {loading && <Spinner animation="border" variant="primary" />}

      {/* If no products are found */}
      {Object.keys(products).length === 0 && (
        <NotFound
          title="No Products Found!"
          message="You have not added any products yet. Please add a product to continue."
        />
      )}
    </>
  );
}

/* PROP TYPES */
ProductTable.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};
