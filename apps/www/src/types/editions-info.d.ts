export interface EditionsInfo {
  name: string;
  author: string;
  language: Language;
  direction: Direction;
  source: string;
  comments: string;
  link: string;
}

export enum Direction {
  LTR = "ltr",
  RTL = "rtl",
}

export enum Language {
  Arabic = "Arabic",
  Bengali = "Bengali",
  English = "English",
}
