import * as React from "react";
import { InfoType } from "./surah-sidebar";
import { cn } from "~/lib/utils";
import { AyatNumberStyle12Font, IndopakFont } from "~/lib/fonts";
import Link from "next/link";

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

export function SurahCard({
  chapter,
}: {
  chapter: InfoType["chapters"][number];
}) {
  return (
    <Link
      href={`/${chapter.chapter}`}
      className="border border-neutral-200 px-3 py-1 rounded-lg"
    >
      <div className="flex gap-2 items-center">
        <div
          className={cn(
            "text-[50px] flex leading-[60px] text-primary",
            AyatNumberStyle12Font.className
          )}
        >
          {chapter.chapter}
        </div>
        <div>
          <p className="text-base font-medium">{chapter.englishName}</p>
          <div className="text-sm mt-1 flex  items-center text-neutral-700 gap-2"> 
            <p className={cn(IndopakFont.className)}>{chapter.arabicName}</p>
            <p>- {chapter.verses} Ayat</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
