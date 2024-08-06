import { Fragment } from "react";

import { DisplaySearch } from "@/components/display-search";
export default function Home() {
  return (
    <Fragment>
      <main>
        <DisplaySearch.UserResult
          profile={{
            user: {
              avatarURL: "https://github.com/avilyre.png",
              name: "Avily Silva",
              username: "avilyre",
              description: "Design Engineer",
            },
          }}
          repositories={[
            {
              name: "Repository name",
              description: "Repository description",
              languages: ["TypeScript", "JavaScript", "CSS", "HTML"],
              updatedAt: new Date(),
            },
          ]}
        />
      </main>
    </Fragment>
  );
}
