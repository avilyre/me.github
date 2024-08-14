import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";

import { UserWithReporitoriesList } from "./components/user-with-repositories-list";
import { PageProps } from "./interface";

export default async function SearchResults(props: PageProps) {
  const query = props.searchParams.query;

  if (!query) redirect("/");

  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserWithReporitoriesList query={query} />
    </HydrationBoundary>
  );
}
