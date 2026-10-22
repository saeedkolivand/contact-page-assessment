import React from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormValues } from "../../types/contact";

type GenderSelectProps = {
  register: UseFormRegister<ContactFormValues>;
};

const GenderSelect: React.FC<GenderSelectProps> = ({ register }) => {
  return (
    <div className="flex flex-1 flex-col gap-2 border border-[#cdcdd2] bg-white/50 p-3 focus-within:border-[#091dfb]">
      <label
        htmlFor="gender"
        className="text-xs tracking-[0.32px] text-[#676772]"
      >
        Anrede
      </label>
      <select
        className="w-full bg-transparent text-sm text-[#1a1a1d] outline-none"
        id="gender"
        {...register("gender")}
        defaultValue="-"
      >
        <option value="-">Bitte wählen</option>
        <option value="male">Herr</option>
        <option value="female">Frau</option>
        <option value="divers">Divers</option>
        <option value="preferNotToSay">Keine Angabe</option>
      </select>
    </div>
  );
};

export default GenderSelect;
