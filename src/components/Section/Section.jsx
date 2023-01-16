import React from 'react';
import PropTypes from 'prop-types';
import scss from './Section.module.scss';

function Section({ title, children }) {
  return (
    <section className={scss.section}>
      {title && <h2 className={scss.title}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
