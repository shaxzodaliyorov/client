import React, { useEffect } from "react";
import { AiFillSetting, AiFillInfoCircle } from "react-icons/ai";
import { SiGooglenews } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { BsTelegram } from "react-icons/bs";
import { useState } from "react";
import InputCom from "../../ui/InputCom";
import "./Profile.css";
import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.LoginSlice);
  const [count, setCount] = useState(1);
  const Tab = [
    {
      icon: <AiFillInfoCircle size={"2rem"} className="cursor-pointer" />,
      id: 1,
    },
    {
      icon: <AiFillSetting size={"2rem"} className="cursor-pointer" />,
      id: 2,
    },
    {
      icon: <SiGooglenews size={"2rem"} className="cursor-pointer" />,
      id: 3,
    },
    {
      icon: <BsTelegram size={"2rem"} className="cursor-pointer" />,
      id: 4,
    },
  ];

  const ToggleTab = (num) => {
    setCount(num);
  };
  return (
    <section>
      <div className="w-[100%] h-[100%] flex justify-between flex-wrap py-[8rem] Profile_item">
        <div
          style={{ width: "100%", padding: "2rem", background: "#4b4b4b" }}
          className="w-[100%] py-4 rounded-[4px] flex justify-between"
        >
          {Tab.map((item, index) => {
            return (
              <div
                key={index}
                style={{ color: item.id === count ? "#00b966" : "#fff" }}
                onClick={() => ToggleTab(item.id)}
              >
                {item.icon}
              </div>
            );
          })}
        </div>
        {count === 1 ? (
          <>
            <div
              style={{
                width: "100%",
                padding: "1rem 0",
                margin: "10px 0",
                borderRadius: "5px",
              }}
              className="w-[100%] py-[2rem] bg-[#4b4b4b]"
            >
              <div className="w-[100%] px-4">
                <CgProfile size={"2rem"} color="#fff" />
                <h1
                  className="text-[#fff]"
                  style={{ fontSize: "22px", margin: "5px 0" }}
                >
                  {user !== null ? user.email : ""}
                </h1>
              </div>
            </div>

            <div
              style={{ width: "49%", borderRadius: "5px" }}
              className="bg-[#4b4b4b] px-4 py-2"
            >
              <p style={{ color: "#00b966" }}>email</p>
              <h1 className="text-[#fff]">{user !== null ? user.email : ""}</h1>
            </div>
            <div
              style={{ width: "49%", borderRadius: "5px" }}
              className="w-[45%] py-[2rem] bg-[#4b4b4b] flex justify-between items-center px-4"
            >
              <div style={{ width: "49%" }}>
                <p style={{ color: "#00b966" }}>Firstname</p>
                <h1 className="text-[#fff]">
                  {user !== null ? user.firstname : ""}
                </h1>
              </div>
              <div style={{ width: "49%" }}>
                <p style={{ color: "#00b966" }}>Lastname</p>
                <h1 className="text-[#fff]">
                  {user !== null ? user.lastname : ""}
                </h1>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {count === 2 ? (
          <>
            <form action="" className="w-[100%] flex justify-between flex-wrap">
              <div className="w-[49%]">
                <InputCom
                  placeholder={"firstname"}
                  defaultValue={user !== null ? user.firstname : ""}
                />
              </div>
              <div className="w-[49%]">
                <InputCom
                  placeholder={"lastname"}
                  defaultValue={user !== null ? user.lastname : ""}
                />
              </div>
              <div className="w-[49%]">
                <InputCom
                  placeholder={"email"}
                  defaultValue={user !== null ? user.email : ""}
                />
              </div>
              <div className="w-[49%]">
                <InputCom
                  type="password"
                  placeholder={"password"}
                  readOnly={true}
                  defaultValue={user !== null ? user.password : ""}
                />
              </div>
              <div className="w-[100%]">
                <button
                  disabled={true}
                  className="w-[100%] py-4 text-[25px] text-[#fff] rounded-[4px]"
                  style={{ background: "#00b966" }}
                >
                  Save
                </button>
              </div>
            </form>
          </>
        ) : (
          ""
        )}
        {count === 3 ? (
          <div className="w-[100%] flex justify-cnter items-center">
            <h1 className="text-[30px] text-center text-[#fff]">Tez Kunda </h1>
          </div>
        ) : (
          ""
        )}
        {count === 4 ? (
          <div className="w-[100%] flex justify-cnter items-center">
            <h1 className="text-[30px] text-center text-[#fff]">Tez Kunda </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Profile;
