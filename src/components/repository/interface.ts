export interface RepositoryProps {
  name: string;
  description: string;
  languages: string[];
  updatedAt: Date;
  isFavorited?: boolean;
}
