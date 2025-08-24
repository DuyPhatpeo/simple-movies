import React from "react";

const Button = ({
  onClick,
  className = "",
  type = "button",
  bgColor = "primary",
  fullWidth = false,
  children,
}) => {
  let bgClassName = "bg-emerald-500 hover:bg-emerald-400 text-white";

  switch (bgColor) {
    case "primary":
      bgClassName = "bg-emerald-500 hover:bg-emerald-400 text-white";
      break;
    case "secondary":
      bgClassName = "bg-violet-500 hover:bg-violet-400 text-white";
      break;
    case "danger":
      bgClassName = "bg-red-500 hover:bg-red-400 text-white";
      break;
    case "outline":
      bgClassName =
        "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white";
      break;
    default:
      bgClassName = "bg-emerald-500 hover:bg-emerald-400 text-white";
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-3 px-6 rounded-lg capitalize transition-all duration-200 shadow-md ${
        fullWidth ? "w-full" : "inline-block"
      } ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
