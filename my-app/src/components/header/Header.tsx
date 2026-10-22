import Image from "../../ui/Image/Image.tsx";
import Breadcrumb from "../../ui/breadcrumb/breadcrumb.tsx";
import ContactForm from "../contactForm/ContactForm.tsx";

const Header = () => {
  return (
    <div className="flex content-center justify-between items-center">
      <Image />
      <div className="flex flex-col gap-4">
        <Breadcrumb name="Kontakt" />
        <p className="font-light text-heading">Headline 1</p>
        <p className="font-light text-description leading-[26px] whitespace-pre-line text-base">
          Haben Sie eine Frage oder ein Projekt im Sinn? Senden Sie uns eine
          Nachricht, und wir werden uns in Kürze bei Ihnen melden.
        </p>

        <ContactForm />
      </div>
    </div>
  );
};

export default Header;
