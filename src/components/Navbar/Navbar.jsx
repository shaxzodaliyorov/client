import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonCom from "../../ui/ButtonCom";
import { CgProfile } from "react-icons/cg";
import { useSelector} from "react-redux";
import "./Navbar.css";

import ProfileModal from "../../ui/ProfileModal";
const Navbar = () => {
  const [active, setActive] = useState(false);
  
  const [show, setShow] = useState(false);
  const { logined, user } = useSelector((state) => state.LoginSlice);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/project",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header
      className={`navbar-responsive w-[100%] h-[10vh] bg-[#4b4b4b] px-[5rem] flex justify-between items-center `}
    >
      <div style={{ zIndex: "100" }}>
        <Link to="/">
          <h1 className="text-[30px]">$HAх3OD</h1>
        </Link>
      </div>
      <div
        className="burger w-[30px] h-[30px] cursor-pointer"
        onClick={() => setActive((prev) => !prev)}
      >
        <div className="w[100%] h-[3px] bg-[#fff] mt-[6px] rounded-[2px]"></div>
        <div className="w[100%] h-[3px] bg-[#fff] mt-[6px] rounded-[2px]"></div>
        <div className="w[100%] h-[3px] bg-[#fff] mt-[6px] rounded-[2px]"></div>
      </div>
      <ul
        className={`flex w-[38%] h-[100%] justify-between items-center links ${
          active ? "active" : ""
        }`}
      >
        {links.map(({ title, path }) => (
          <li key={path}>
            <Link to={path} onClick={() => setActive(false)}>
              {title}
            </Link>
          </li>
        ))}
        {logined ? (
          <div
            className="flex justify-between items-center"
            style={{ position: "relative" }}
            onClick={()=>setShow(!show)}
          > 

            <CgProfile
              size={"2rem"}
              color="#fff"
              className="cursor-pointer mx-2"
            />
            {show ? <ProfileModal setActive={setActive} /> : ""}
          </div>
        ) : (
          <>
            <li>
              <ButtonCom
                title={"Sing-In"}
                className="auth_btn bg-[#00e77f] font-[300] text-[#3d3d3d] hover:bg-transparent hover:text-[#fff]"
                to="/login"
                onClick={() => setActive(false)}
              />
            </li>
            <li>
              <ButtonCom
                title={"Sing-Up"}
                className="auth_btn text-[#fff] transition-all font-[300] hover:bg-[#00e77f] hover:text-[#000]"
                to="/register"
                onClick={() => setActive(false)}
              />
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Navbar;