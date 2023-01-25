import React from "react";
import { AiOutlineToTop } from "react-icons/ai";
import "./Topbtn.css";
const Topbtn = ({ btnTop }) => {
  return (
    <a href="#" className={`top_btn ${btnTop ? 'active':""} `} >
      <AiOutlineToTop color="#fff" size={"2rem"} />
    </a>
  );
};

export default Topbtn;
