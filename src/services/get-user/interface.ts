export type UserResponse = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export type GetUserResponse = {
  user: UserResponse;
  status: number;
};
