"use client";

import { useQuery } from "@tanstack/react-query";

import { FetchError } from "@/@data/errors/fetch-error";
import { QueryKeys } from "@/@types/query-keys";
import { DisplaySearch } from "@/components/display-search";
import { getRepositories } from "@/services/get-repositories";
import { getUser } from "@/services/get-user";

import { UserWithReporitoriesListProps } from "./interface";
import { Skeleton } from "./skeleton";

export const UserWithReporitoriesList = (
  props: UserWithReporitoriesListProps,
) => {
  const { query } = props;

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.USER_AND_REPOSITORIES, query],
    retry: false,
    queryFn: async () => {
      const userResponse = await getUser(query);

      if (userResponse.status === 404) throw new FetchError("User not found");

      const repositoriesResponse = await getRepositories(query);

      if (repositoriesResponse.status === 404)
        throw new FetchError("Repositories not found");

      return {
        user: userResponse.user,
        repositories: repositoriesResponse.repositories,
        status: {
          user: userResponse.status,
          repositories: repositoriesResponse.status,
        },
      };
    },
  });

  if (isLoading) return <Skeleton />;

  if (
    data?.status.user === 404 ||
    data?.status.repositories === 404 ||
    !data?.user ||
    !data?.repositories
  )
    return <DisplaySearch.EmptyResult searchedText={query} />;

  const { user, repositories } = data!;

  return (
    <DisplaySearch.UserResult
      profile={{
        user: {
          name: user.name,
          username: user.login,
          avatarURL: user.avatar_url,
          description: user.bio,
        },
      }}
      repositories={repositories}
    />
  );
};
