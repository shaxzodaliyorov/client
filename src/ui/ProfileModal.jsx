import React from "react";
import { Link } from "react-router-dom";
import { removeItem } from "../localStorge";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileModal = ({ setActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.LoginSlice);
  const logOut = () => {
    removeItem("token");
    localStorage.clear();
    dispatch(logOut());
    navigate("/");
    setActive(false)
  };
  return (
    <div
      className="absolute left-[0] px-4 py-4 rounded-[2px]"
      style={{
        background: "#242323",
        position: "absolute",
        bottom: -120,
        left: -50,
      }}
    >
      <ul>
        <li className="my-2">
          <Link to="/profile" onClick={() => setActive(false)}>
            Profile
          </Link>
        </li>
        {user.isadmin ? (
          <li className="my-2">
            <Link to="/admin" onClick={() => setActive(false)}>
              Admin
            </Link>{" "}
          </li>
        ) : (
          ""
        )}
        <li className="my-2">
          <Link
            style={{ color: "red" }}
            onClick={logOut}
            to="/"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
