import React from "react";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
      <div
        className="flex items-center px-3 py-3 border border-neutral-300 rounded-lg bg-neutral-200 text-neutral-800"
        role="button"
      >
        <SearchIcon className="w-5 h-5 text-neutral-700" />
        <p className="ml-2 text-sm">Search surah</p>
      </div>
    </div>
  );
}
