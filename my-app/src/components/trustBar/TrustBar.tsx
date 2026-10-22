import React from "react";
import flagDe from "../../assets/flag-de.svg";
import flagEu from "../../assets/flag-eu.svg";

type TrustBadge = {
  flag: "de" | "eu";
  bold: string;
  rest: string;
};

const trustBadges: TrustBadge[] = [
  { flag: "de", bold: "100% Made in Germany", rest: "" },
  { flag: "de", bold: "Cybersecurity", rest: " from Germany" },
  {
    flag: "de",
    bold: "Research & Development",
    rest: " in Germany",
  },
  { flag: "eu", bold: "100% EU conformity", rest: "" },
];

const flags: Record<TrustBadge["flag"], string> = { de: flagDe, eu: flagEu };

const TrustBar: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white from-50% to-[#e6e8ff] to-50% px-4">
      <ul className="mx-auto grid max-w-[1160px] grid-cols-1 border border-[#e6e6e9] bg-white sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((item) => (
          <li
            key={item.bold}
            className="flex items-center gap-3 border-[#e6e6e9] px-4 py-4 text-sm text-[#1a1a1d] lg:border-r lg:last:border-r-0"
          >
            <img
              src={flags[item.flag]}
              alt=""
              className="h-6 w-auto shrink-0"
            />

            <span>
              <strong className="font-semibold">{item.bold}</strong>
              {item.rest}
            </span>
          </li>
        ))}
      </ul>

      <div className="h-9" />
    </section>
  );
};

export default TrustBar;
