import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SearchForm } from "./components/search-form";

export const Navbar = () => {
  return (
    <nav className="flex items-stretch justify-between border-b border-border-line bg-white">
      <SearchForm />
      <a
        className="flex items-center gap-2 bg-primary px-6 py-[29.37px] text-sm font-medium text-white transition-all hover:brightness-90 hover:filter"
        href="#"
      >
        <FontAwesomeIcon className="h-6 w-6" icon={faHeart} />
        Favoritos
      </a>
    </nav>
  );
};
