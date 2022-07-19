import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';

export default function PrimaryButton({ children, onClick }) {
  return (
    <Button onClick={onClick} className={styles.primaryBtn}>
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
