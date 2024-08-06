import { Repository } from "@/components/repository";
import { UserProfile } from "@/components/user-profile";

import { UserResultProps } from "./interface";

export const UserResult = (props: UserResultProps) => {
  const { profile, repositories } = props;

  return (
    <div className="grid grid-cols-[448px_1fr] gap-12 p-6">
      <div className="flex-1">
        <UserProfile user={profile.user} />
      </div>
      <div className="flex-1">
        <h1 className="mb-4 text-xl font-semibold text-primary">
          Repositórios
        </h1>
        <div className="flex flex-1 flex-col gap-4">
          {repositories.map(repository => (
            <Repository key={repository.name} {...repository} />
          ))}
        </div>
      </div>
    </div>
  );
};
