"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const SearchForm = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/search-results/?query=${search}`);
  };

  return (
    <form className="px-6 py-5" onSubmit={handleSearch}>
      <label className="flex items-center rounded border border-border-line">
        <input
          required
          type="search"
          placeholder="Buscar usuário"
          className="px-4 py-[10px] text-sm md:min-w-[668px]"
          onChange={event => setSearch(event.target.value)}
        />
        <button type="submit" className="px-4">
          <FontAwesomeIcon className="h-6 w-6" icon={faMagnifyingGlass} />
        </button>
      </label>
    </form>
  );
};
