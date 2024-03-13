"use client";
import React from "react";

const Button = ({ children, className, onClick, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`focus:ring-green  hover:bg-green transition-all hover:bg-opacity-80    py-2 px-6  text-white bg-green hover:!text-white  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
