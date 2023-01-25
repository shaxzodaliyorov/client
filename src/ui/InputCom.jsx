import React from "react";

const InputCom = ({
  className,
  type = "text",
  value,
  setValue,
  placeholder,
  name,
  readOnly = false,
  defaultValue,
}) => {
  return (
    <input
      type={type}
      className={`${className} w-[100%] py-[1rem] outline-none my-4 rounded-[6px] px-2 text-[1.2rem] bg-[#4b4b4b]`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      style={{ borderRadius: "4px" }}
      name={name}
      readOnly={readOnly}
      defaultValue={defaultValue}
    />
  );
};

export default InputCom;
