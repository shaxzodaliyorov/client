import React from "react";
import { Link } from "react-router-dom";
import "./ui.css";
const ButtonCom = ({ title, className, to = "/", onClick }) => {
  return (
    <Link to={`${to}`} className={`default-btn ${className}`} onClick={onClick}>
      {title}
    </Link>
  );
};

export default ButtonCom;
