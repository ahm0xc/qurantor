import React from "react";

import SearchBar from "./search-bar";
import { getInfo } from "~/helpers/info";
import SurahList from "./surah-list";
const data = getInfo();
const info = {
  verses: data.verses,
  chapters: data.chapters.map((c) => ({
    chapter: c.chapter,
    name: c.name,
    englishName: c.englishname,
    arabicName: c.arabicname,
    revelation: c.revelation,
    verses: c.verses.length
  })),
};

export type InfoType = typeof info;

export default function SurahSidebar() {
  return (
    // TODO: remove scrollbar-hide class if needed
    <aside className="flex flex-col px-4 h-screen overflow-y-scroll scrollbar-hide">
      <div className="sticky top-0 z-10 pt-6 pb-3 bg-background">
        <SearchBar />
      </div>
      <div className="h-full mt-3">
        <SurahList info={info} />
      </div>
    </aside>
  );
}
