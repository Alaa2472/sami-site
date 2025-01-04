import React from "react";
import "../App.css"; // انقل تنسيق الهيرو سيكشن هنا
const HeroSection = ({ title, content }) => {
  return (
    <section className="hero heroright">
      <h2>{title}</h2>
      <h3>{content}</h3>
    </section>
  );
};

export default HeroSection;
