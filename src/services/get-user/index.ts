import { FetchError } from "@/@data/errors/fetch-error";

import { GetUserResponse } from "./interface";

export const getUser = async (userQuery: string): Promise<GetUserResponse> => {
  try {
    const fetchResponse = await fetch(
      `https://api.github.com/users/${userQuery}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      },
    );

    const user = await fetchResponse.json();

    return {
      user: fetchResponse.status === 200 ? user : null,
      status: fetchResponse.status,
    };
  } catch (error) {
    console.error(error);
    throw new FetchError("Was not possible to fetch user data");
  }
};
