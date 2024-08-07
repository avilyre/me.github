import { RepositoryProps } from "@/components/repository/interface";

export type RepositoryResponse = {
  name: string;
  description: string;
  languages_url: string;
  updated_at: Date;
};

export type GetRepositoriesResponse = {
  repositories: RepositoryProps[];
  status: number;
};
