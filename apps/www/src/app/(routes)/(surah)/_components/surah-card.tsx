"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { InfoType } from "./surah-sidebar";
import { cn } from "~/lib/utils";
import { AyatNumberStyle12Font } from "~/lib/fonts";

export function SurahCard({
    chapter,
  }: {
    chapter: InfoType["chapters"][number];
  }) {
    const pathName = usePathname()

    const isActive = pathName === `/${chapter.chapter}`

    return (
      <Link
        href={`/${chapter.chapter}`}
        className={cn("border border-neutral-200 px-3 py-1 rounded-lg", isActive && "pr-3 pl-2 border-l-[5px] border-l-blue-500")}
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
            <p className="text-base font-medium">{chapter.name}</p>
            <div className="text-sm mt-1 flex  items-center text-neutral-700 gap-2"> 
              <p className="font-indopak">{chapter.arabicName}</p>
              <p>- {chapter.verses} Ayat</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }