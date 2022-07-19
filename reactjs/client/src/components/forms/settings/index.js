import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../../redux/features/auth/authSlice';
import {
  updateUserData,
  deleteUserData,
} from '../../../redux/features/user/userSlice';

export default function SettingsForm() {
  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    businessName: '',
    website: '',
  });
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = useSelector((state) => state.auth);
  const { loading, error, success, userData } = useSelector(
    (state) => state.user,
  );

  /* USER DATA */
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        password: '',
        passwordConfirm: '',
        businessName: userData.businessName,
        website: userData.website,
      });
    }
  }, [userData, dispatch]);

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* HANDLE IMAGE UPLOAD */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if password and password confirm match
    if (formData.password !== formData.passwordConfirm) {
      toast.error('Password and password confirm do not match');
      return;
    }

    dispatch(
      updateUserData({
        user: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          businessName: formData.businessName,
          website: formData.website,
          image: imageUrl,
        },
        token: user.token,
      }),
    );

    if (success) {
      toast.success('User updated successfully');
    }

    if (error) {
      toast.error(error.message);
    }
  };

  /* CONFIRM DELETE */
  const confirmDelete = () => {
    handleShow();
  };

  /* HANDLE DELETE */
  const handleDelete = () => {
    dispatch(deleteUserData(user.token));

    if (success) {
      toast.success('User deleted successfully');
      dispatch(logout());
      dispatch(reset());
      navigate('/');
    }

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container fluid className="mb-5">
      <Form onChange={handleChange} onSubmit={handleSubmit} className="w-50">
        {/* User Avatar */}
        <Row className="w-75">
          <Col sm={12} lg={5}>
            <Image
              src={
                imageUrl ||
                (userData && userData.avatarUrl) ||
                'https://via.placeholder.com/150x150'
              }
              roundedCircle
              className="avatar w-100"
            />
          </Col>
          <Col sm={12} lg={7}>
            <Form.Label className="text-muted h6 mt-3">
              Upload a profile picture
            </Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
            <Form.Text className="text-muted">
              Image must be less than 2MB
            </Form.Text>
          </Col>
        </Row>
        {/* Name  */}
        <Row className="mt-5">
          <Col>
            <Form.Label className="text-muted h6">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={formData.name}
              required
            />
          </Col>
        </Row>
        {/* Email */}
        <Row className="mt-3">
          <Col>
            <Form.Label className="text-muted h6">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={formData.email}
              required
            />
          </Col>
        </Row>
        {/* Business Name & Website */}
        <Row className="mt-3">
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Business Name</Form.Label>
            <Form.Control
              type="text"
              name="businessName"
              placeholder="Business Name"
              defaultValue={formData.businessName}
            />
          </Col>
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              placeholder="Website"
              defaultValue={formData.website}
            />
          </Col>
        </Row>
        {/* Password */}
        <Row className="mt-3">
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Change Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={formData.password}
            />
          </Col>
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              defaultValue={formData.passwordConfirm}
            />
          </Col>
        </Row>
        {/* Submit Button  & Delete Button */}
        <Row className="mt-5 gap-2 w-75">
          <Col md={12} xl={2} lg={2}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Col>
          <Col md={12} xl={9} lg={10}>
            <Button variant="danger" type="button" onClick={confirmDelete}>
              Delete Account
            </Button>
          </Col>
        </Row>
        {/* Loading Spinner */}
        {loading && (
          <Row className="mt-5">
            <Col>
              <Spinner animation="border" variant="primary" />
            </Col>
          </Row>
        )}
        {/* MODAL TO CONFIRM ACCOUNT DELETTION */}
        <Modal show={show} onHide={handleClose} size="md" border="danger">
          <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Are you sure you want to delete your account?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </Container>
  );
}
