import React from "react";
import "../App.css"; // انقل تنسيق الفوتر هنا
import FeedbackForm from "./form";
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 جميع الحقوق محفوظة لمنصة نَفْس</p>
      <FeedbackForm/>
    </footer>
  );
};
  
export default Footer;