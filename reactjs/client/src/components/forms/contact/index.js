import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormButtons from '../../buttons/form';

export default function Contact({ validated, handleSubmit, handleClose }) {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="text-muted h6 mt-3">Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" required />
        <Form.Control.Feedback type="invalid">
          Please enter a name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-muted h6 mt-3">Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-muted h6 mt-3">Message </Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Enter message"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a message.
        </Form.Control.Feedback>
      </Form.Group>

      <FormButtons handleClose={handleClose} />
    </Form>
  );
}

Contact.propTypes = {
  validated: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
