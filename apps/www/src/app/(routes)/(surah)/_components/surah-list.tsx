import * as React from "react";

import { InfoType } from "./surah-sidebar";
import { SurahCard } from "./surah-card";

interface SurahListProps {
  info: InfoType;
}

const SurahList: React.FC<SurahListProps> = ({ info }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 pb-10">
        {info.chapters.map((chapter, idx) => {
          return (
            <SurahCard
              chapter={chapter}
              key={`sidebar-surah-card-${chapter.englishName}-${idx}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SurahList;


