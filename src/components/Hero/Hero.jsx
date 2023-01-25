import React from "react";
import "./Hero.css";
import ButtonCom from "../../ui/ButtonCom";
import img from "../../images/course-1.svg";
import { motion, Variants } from "framer-motion";
import { left, right } from "../../animation/animation";
import { useSelector } from "react-redux";
const Hero = () => {
  const { logined } = useSelector((state) => state.LoginSlice);
  return (
    <motion.div
      id="#"
      className="w-[100%] h-[100vh] hero"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div
        className="w-[100%] h-[100%] flex justify-between px-[5rem] flex-wrap"
        id="hero_wrap"
      >
        <motion.div
          variants={left}
          className="w-[49%] h-[100%] flex justify-center items-center flex-col left_item"
        >
          <h3 className="text-[6rem] text-[#fff]">SHAXZOD </h3>
          <p className="text-[3rem] text-[#00e77f]">
            MERN Full Stack Developer
          </p>
          {!logined ? (
            <ButtonCom to="/login" title={"Get Started"} className="my-2" />
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          variants={right}
          className="w-[49%] h-[100%] flex justify-center items-center right_item"
        >
          <img src={img} alt="" className="w-[100%]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
