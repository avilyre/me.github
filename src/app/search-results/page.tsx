import { redirect } from "next/navigation";
import { Fragment } from "react";

import { DisplaySearch } from "@/components/display-search";
import { getRepositories } from "@/services/get-repositories";
import { getUser } from "@/services/get-user";

import { PageProps } from "./interface";

export default async function SearchResults(props: PageProps) {
  const query = props.searchParams.query;

  if (!query) redirect("/");

  const { user, status: userStatus } = await getUser(query);

  if (userStatus === 404) redirect(`/without-results?query=${query}`);

  const { repositories } = await getRepositories(query);

  return (
    <Fragment>
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
    </Fragment>
  );
}
