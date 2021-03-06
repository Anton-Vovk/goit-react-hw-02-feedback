import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
