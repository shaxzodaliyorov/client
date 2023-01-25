import img from "../../images/homg-img.svg";
import ButtonCom from "../../ui/ButtonCom";
import "./About.css";
import { motion, Variants } from "framer-motion";
import { left, right,text } from "../../animation/animation";
const About = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-[100%] py-[4rem] items-center"
    >
      <h1  variants={text} className="text-[35px] text-[#fff] text-center my-5">About</h1>
      <div
        className="w-[100%] h-[100%] flex justify-between items-center flex-wrap"
        id="about_content"
      >
        <motion.div variants={left} className="w-[49%] h-[100%] flex justify-center items-center left_about">
          <img src={img} alt="" className="w-[100%]" />
        </motion.div>
        <motion.div variants={right} className="w-[49%] h-[100%] flex justify-center items-center flex-col right_about">
          <h1 className="text-center text-[3rem] text-[#fff]">
            Why Choose Us?
          </h1>
          <p className="text-center my-6 text-[#fff]">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Cumque
            Quibusdam Magni Error, Aut Enim Rerum?
          </p>
          <ButtonCom title="Download" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
