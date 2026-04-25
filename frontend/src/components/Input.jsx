import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      {label && <label className="block mb-1 font-medium text-sm">{label}</label>}
      <input className="input" {...props} />
    </div>
  );
}