import React from "react";
export function Button({ children, className = "", variant, type = "button", ...props }) {
  return <button type={type} className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition ${className}`} {...props}>{children}</button>;
}
