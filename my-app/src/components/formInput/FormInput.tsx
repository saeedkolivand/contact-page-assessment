import React from "react";
import type {
  UseFormRegister,
  RegisterOptions,
  FieldPath,
} from "react-hook-form";
import type { ContactFormValues } from "../../types/contact";

type FormInputProps = {
  name: FieldPath<ContactFormValues>;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<ContactFormValues>;
  rules?: RegisterOptions<ContactFormValues, FieldPath<ContactFormValues>>;
  label: string;
  error?: string;
  as?: "input" | "textarea";
  counter?: string;
  className?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type = "text",
  register,
  rules,
  label,
  error,
  as = "input",
  counter,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className=" flex flex-1 flex-col gap-2 border border-[#cdcdd2] bg-white/50 p-3 focus-within:border-[#091dfb]">
        <div className="flex justify-between text-xs tracking-[0.32px] text-[#676772]">
          <label htmlFor={name}>{label}</label>
          {counter && <span>{counter}</span>}
        </div>
        {as === "input" ? (
          <input
            className="w-full bg-transparent text-sm text-[#1a1a1d] outline-none placeholder:text-[#b3b3bc]"
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, rules)}
          />
        ) : (
          <textarea
            className="w-full bg-transparent text-sm text-[#1a1a1d] outline-none placeholder:text-[#b3b3bc] min-h-[96px] flex-1 resize-y"
            id={name}
            placeholder={placeholder}
            {...register(name, rules)}
          />
        )}
      </div>

      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
