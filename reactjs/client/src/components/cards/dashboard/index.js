import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DashboardCard({ title, itemCount, linkTo }) {
  return (
    <Link to={linkTo}>
      <Container className="text-center bg-secondary text-primary rounded py-5">
        <h3 className="h1">{itemCount}</h3>
        <h4>{title}</h4>
      </Container>
    </Link>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  linkTo: PropTypes.string.isRequired,
};
