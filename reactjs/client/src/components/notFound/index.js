import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function NonFound({ title, message }) {
  return (
    <Container className="vh-100 text-center">
      <Row className="h-75 d-flex justify-content-center align-items-center">
        <Col>
          <h5>{title}</h5>
          <p>{message}</p>
        </Col>
      </Row>
    </Container>
  );
}

/* PROP TYPES */
NonFound.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
