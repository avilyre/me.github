import { RepositoryProps } from "@/components/repository/interface";
import { UserProfileProps } from "@/components/user-profile/interface";

export interface UserResultProps {
  profile: UserProfileProps;
  repositories: RepositoryProps[];
}
