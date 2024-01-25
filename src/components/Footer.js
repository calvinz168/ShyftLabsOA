import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="https://www.linkedin.com/in/zheng-calvin/" target="{_blank}"><h4 className="footerText">Calvin Zheng</h4></Link>
    </footer>
  );
};

export default Footer;