import { RepositoryProps } from "@/components/repository/interface";
import { UserProfileProps } from "@/components/user-profile/interface";

type User = UserProfileProps;
type Repositories = RepositoryProps;

export interface UserResultProps {
  profile: User;
  repositories: Repositories[];
}
