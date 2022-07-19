import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import styles from './styles.module.css';

export default function HelpButton({ onClick, children }) {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      aria-label="Help & Support Button"
    >
      <BsFillQuestionCircleFill className={styles.icon} />
      <span className={styles.helpText}>{children}</span>
    </Button>
  );
}

HelpButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
