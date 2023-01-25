import img from "../../images/contact-img.svg";
import InputCom from "../../ui/InputCom";
import { motion } from "framer-motion";
import { text, left, right } from "../../animation/animation";
import "./Contact.css";
const Contact = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <h1
        variants={text}
        className="text-center text-[35px] text-[#fff] my-10"
      >
        Contact
      </h1>
      <div className="w-[100%] h-[100%] flex flex-wrap justify-between px-4 Contact_content">
        <motion.div
          variants={left}
          className="w-[49%] pt-6 h-[100%] flex justify-center items-center Contact_left"
        >
          <form action="" className="w-[100%] h-[100%]">
            <span className="text-[#fff]">Your Name</span>
            <InputCom placeholder="Enter Your Name" />
            <span className="text-[#fff]">Your Email</span>
            <InputCom placeholder="Enter Your Email " />
            <span className="text-[#fff]"> Your Number</span>
            <InputCom placeholder="Enter Your Number" />
            <span className="text-[#fff]">Your Project Link</span>
            <InputCom placeholder="Enter Your Project Link" />
            <button className="w-[100%] py-[1rem] outline-none my-4 bg-[#00d073] rounded-[4px]">
              Submit
            </button>
          </form>
        </motion.div>
        <motion.div
          className="w-[49%] h-[100%] flex justify-center items-center Contact_right"
          variants={right}
        >
          <img src={img} alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
