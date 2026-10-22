import React from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormValues } from "../../types/contact";

type GenderSelectProps = {
  register: UseFormRegister<ContactFormValues>;
  placeholder?: string;
};

const GenderSelect: React.FC<GenderSelectProps> = ({ register }) => {
  return (
    <select {...register("Gender")} defaultValue="-">
      <option value="-">Bitte wählen</option>
      <option value="male">Herr</option>
      <option value="female">Frau</option>
      <option value="divers">Divers</option>
      <option value="preferNotToSay">Keine Angabe</option>
    </select>
  );
};

export default GenderSelect;
