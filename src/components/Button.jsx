import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-200",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${textColor} ${type} ${bgColor}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
