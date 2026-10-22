import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ContactFormValues } from "../../types/contact";
import FormInput from "../formInput/FormInput";
import GenderSelect from "../genderSelect/GenderSelect";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GenderSelect register={register} />

      <FormInput
        name="Name"
        placeholder="Bitte Namen eingeben"
        register={register}
        rules={{
          required: "Full name is required",
          minLength: { value: 1, message: "Enter your name" },
          maxLength: { value: 50, message: "Maximum 50 characters" },
        }}
      />

      <FormInput
        name="Position"
        placeholder="Bitte Position eingeben"
        register={register}
        rules={{
          required: "Position is required",
          maxLength: { value: 100, message: "Maximum 100 characters" },
        }}
      />

      <FormInput
        name="MessageText"
        placeholder="Bitte Ihre Nachricht eingeben"
        register={register}
        rules={{
          required: "Message is required",
          minLength: { value: 1, message: "Enter a message" },
          maxLength: { value: 1000, message: "Maximum 1000 characters" },
        }}
      />

      <FormInput
        name="Company"
        placeholder="Bitte Unternehmen eingeben"
        register={register}
        rules={{
          required: "Company is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
          maxLength: { value: 30, message: "Maximum 30 characters" },
        }}
      />

      <FormInput
        name="Email"
        placeholder="Bitte E-Mail eingeben"
        type="email"
        register={register}
        rules={{
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Enter a valid email address",
          },
        }}
      />

      <FormInput
        name="Telefonnummer"
        placeholder="Bitte Telefonnummer eingeben"
        type="tel"
        register={register}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^\+?[0-9\s().-]{7,20}$/,
            message: "Enter a valid phone number",
          },
        }}
      />

      <FormInput
        name="Telefonnummer"
        placeholder="Bitte Telefonnummer eingeben"
        type="tel"
        register={register}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^\+?[0-9\s().-]{7,20}$/,
            message: "Enter a valid phone number",
          },
        }}
      />

      <button type="submit">Submit</button>

      {Object.entries(errors).map(([field, error]) => (
        <p key={field} role="alert">
          {error?.message}
        </p>
      ))}
    </form>
  );
};

export default ContactForm;
