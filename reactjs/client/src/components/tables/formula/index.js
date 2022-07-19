import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NotFound from '../../notFound';

export default function FormulaTable({ handleSelect }) {
  const { formulas, loading } = useSelector((state) => state.formula);

  return (
    <>
      <Table responsive className="nowrap">
        <thead>
          <tr>
            <th>Name</th>
            <th>Container Fill</th>
            <th>Fragrance Load</th>
            <th>Wax Weight</th>
            <th> Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* List formulas if found */}
          {formulas && Object.keys(formulas).length > 0 && (
            <>
              {formulas.map((formula) => (
                <tr key={formula.id}>
                  <td>
                    <Form.Check type="checkbox">
                      <Form.Check.Input
                        onChange={(e) => handleSelect(e, formula.id)}
                      />
                      <Form.Check.Label> {formula.name} </Form.Check.Label>
                    </Form.Check>
                  </td>
                  <td> {formula.containerFill} oz </td>
                  <td> {Number(formula.fragranceAmount).toFixed(2)} oz </td>
                  <td> {Number(formula.waxAmount).toFixed(2)} oz </td>
                  <td> {formula.note} </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
      {loading && formulas && <Spinner animation="border" variant="primary" />}

      {Object.keys(formulas).length === 0 && (
        <NotFound
          title="No formulas found!"
          message="You have not created any formulas yet. Click the button above to create a new formula."
        />
      )}
    </>
  );
}

/* PROP TYPES */
FormulaTable.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};
