import Image from "next/image";

import { UserProfileProps } from "./interface";

export const UserProfile = (props: UserProfileProps) => {
  const { user } = props;

  return (
    <div
      data-testid="user-profile"
      className="flex flex-col items-center rounded-[4px] border border-border-line px-6 py-10"
    >
      <Image
        className="mb-6 aspect-square w-full max-w-[200px] rounded-full"
        src={user.avatarURL}
        alt="Avatar do usuário"
        width={200}
        height={200}
      />
      <h1 className="text-xl font-semibold text-neutral">{user.name}</h1>
      <span className="text-sm text-gray-dark">@{user.username}</span>
      <p className="mt-6 text-sm text-gray-dark">{user.description}</p>
    </div>
  );
};
