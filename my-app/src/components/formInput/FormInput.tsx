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
}) => {
  return (
    <div className="border">
      <div className="flex justify-between">
        <label htmlFor={name}>{label}</label>
        {counter && <span>{counter}</span>}
      </div>
      {as === "input" ? (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
        />
      ) : (
        <textarea
          id={name}
          placeholder={placeholder}
          {...register(name, rules)}
        />
      )}

      {error && <p role="alert">{error}</p>}
    </div>
  );
};

export default FormInput;
