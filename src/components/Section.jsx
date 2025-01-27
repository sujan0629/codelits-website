import React from "react";

const Section = ({ title, linkText, className }) => {
  return (
    <section className={className}>
      <h1 className="hover-effect">{title}</h1>
      <a href="#" className="hover-effect">
        {linkText}
      </a>
    </section>
  );
};

export default Section;
