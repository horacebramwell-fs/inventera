import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Image, Container, Row, Col } from 'react-bootstrap';
import { MdLogout } from 'react-icons/md';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { logout, reset } from '../../redux/features/auth/authSlice';
import { resetMaterials } from '../../redux/features/material/materialSlice';
import { resetCategories } from '../../redux/features/category/categorySlice';
import { resetSuppliers } from '../../redux/features/supplier/supplierSlice';
import { resetProducts } from '../../redux/features/product/productSlice';
import { resetFormulas } from '../../redux/features/formula/formulaSlice';
import { resetProductions } from '../../redux/features/production/productionSlice';
import { resetUser } from '../../redux/features/user/userSlice';

import styles from './styles.module.css';

export default function User({ userName, avatar }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetMaterials());
    dispatch(resetCategories());
    dispatch(resetSuppliers());
    dispatch(resetProducts());
    dispatch(resetFormulas());
    dispatch(resetProductions());
    dispatch(resetUser());
    navigate('/');
  };

  return (
    <Container className={styles.user}>
      <Row className="align-items-center gap-2">
        <Col className="col-3">
          <Image src={avatar} alt={userName} className="rounded-circle w-100" />
        </Col>
        <Col className="col-8">
          <h3 className="light h5">{userName}</h3>
          <Link className="secondary" to="/" onClick={handleLogout}>
            <MdLogout />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

User.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
