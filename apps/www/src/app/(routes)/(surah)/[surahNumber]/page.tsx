import * as React from "react";

import { AyatNumberStyle12Font } from "~/lib/fonts";
import { getInfo } from "~/helpers/info";
import { cn } from "~/lib/utils";
import { BismillahIcon } from "~/components/icons";
import Ayahs from "./_components/ayahs";

interface SurahPageProps {
  params: {
    surahNumber: string;
  };
}

const SurahPage: React.FC<SurahPageProps> = ({ params }) => {
  const surahNumber = parseInt(params.surahNumber);

  const info = getInfo();
  const currentSurah = info.chapters.find((ch) => ch.chapter === surahNumber);

  if (!currentSurah) {
    return <div>No surah found</div>;
  }
  // if (isNaN(surahNumber)) {
  //   return <div>nothing found</div>;
  // }

  // if (surahNumber < 1 || surahNumber > 114) {
  //   return <div>Surah not found</div>;
  // }

  return (
    <div className="h-screen overflow-y-auto">
      <Banner
        name={currentSurah.name}
        englishName={currentSurah.englishname}
        arabicName={currentSurah.arabicname}
        verses={currentSurah.verses.length}
        surahNumber={surahNumber}
      />
      {surahNumber !== 1 && <Bismillah />}
      <Ayahs surahNumber={surahNumber} />
    </div>
  );
};

export default SurahPage;

function Banner({
  name,
  englishName,
  arabicName,
  verses,
  surahNumber,
}: {
  name: string;
  englishName: string;
  arabicName: string;
  verses: number;
  surahNumber: number;
}) {
  return (
    <section className="mt-20 px-8">
      <div className="rounded-xl border border-blue-50">
        <div className="w-full h-full relative rounded-[inherit] flex items-center bg-blue-200/10 overflow-hidden py-1">
          <Blurs />
          <Grain />
          <div className="pl-4">
            <h1 className="text-lg font-medium">
              {name}{" "}
              <span className="text-neutral-600">
                (<span className="font-indopak text-xl">{arabicName}</span>)
              </span>
            </h1>
            <div>
              {/* <p className="text-neutral-700 inline font-indopak">
                {arabicName}
              </p> */}
              <p
                className={cn(
                  "text-neutral-500 font-semibold inline text-[14px]"
                )}
              >
                {englishName} - {verses} Ayahs
              </p>
            </div>
          </div>
          <div className="ml-auto pr-4">
            <p
              className={cn(
                "text-white font-medium text-[50px]",
                AyatNumberStyle12Font.className
              )}
            >
              {surahNumber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blurs() {
  return (
    <>
      <span className="w-[30vw] absolute pointer-events-none h-[20vw] bg-indigo-600 rounded-full blur-3xl -top-[18vw] -right-[10vw] -z-10" />
      <span className="w-[2vw] absolute pointer-events-none h-[20vw] bg-purple-600 rounded-full blur-2xl -rotate-45 -bottom-[10vh] right-[18vw] -z-10" />
    </>
  );
}

function Grain() {
  // https://redstapler.co/css-film-grain-effect/
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        backgroundImage:
          "url('data:image/png;base64,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')",
        backgroundSize: "1%",
        pointerEvents: "none",
      }}
    />
  );
}

function Bismillah() {
  return (
    <div className="flex justify-center mt-10">
      <BismillahIcon />
    </div>
  );
}
