export type Word = {
  id?: number;
  firstKanji: string;
  secondKanji?: string;
  thirdKanji?: string;
  firstFurikana: string;
  secondFurikana?: string;
  thirdFurikana?: string;
  katakana: string;
  hirakana: string;
  kunHirakana: string;
  en: string;
  my: string;
  type: number;
  level: number;
  unit?: number;
  isVocab: boolean;
  isMandatory: boolean;
  isParent: boolean;
};

export type Page = {
  startPage: number;
  nextPage: number;
  totalPage?: number;
};

export type ResponseData = {
  message?: string;
  error: Map<string, string>;
};
