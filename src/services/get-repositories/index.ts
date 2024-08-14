import { FetchError } from "@/@data/errors/fetch-error";
import { RepositoryProps } from "@/components/repository/interface";

import { getRepositoryLanguages } from "../get-repository-languages";
import { GetRepositoriesResponse, RepositoryResponse } from "./interface";

export const getRepositories = async (
  userQuery: string,
): Promise<GetRepositoriesResponse> => {
  try {
    const fetchResponse = await fetch(
      `https://api.github.com/users/${userQuery}/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      },
    );

    const repositoriesResult =
      (await fetchResponse.json()) as RepositoryResponse[];

    const repositories: RepositoryProps[] = await Promise.all(
      repositoriesResult?.map(async (repository: RepositoryResponse) => {
        const { languages } = await getRepositoryLanguages(
          userQuery,
          repository.name,
        );

        return {
          name: repository.name,
          description: repository.description,
          languages: languages || [],
          updatedAt: repository.updated_at,
        };
      }) || [],
    );

    return {
      repositories,
      status: fetchResponse.status,
    };
  } catch (error) {
    console.error(error);
    throw new FetchError("Was not possible to fetch repositories data");
  }
};
