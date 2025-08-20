import React from "react";

export interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  invalid?: boolean;
  errorMessage?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  invalid = false,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border rounded p-2 focus:outline-none focus:ring ${
          invalid ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
        }`}
      />
      {invalid && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};
