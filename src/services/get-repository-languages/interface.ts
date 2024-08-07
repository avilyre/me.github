export type LanguageResponse = {
  [key: string]: number;
};

export type GetRepositoryLanguagesResponse = {
  languages: string[] | null;
  status: number;
};
