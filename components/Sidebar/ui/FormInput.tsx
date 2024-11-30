import React from "react";
import {
  FieldValues,
  Path,
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

interface InputFieldProps<TFieldValues extends FieldValues> {
  label?: string;
  name: Path<TFieldValues>;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<TFieldValues>>
    | undefined;
}

export function InputField<TFieldValues extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  className,
  register,
  error,
}: InputFieldProps<TFieldValues>) {
  const errorMessage = error && "message" in error ? error.message : undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg ${className} ${
          errorMessage ? "border-red-500" : ""
        }`}
        {...register}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{String(errorMessage)}</p>
      )}
    </div>
  );
}
