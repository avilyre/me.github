import { ComponentProps } from "react";

export interface FavoriteButtonProps extends ComponentProps<"button"> {
  isFavorited: boolean;
}
