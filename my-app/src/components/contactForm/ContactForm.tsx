import React from "react";
import { useForm, type SubmitHandler, useWatch } from "react-hook-form";
import type { ContactFormValues } from "../../types/contact";
import FormInput from "../formInput/FormInput";
import GenderSelect from "../genderSelect/GenderSelect";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ContactFormValues>();

  const message = useWatch({ control, name: "messageText" }) ?? "";

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <div
        className="grid grid-cols-1 gap-2
       md:grid-cols-2 md:gap-x-6"
      >
        <GenderSelect register={register} />
        <FormInput
          name="name"
          placeholder="Bitte Namen eingeben"
          register={register}
          rules={{
            required: "Bitte geben Sie Ihren Namen ein",
            maxLength: { value: 50, message: "Maximum 50 characters" },
          }}
          label="Name"
          error={errors.name?.message}
        />
        <FormInput
          name="position"
          placeholder="Bitte Position eingeben"
          register={register}
          rules={{
            required: "Position is required",
            maxLength: { value: 100, message: "Maximum 100 characters" },
          }}
          label="Position"
          error={errors.position?.message}
        />
        <FormInput
          className="md:row-span-2"
          name="messageText"
          placeholder="Bitte Ihre Nachricht eingeben"
          register={register}
          rules={{
            required: "Message is required",
            maxLength: { value: 100, message: "Maximum 100 characters" },
          }}
          label="Ihre Nachricht"
          as="textarea"
          counter={`${message.length}/100`}
          error={errors.messageText?.message}
        />
        <FormInput
          name="company"
          placeholder="Bitte Unternehmen eingeben"
          register={register}
          rules={{
            required: "Company is required",
            maxLength: { value: 30, message: "Maximum 30 characters" },
          }}
          label="Unternehmen"
          error={errors.company?.message}
        />
      </div>

      <p className="mt-6 text-sm text-[#1a1a1d]">
        Hinterlassen Sie Ihre Kontaktdaten – wir melden uns zeitnah bei Ihnen.
      </p>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-6">
        <FormInput
          name="email"
          placeholder="Bitte E-Mail eingeben"
          type="email"
          register={register}
          rules={{
            required: "E-Mail is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Bitte geben Sie eine gültige E-Mail ein",
            },
          }}
          label="E-Mail"
          error={errors.email?.message}
        />

        <FormInput
          name="telefonnummer"
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
          label="Telefonnummer"
          error={errors.telefonnummer?.message}
        />
      </div>
      <div className="mt-6 md:w-1/2">
        <label className="flex items-start gap-3 text-sm text-[#1a1a1d]">
          <input
            className="mt-1 h-4 w-4 shrink-0 accent-[#091dfb]"
            type="checkbox"
            {...register("consent", {
              required: "Bitte stimmen Sie der Datenverarbeitung zu",
            })}
          />
          Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner
          Anfrage elektronisch erhoben und gespeichert werden.
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1 text-xs text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>
      <div className="md:w-1/2 md:self-end">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-[#091dfb] text-white font-bold px-3 py-2"
        >
          Anfrage senden <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
