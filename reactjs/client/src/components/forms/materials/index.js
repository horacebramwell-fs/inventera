import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UnitSelect from '../unitSelect';
import CategorySelect from '../categorySelect';
import SupplierSelect from '../supplierSelect';
import FormButtons from '../../buttons/form';

export default function MaterialForm({
  handleClose,
  handleChange,
  handleSubmit,
  formData,
  validated,
}) {
  const [createCat, setCreateCat] = useState(false);
  const [createSup, setCreateSup] = useState(false);

  const handleCreateCat = () => {
    setCreateCat(!createCat);
  };

  const handleCreateSup = () => {
    setCreateSup(!createSup);
  };

  return (
    <Form
      onChange={handleChange}
      onSubmit={handleSubmit}
      validated={validated}
      noValidate
    >
      {/* MATERIAL NAME */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Material Name </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Material Name"
                min="3"
                max="50"
                required
                defaultValue={formData.name}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a material name (3-50 characters).
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>
      {/* CURRENT STOCK & MIN STOCK */}
      <Form.Group>
        <Container fluid>
          <Row className="align-items-center">
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Current Stock Level
              </Form.Label>
              <Form.Control
                name="stock"
                type="number"
                placeholder="Enter Current Stock Level"
                required
                min="0"
                step=".01"
                defaultValue={formData.stock}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a stock level
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Min Stock Level
              </Form.Label>
              <Form.Control
                name="minStock"
                type="number"
                placeholder="Enter Min Stock Level"
                required
                min="0"
                step=".01"
                defaultValue={formData.minStock}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a min stock level
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>
      {/* UNIT COST & UNIT OF MEASUREMENT */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Unit Price</Form.Label>
              <Form.Control
                name="unitCost"
                type="number"
                placeholder="Enter Unit Cost"
                required
                min="0"
                step=".01"
                defaultValue={formData.unitCost}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a unit cost
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Unit Type <span className="text-danger">*</span>
              </Form.Label>
              <UnitSelect name="unit" defaultValue={formData.unitId} />
            </Col>
          </Row>
        </Container>
      </Form.Group>
      {/* CATEGORY & SUPPLIER */}
      <Form.Group className="mt-3">
        <Container fluid>
          <Row>
            <Col sm={6}>
              {!createCat ? (
                <>
                  <CategorySelect
                    name="category"
                    defaultValue={formData.categoryId}
                  />
                  {/* Create new category  */}
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateCat}
                  >
                    Create new category
                  </button>
                </>
              ) : (
                <>
                  <Form.Label className="text-muted h6">Category</Form.Label>
                  <Form.Control
                    name="category"
                    type="text"
                    min="3"
                    max="50"
                    placeholder="Enter Category"
                    required
                    defaultValue={formData.category}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a category. It must be between 3 and 50
                    characters.
                  </Form.Control.Feedback>
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateCat}
                  >
                    Select existing category
                  </button>
                </>
              )}
            </Col>
            {/* Supplier */}
            <Col sm={6}>
              {!createSup ? (
                <>
                  <SupplierSelect
                    name="supplier"
                    defaultValue={formData.supplierId}
                  />
                  {/* Create new supplier  */}
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateSup}
                  >
                    Create new supplier
                  </button>
                </>
              ) : (
                <>
                  <Form.Label className="text-muted h6">Supplier</Form.Label>
                  <Form.Control
                    name="supplier"
                    type="text"
                    min="3"
                    max="50"
                    placeholder="Enter Supplier"
                    required
                    defaultValue={formData.supplier}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a supplier (3-50 characters).
                  </Form.Control.Feedback>
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateSup}
                  >
                    Select existing supplier
                  </button>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Form.Group>
      {/* SKU & LAST ORDER DATE */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">SKU </Form.Label>
              <Form.Control
                name="sku"
                type="text"
                placeholder="Enter SKU"
                defaultValue={formData.sku}
              />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Last Ordered
              </Form.Label>
              <Form.Control
                name="lastOrdered"
                type="date"
                placeholder="Enter Last Ordered"
                defaultValue={formData.lastOrdered}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a last ordered date.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>
      {/* FORM BUTTON COMPONENT */}
      <FormButtons handleClose={handleClose} />
    </Form>
  );
}

/* PROP TYPES */
MaterialForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string,
    stock: PropTypes.any,
    minStock: PropTypes.any,
    unitCost: PropTypes.any,
    unitId: PropTypes.string,
    category: PropTypes.string,
    supplier: PropTypes.string,
    sku: PropTypes.string,
    lastOrdered: PropTypes.string,
    supplierId: PropTypes.string,
    categoryId: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
};
