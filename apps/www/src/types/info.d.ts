export interface Info {
  verses: Verses;
  chapters: Chapter[];
  sajdas: Sajdas;
  rukus: Rukus;
  pages: Pages;
  manzils: Manzils;
  maqras: Maqras;
  juzs: Juzs;
}

export interface Chapter {
  chapter: number;
  name: string;
  englishname: string;
  arabicname: string;
  revelation: Revelation;
  verses: Verse[];
}

export enum Revelation {
  Madina = "Madina",
  Mecca = "Mecca",
}

export interface Verse {
  verse: number;
  line: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  maqra: number;
  sajda: boolean | SajdaClass;
}

export interface SajdaClass {
  no: number;
  recommended: boolean;
  obligatory: boolean;
}

export interface Juzs {
  count: number;
  references: JuzsReference[];
}

export interface JuzsReference {
  juz: number;
  start: End;
  end: End;
}

export interface End {
  chapter: number;
  verse: number;
}

export interface Manzils {
  count: number;
  references: ManzilsReference[];
}

export interface ManzilsReference {
  manzil: number;
  start: End;
  end: End;
}

export interface Maqras {
  count: number;
  references: MaqrasReference[];
}

export interface MaqrasReference {
  maqra: number;
  start: End;
  end: End;
}

export interface Pages {
  count: number;
  references: PagesReference[];
}

export interface PagesReference {
  page: number;
  start: End;
  end: End;
}

export interface Rukus {
  count: number;
  references: RukusReference[];
}

export interface RukusReference {
  ruku: number;
  start: End;
  end: End;
}

export interface Sajdas {
  count: number;
  references: SajdasReference[];
}

export interface SajdasReference {
  sajda: number;
  chapter: number;
  verse: number;
  recommended: boolean;
  obligatory: boolean;
}

export interface Verses {
  count: number;
}
