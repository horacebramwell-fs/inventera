import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getDaysLeft } from '../../../utils/date';

export default function ProductionCard({
  title,
  dueDate,
  itemCount,
  id,
  itemUnit,
  handleView,
  handleEdit,
  handleDelete,
}) {
  return (
    <Container className="my-5 p-0">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {itemCount} {itemUnit} total •{' '}
            <span
              className={
                getDaysLeft(dueDate) < 7 ? 'text-danger' : 'text-success'
              }
            >
              Due in {getDaysLeft(dueDate)} days.
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end align-items-center gap-2">
          <Button variant="link" onClick={() => handleView(id)}>
            View
          </Button>
          <Button variant="link" onClick={() => handleEdit(id)}>
            Edit
          </Button>
          <Button variant="link" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

ProductionCard.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  itemUnit: PropTypes.string.isRequired,
  handleView: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
