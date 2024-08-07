import { languages } from "@/constants";

export const getLanguage = (language: string) => {
  return languages.find(item => item.label === language.toLowerCase()) || null;
};
