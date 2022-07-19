import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../../../redux/features/auth/authSlice';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    businessName: '',
    website: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success('Registration successful. Please login.');
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      businessName: formData.businessName,
      website: formData.website,
    };

    dispatch(register(userData));
  };

  return (
    <>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                defaultValue={formData.email}
                required
              />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={formData.password}
                required
              />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                name="name"
                defaultValue={formData.name}
                required
              />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">
                Business name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Business name"
                name="businessName"
                defaultValue={formData.businessName}
              />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Website </Form.Label>
              <Form.Control
                type="text"
                placeholder="Website"
                name="website"
                defaultValue={formData.website}
              />
            </Col>
          </Row>
        </Container>

        <Container fluid className="mt-3">
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Container>
      </Form>

      <Container className="d-flex gap-1 mt-3 justify-content-center">
        <p>Already have an account? • </p>
        <Link to="/">Login</Link>
      </Container>

      {isLoading && (
        <span className="w-100 d-flex align-items-center justify-content-center mt-3">
          <Spinner animation="border" variant="primary" />
        </span>
      )}
    </>
  );
}
