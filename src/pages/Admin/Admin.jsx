import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import img from "../../images/project.jpg";
import AdminAddModal from "./AdminAddModal";
import "./Admin.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Project from "../../Services/project/Project";
const Admin = () => {
  const [add, setAdd] = useState(false);
  const [projects, setprojects] = useState([]);
  const { user } = useSelector((state) => state.LoginSlice);
  const GetProjects = async () => {
    const data = await Project.GET();
    setprojects(data);
  };
  const DeletePosts = async (id) => {
    await Project.DELETE(user._id, id);
    GetProjects();
  };
  useEffect(() => {
    GetProjects();
  }, []);
  return (
    <>
      <section>
        <div className="w-[100%] h-[100%] py-[4rem] admin_content">
          <h1 className="text-center text-[#fff] my-[2rem] text-[30px] ">
            My Projects
          </h1>
          <div className="w-[100%] py-4 px-2 items-center flex justify-end ">
            <button
              className="px-4 py-2 text-[#fff]"
              style={{ background: "#00b966" }}
              onClick={() => setAdd(true)}
            >
              Add
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left bg-[#4b4b4b] text-[#fff] dark:text-[#fff]">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Link
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col" className="px-6 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {item.title}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        <a
                          style={{ color: "blue" }}
                          href={`${item.link}`}
                          target={"_blank"}
                        >
                          {item.link}
                        </a>
                      </td>
                      <td scope="col" className="px-6 py-3">
                        <img
                          src={item.img}
                          alt=""
                          className="w-[40px] h-[40px] object-cover"
                        />
                      </td>
                      <td scope="col" className="px-6 py-3">
                        <AiFillEdit
                          size={"1.8rem"}
                          color="#fff"
                          className="cursor-pointer"
                        />
                      </td>
                      <td scope="col" className="px-6 py-3">
                        <AiFillDelete
                          size={"1.8rem"}
                          color="red"
                          className="cursor-pointer"
                          onClick={() => DeletePosts(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <h1 className="text-center text-[#fff] my-[2rem] text-[30px] ">
            Users
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left bg-[#4b4b4b] text-[#fff] dark:text-[#fff]">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col" className="px-6 py-3">
                    1
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Title
                  </td>
                  <td scope="col" className="px-6 py-3">
                    <img
                      src={img}
                      alt=""
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </td>
                  <td scope="col" className="px-6 py-3">
                    edit
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Delete
                  </td>
                </tr>
                <tr>
                  <td scope="col" className="px-6 py-3">
                    2
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Title
                  </td>
                  <td scope="col" className="px-6 py-3">
                    <img
                      src={img}
                      alt=""
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </td>
                  <td scope="col" className="px-6 py-3">
                    edit
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Delete
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {add ? <AdminAddModal setAdd={setAdd} GetProjects={GetProjects} /> : ""}
    </>
  );
};

export default Admin;
