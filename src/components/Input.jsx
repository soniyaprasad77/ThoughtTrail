import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="mb-4">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`px-3 py-2 rounded-lg text-black outline-none
             focus:bg-gray-50  duration-200 border border-gray-200
             w-full ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
