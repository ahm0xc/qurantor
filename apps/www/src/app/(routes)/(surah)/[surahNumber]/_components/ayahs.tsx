import React from "react";

import {
  AyatNumberStyle12Font,
  KFGQPCHafsUthmaniFont,
  UthmaniHafsFont,
} from "~/lib/fonts";
import { cn } from "~/lib/utils";

type Props = {
  surahNumber: number;
};

export default async function Ayahs({ surahNumber }: Props) {
  // eng: https://qurantor.vercel.app/api/editions/ara-quran-la1
  // ara: https://qurantor.vercel.app/api/editions/ara-qurandoorinonun

  const data = await fetch(
    "https://qurantor.vercel.app/api/editions/ara-quranuthmanihaf"
  ).then((r) => r.json());
  const ayahs = data.quran as {
    text: string;
    chapter: number;
    verse: number;
  }[];
  const currentSurahAyahs = ayahs.filter(
    (ayah) => ayah.chapter === surahNumber
  );

  return (
    <div className="mt-10 px-8">
      <div className="space-y-8">
        {currentSurahAyahs.map((ayah) => {
          return (
            <div key={`ayah-${ayah.chapter}/${ayah.verse}`} className="border-t first:border-none pt-16 first:pt-0">
              <div className="flex items-start">
                <div className="px-4">
                  <p>.</p>
                  <p>.</p>
                </div>
                <div className="w-full pr-8">
                  <div>
                    <p
                      className={cn(
                        "text-4xl leading-[1.7] font-medium",
                        KFGQPCHafsUthmaniFont.className
                      )}
                      dir="rtl"
                    >
                      {ayah.text}{" "}
                      <span
                        className={cn(
                          "text-blue-500 font-medium text-[45px] mr-2",
                          AyatNumberStyle12Font.className
                        )}
                      >
                        {ayah.verse}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
