"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";

export const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <form className="px-6 py-5" onSubmit={handleSearch}>
      <label className="flex items-center rounded border border-border-line">
        <input
          type="search"
          placeholder="Buscar usuário"
          className="px-4 py-[10px] text-sm md:min-w-[668px]"
          onChange={event => setSearch(event.target.value)}
        />
        <button type="submit" className="px-4">
          <FontAwesomeIcon className="w-6" icon={faMagnifyingGlass} />
        </button>
      </label>
    </form>
  );
};
