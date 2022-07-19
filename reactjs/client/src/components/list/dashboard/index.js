import React from 'react';
import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MiniList({ name, stock, unit, minStock }) {
  return (
    <Form>
      <Table responsive className="noWrap">
        <tbody>
          <tr>
            <td>
              {stock < minStock ? (
                <span className="text-danger">{name}</span>
              ) : (
                name
              )}
            </td>
            <td className="d-flex justify-content-end">
              {stock < minStock ? (
                <span className="text-danger">
                  {stock} {unit}
                </span>
              ) : (
                <span>
                  {stock} {unit}
                </span>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
}

MiniList.propTypes = {
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  minStock: PropTypes.number.isRequired,
};
