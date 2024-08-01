import { Metadata } from "next";

import { appConfig } from "@/app.config";

export const generateSEO = (props?: Metadata): Metadata => {
  const title = props?.title
    ? `${props.title} | ${appConfig.seo.title}`
    : "me.github";
  const description = props?.description || appConfig.seo.description;
  const keywords = props?.keywords || appConfig.seo.keywords;

  const metadata = {
    ...props,
    title,
    description,
    keywords,
  };

  return metadata;
};
