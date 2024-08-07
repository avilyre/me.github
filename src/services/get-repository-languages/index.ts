import { FetchError } from "@/@data/errors/fetch-error";

import { GetRepositoryLanguagesResponse, LanguageResponse } from "./interface";

export const getRepositoryLanguages = async (
  userQuery: string,
  repositoryName: string,
): Promise<GetRepositoryLanguagesResponse> => {
  try {
    const fetchResponse = await fetch(
      `https://api.github.com/repos/${userQuery}/${repositoryName}/languages`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    const languages = (await fetchResponse.json()) as LanguageResponse;

    const formattedLanguages = Object.keys(languages).map(language => {
      return language;
    });

    return {
      languages: fetchResponse.status === 200 ? formattedLanguages : null,
      status: fetchResponse.status,
    };
  } catch (error) {
    console.error(error);
    throw new FetchError("Was not possible to fetch repository languages data");
  }
};
