import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FavoriteButtonProps } from "./interface";

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorited, ...rest } = props;

  const favoritedState = {
    true: {
      icon: faHeartSolid,
      title: "Desfavoritar",
      className: "text-primary border border-primary bg-transparent",
    },
    false: {
      icon: faHeart,
      title: "Favoritar",
      className: "text-placeholder border-matte bg-matte",
    },
  };

  const { icon, title } = favoritedState[`${isFavorited}`];

  return (
    <button
      data-testid="favorite-button"
      type="button"
      title={title}
      aria-label={title}
      className={`h-10 w-10 rounded-full border leading-none ${favoritedState[`${isFavorited}`].className}`}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} className="h-4 w-[18.43px]" />
    </button>
  );
};
