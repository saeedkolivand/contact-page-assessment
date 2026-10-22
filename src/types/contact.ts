export type ContactFormValues = {
  gender: "-" | "male" | "female" | "divers" | "preferNotToSay";
  name: string;
  position: string;
  messageText: string;
  company: string;
  email: string;
  phoneNumber: string;
  consent: boolean;
};
