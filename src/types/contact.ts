export type ContactFormValues = {
  gender: "-" | "male" | "female" | "divers" | "preferNotToSay";
  name: string;
  position: string;
  messageText: string;
  company: string;
  email: string;
  telefonnummer: string;
  consent: boolean;
};
