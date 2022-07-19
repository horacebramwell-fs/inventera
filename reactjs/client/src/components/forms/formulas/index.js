import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UnitSelect from '../unitSelect';

export default function FormulaForm({
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
      {/* FORMULA NAME */}
      <Form.Group>
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">
                Formula Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="name"
                min="3"
                max="50"
                type="text"
                placeholder="Formula Name"
                defaultValue={formData.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a formula name.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* CONTAINER SIZE & MAX FILL */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Container Size <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="containerSize"
                type="number"
                step=".01"
                min="0"
                placeholder="Enter container size"
                defaultValue={formData.containerSize}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide container size
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Max Fill <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="containerFill"
                type="number"
                step=".01"
                placeholder="Enter container max fill"
                defaultValue={formData.containerFill}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter container max fill
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* FRAGRANCE LOAD & UNIT SELECT */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Fragrance Load (%) <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="fragranceLoad"
                type="number"
                step=".01"
                min="0"
                placeholder="Enter fragrance load percentage"
                defaultValue={formData.fragranceLoad}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide fragrance load
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Unit <span className="text-danger">*</span>
              </Form.Label>
              <UnitSelect defaultValue={formData.unitId} />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* NOTE */}
      <Form.Group className="mt-1">
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Note</Form.Label>
              <Form.Control as="textarea" rows="3" name="note" maxLength="50" />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* BUTTONS */}
      <Container className="d-flex justify-content-end mt-4 mb-2">
        <Row>
          <Col sm={6}>
            <Button type="button" variant="outline-dark" onClick={handleClose}>
              Cancel
            </Button>
          </Col>

          <Col sm={6}>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

/* PROP TYPES */
FormulaForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
};
