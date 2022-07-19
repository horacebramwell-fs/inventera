import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductSelect from '../productSelect';
import StatusSelect from '../statusSelect';
import UnitSelect from '../unitSelect';
import FormButton from '../../buttons/form';

export default function ProductionForm({
  handleChange,
  handleSubmit,
  handleClose,
  validated,
  formData,
}) {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      {/* PRODUCTION NAME */}
      <Form.Group>
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">
                Production Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                min="3"
                max="50"
                placeholder="Production Name"
                defaultValue={formData.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a production name. It must be between 3 and 50
                characters.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* PRODUCT SELECT & QUANTITY */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Product <span className="text-danger">*</span>
              </Form.Label>
              <ProductSelect defaultValue={formData.productId} />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Quantity <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="quantity"
                type="number"
                step=".01"
                min="0"
                defaultValue={formData.quantity}
                placeholder="Enter product quantity"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter product quantity. It must be a number.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* UNIT SELECT & STATUS */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Unit Type <span className="text-danger">*</span>
              </Form.Label>
              <UnitSelect defaultValue={formData.unitId} />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Status <span className="text-danger">*</span>
              </Form.Label>
              <StatusSelect defaultValue={formData.status.toString()} />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* DUE DATE */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={12}>
              <Form.Label className="text-muted h6">
                Due Date <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="dueDate"
                min={new Date().toISOString().split('T')[0]}
                type="date"
                placeholder="Select dute date"
                defaultValue={formData.dueDate}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please select a due date.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* NOTES */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Notes</Form.Label>
              <Form.Control
                name="notes"
                as="textarea"
                max="150"
                rows="3"
                placeholder="Enter notes"
                defaultValue={formData.notes}
              />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* SUBMIT & CANCEL BUTTONS */}
      <FormButton handleClose={handleClose} />
    </Form>
  );
}

/* PROP TYPES */
ProductionForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
};
