import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormButtons({ handleClose }) {
  return (
    <Container className="d-flex justify-content-end mt-4 mb-2">
      <Row>
        <Col sm={6}>
          <Button type="button" variant="outline-dark" onClick={handleClose}>
            Cancel
          </Button>
        </Col>

        <Col sm={6}>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

/* PROP TYPES */
FormButtons.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
