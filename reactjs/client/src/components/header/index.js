import React from 'react';
import PropTypes from 'prop-types';

export default function PageHeader({ children }) {
  return <header className="mt-5">{children}</header>;
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
