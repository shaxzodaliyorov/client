import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NoError } from "../redux/reducers/auth/RegisterSlice";
import { noErrorLogin } from "../redux/reducers/auth/LoginSlice";
const ErrorMessage = ({ text }) => {
  const dispatch = useDispatch();
  // err close
  const close = () => {
    dispatch(NoError());
    dispatch(noErrorLogin());
  };
  // livesClice
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 5000);
  }, []);

  return (
    <div className="w-[100%] bg-[#f15353fe] px-4 py-4 rounded-[4px]">
      <div className="flex w-[100%] justify-between items-center">
        <p className="text-[#fff]">{text}</p>
        <p
          onClick={close}
          className="cursor-pointer text-[20px] font-bold text-[#fff] hover:opacity-[0.7]"
        >
          х
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
