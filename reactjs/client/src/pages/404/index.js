import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="w-50 d-flex flex-column justify-content-center align-items-center vh-100">
      <Container className="text-center">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/">Go to home page</Link>
      </Container>
    </Container>
  );
}
