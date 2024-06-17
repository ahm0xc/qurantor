import { notFound } from "next/navigation";
import * as React from "react";

interface SurahPageProps {
  params: {
    surahNumber: string;
  };
}

const SurahPage: React.FC<SurahPageProps> = ({ params }) => {
  const surahNumber = parseInt(params.surahNumber);

  if (isNaN(surahNumber)) {
    return <div>nothing found</div>;
  }

  if (surahNumber < 1 || surahNumber > 114) {
    return <div>Surah not found</div>;
  }

  return <div>{surahNumber}</div>;
};

export default SurahPage;
