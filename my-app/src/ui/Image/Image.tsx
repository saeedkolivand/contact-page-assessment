import phone from "../../assets/phone.png";
import signature from "../../assets/signature.png";

const Image = () => {
  return (
    <div className="grid grid-cols-2">
      <img
        className="h-full w-full object-cover object-left aspect-square"
        src={phone}
        alt="phone"
      />
      <div className="overflow-hidden">
        <img
          className="h-full w-full object-cover object-left aspect-square scale-[1.6] origin-[0%_45%]"
          src={signature}
          alt="signature"
        />
      </div>
    </div>
  );
};

export default Image;
