import React from "react";
import Inputcom from "../../ui/InputCom";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import ErrorMessage from "../../ui/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import {
  ErrorRegister,
  NoError,
} from "../../redux/reducers/auth/RegisterSlice";
import { useNavigate } from "react-router-dom";
import Auth from "../../Services/auth/Auth";

const Register = () => {
  // navigate
  const navigate = useNavigate();
  // redux
  const { error, Errortext } = useSelector((state) => state.AuthRegister);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // register
  const registerHandeler = async (e) => {
    e.preventDefault();
    if (firstname && lastname && password && email) {
      try {
        const user = { firstname, lastname, password, email };
        setLoading(true);
        const data = await Auth.Register(user);
        setLoading(false);
        dispatch(NoError());
        navigate("/login");
      } catch (error) {
        dispatch(ErrorRegister(error.response.data.ms));
        setLoading(false);
      }
    } else {
      dispatch(ErrorRegister("Qiymat Kiritilmadi Iltimos Qiymat kiriting !"));
      setLoading(false);
    }
  };
  return (
    <section>
      <div className="w-[100%] flex justify-center items-center h-[100%] py-[4rem] login_content">
        <div style={{ maxWidth: "450px" }}>
          <form onSubmit={registerHandeler}>
            <div className="w-[100%] flex justify-center ">
              <BiLogIn size={"4rem"} className="text-[#fff] mr-4" />
            </div>
            <h1 className="text-[30px] text-center text-[#fff]">
              Please Register{" "}
            </h1>
            {error ? <ErrorMessage text={Errortext} /> : ""}
            <Inputcom
              placeholder={"Enter Firstname"}
              value={firstname}
              setValue={setFirstname}
              name="firstname"
            />
            <Inputcom
              placeholder={"Enter Lastname"}
              value={lastname}
              setValue={setLastname}
              name="lastname"
            />
            <Inputcom
              placeholder={"Enter Email"}
              value={email}
              setValue={setEmail}
              name="email"
              type="email"
            />
            <Inputcom
              placeholder={"Enter Password"}
              value={password}
              setValue={setPassword}
              type="password"
              name="password"
            />
            <button
              type="submit"
              className="text-[#fff] my-4 w-[100%] bg-[#00d073] py-[.5rem] text-[25px] rounded-[4px]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
