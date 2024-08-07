import { redirect } from "next/navigation";
import { Fragment } from "react";

import { DisplaySearch } from "@/components/display-search";

import { PageProps } from "./interface";

export default async function WithoutResults(props: PageProps) {
  const query = props.searchParams.query;

  if (!query) redirect("/");

  return (
    <Fragment>
      <DisplaySearch.EmptyResult searchedText={query} />
    </Fragment>
  );
}
