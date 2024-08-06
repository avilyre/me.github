import { languages } from "@/constants";

export const getLanguage = (language: string) => {
  const defaultLanguage = {
    label: "not-found",
    name: "Não encontrada",
    color: "#000000",
  };

  return (
    languages.find(item => item.label === language.toLowerCase()) ||
    defaultLanguage
  );
};
