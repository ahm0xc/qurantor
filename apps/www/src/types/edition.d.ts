export interface Edition {
  quran: Quran[];
}

export interface Quran {
  chapter: number;
  verse: number;
  text: string;
}
