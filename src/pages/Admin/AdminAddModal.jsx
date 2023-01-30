import React, { useState } from "react";
import "./Admin.css";
import InputCom from "../../ui/InputCom";
import { useSelector } from "react-redux";

import Project from "../../Services/project/Project";

const AdminAddModal = ({ setAdd, GetProjects }) => {
  const { user } = useSelector((state) => state.LoginSlice);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState("");

  const readerFileFunc = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(await file);
    reader.onload = () => {
      setFile(reader.result);
    };
  };

  const handelerFile = async (e) => {
    readerFileFunc(e.target.files[0]);
  };
  const PostProject = async (e) => {
    e.preventDefault();
    if (title && link && file.length) {
      const AllFormData = { title, auth: user._id, img: file, link };
      await Project.POST(user._id, AllFormData);
      GetProjects();
      setAdd(false);
    }
  };

  return (
    <>
      <div className="admin_add">
        <h1 className="text-center text-[#fff] my-2 text-[25px]">
          Add Project
        </h1>
        <form action="" onSubmit={PostProject}>
          <input
            type="file"
            onChange={handelerFile}
            accept=".png, .jpg, .jpeg, .webp"
          />
          <InputCom
            placeholder={"Project Title"}
            value={title}
            setValue={setTitle}
          />
          <InputCom
            placeholder={"Project Link"}
            value={link}
            setValue={setLink}
          />
          <button className="w-[100%] ">Save</button>
        </form>
      </div>
      <div className="admin_blur" onClick={() => setAdd(false)}></div>
    </>
  );
};

export default AdminAddModal;
