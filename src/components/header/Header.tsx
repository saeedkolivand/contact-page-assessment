import Image from "../../ui/image/Image.tsx";
import Breadcrumb from "../../ui/breadcrumb/breadcrumb.tsx";
import ContactForm from "../contactForm/ContactForm.tsx";

const Header = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-12 py-14 lg:grid-cols-[44%_1fr] lg:gap-16">
      <Image />
      <div className="flex flex-col gap-4 px-4 lg:max-w-[575px] lg:px-0">
        <Breadcrumb name="Kontakt" />
        <h1
          className="text-heading font-light
     leading-[50px] text-[#1a1a1d]"
        >
          Headline 1
        </h1>
        <p className="text-base font-light leading-[26px] text-[#1a1a1d]">
          Haben Sie eine Frage oder ein Projekt im Sinn?
        </p>
        <p className="text-base font-light leading-[26px] text-[#1a1a1d]">
          Senden Sie uns eine Nachricht, und wir werden uns in Kürze bei Ihnen
          melden.
        </p>

        <ContactForm />
      </div>
    </div>
  );
};

export default Header;
