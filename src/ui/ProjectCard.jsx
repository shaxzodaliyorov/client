import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineComment } from "react-icons/ai";
import CommentsModal from "./CommentsModal";
const ProjectCard = ({ to = "/", img, title, id }) => {
  const [CommitShow, setCommitShow] = useState(false);
  const [defaultId, setDefaultId] = useState("");

  const textAnimate = {
    offscreen: { y: 100, opcity: 0 },
    onscreen: {
      y: 0,
      opcity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  const CommitHandeler = (id) => {
    setCommitShow(true);
    setDefaultId(id);
  };

  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="w-[30%] my-4 bg-[#4b4b4b] rounded-[3px] overflow-hidden mx-2 project_card"
      >
        <div className="project_card_img">
          <img
            src={`https://shaxzod-portfolio.onrender.com/uploads/${img}`}
            alt=""
            className="cursor-pointer w-[100%] h-[270px] object-cover"
          />
          <span id="demo">
            <a href={to} target="_blank">
              <FaLink className="cursor-pointer text-[#fff]" size={"3rem"} />
            </a>
          </span>
        </div>
        <div className="w-[100%] flex justify-between items-center px-4 py-2">
          <motion.h2 variants={textAnimate} className="text-[21px] text-[#fff]">
            {title}
          </motion.h2>
        </div>
        <div className="w-[100%] pb-3  px-4 flex justify-between">
          <motion.div variants={textAnimate}>
            <AiOutlineComment
              className="cursor-pointer text-[#fff]"
              size={"1.5rem"}
              onClick={() => CommitHandeler(id)}
            />
          </motion.div>
          <motion.div variants={textAnimate}>
            <a href={to} target="_blank">
              <FaLink className="cursor-pointer" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      {CommitShow ? <CommentsModal setCommitShow={setCommitShow} defaultId={defaultId} /> : ""}
    </>
  );
};

export default ProjectCard;
