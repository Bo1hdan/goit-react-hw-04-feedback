import React from 'react';
import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.sectionDiv}>
    <h1>{title}</h1>
    {children}
  </div>
);

export default Section;
