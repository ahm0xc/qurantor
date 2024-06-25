import React from "react";
import axios from "axios";

import { getInfo } from "~/helpers/info";
import { cn } from "~/lib/utils";
import AyahBlock from "./ayah-block";

export const EDITIONS_BASE_API = "https://qurantor.vercel.app/api/editions";

export const ARABIC_EDITION_NAME = "ara-quranuthmanihaf";
export const ARABIC_LA_EDITION_NAME = "ara-quran-la1";
export const ENGLISH_EDITION_NAME = "eng-abdulhye";

export type Ayah = {
  text: string;
  chapter: number;
  verse: number;
};
export type Quran = {
  quran: Ayah[];
}

type Props = {
  surahNumber: number;
};

export default async function Ayahs({ surahNumber }: Props) {
  const info = getInfo();
  const currentChapter = info.chapters.find((c) => c.chapter === surahNumber);

  // eng: https://qurantor.vercel.app/api/editions/ara-quran-la1
  // ara: https://qurantor.vercel.app/api/editions/ara-qurandoorinonun

  const {data: arabicData} = await axios.get<Quran>(`${EDITIONS_BASE_API}/${ARABIC_EDITION_NAME}`);
  const {data: arabicLaData} = await axios.get<Quran>(`${EDITIONS_BASE_API}/${ARABIC_LA_EDITION_NAME}`);
  const {data: englishData} = await axios.get<Quran>(`${EDITIONS_BASE_API}/${ENGLISH_EDITION_NAME}`);
  // const currentSurahAyahs = ayahs.filter(
  //   (ayah) => ayah.chapter === surahNumber
  // );

  return (
    <div className="mt-10 px-8">
      <div className="space-y-8">
        {Array.from({ length: currentChapter?.verses.length ?? 0 }).map(
          (_, i) => {
            return (
              <AyahBlock
                ayahNumber={i + 1}
                arabicText={arabicData.quran[i].text}
                arabicLaText={arabicLaData.quran[i].text}
                englishText={englishData.quran[i].text}
                key={`ayah-block/chapter-${currentChapter?.chapter}-verse-${i + 1}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
