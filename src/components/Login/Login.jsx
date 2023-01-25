import React from "react";
import Inputcom from "../../ui/InputCom";
import { BiLogIn } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { useState } from "react";
import ErrorMessage from "../../ui/ErrorMessage";
import {
  errorLogin,
  SuccessLogined,
} from "../../redux/reducers/auth/LoginSlice";
import Auth from "../../Services/auth/Auth";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../localStorge/index";
const Login = () => {
  const [loading, setLoading] = useState(false);
  // redux
  const { error, ErrorText } = useSelector((state) => state.LoginSlice);
  const dispatch = useDispatch();
  // router
  const navigate = useNavigate();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // lgin
  const LoginHandeler = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const user = { email, password };
        setLoading(true);
        const data = await Auth.Login(user);
        setItem("token", data.token);
        dispatch(SuccessLogined(data.user));
        setLoading(false);
        setEmail("");
        setPassword("");
        navigate("/");
      } catch (error) {
        dispatch(errorLogin(error.response.data.ms));
        setLoading(false);
      }
    } else {
      dispatch(errorLogin("Qiymat Kiritilmadi Iltimos Qiymat kiriting !"));
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="w-[100%] flex justify-center items-center h-[100%] py-[8rem] login_content">
        <div style={{ maxWidth: "450px" }}>
          <form onSubmit={LoginHandeler}>
            <div className="w-[100%] flex justify-center ">
              <BiLogIn size={"4rem"} className="text-[#fff] mr-4" />
            </div>
            <h1 className="text-[30px] text-center text-[#fff]">
              Please Login{" "}
            </h1>
            {error ? <ErrorMessage text={ErrorText} /> : ""}
            <Inputcom
              placeholder={"Enter Email"}
              value={email}
              setValue={setEmail}
              type="email"
            />
            <Inputcom
              placeholder={"Enter Password"}
              value={password}
              setValue={setPassword}
              name="password"
              type="password"
            />
            <button
              disabled={loading}
              className="text-[#fff] my-4 w-[100%] bg-[#00d073] py-[.5rem] text-[25px] rounded-[4px]"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
