export const HOROSCOPE_MAP = [
  [75, 25, 75, 25, 100, 0, 50, 50, 100, 50, 75, 0],
  [25, 100, 0, 75, 25, 100, 50, 50, 0, 100, 25, 75],
  [75, 0, 100, 0, 75, 25, 100, 0, 50, 25, 100, 0],
  [25, 75, 0, 100, 50, 75, 0, 100, 25, 25, 25, 100],
  [100, 25, 75, 50, 100, 0, 75, 25, 100, 75, 25, 50],
  [0, 100, 25, 75, 0, 100, 25, 75, 0, 100, 25, 25],
  [50, 50, 100, 0, 75, 25, 100, 25, 75, 25, 100, 50],
  [50, 50, 0, 100, 50, 75, 25, 100, 25, 75, 25, 100],
  [100, 0, 50, 25, 100, 0, 75, 25, 100, 0, 75, 25],
  [50, 100, 25, 25, 75, 100, 25, 75, 0, 100, 25, 75],
  [75, 25, 100, 25, 25, 25, 100, 25, 75, 25, 100, 50],
  [0, 75, 0, 100, 50, 25, 50, 100, 25, 75, 50, 100],
];

export const HOROSCOPE_SIMILARITIES = [
  [100, 25, 50, 0, 75, 25, 50, 0, 75, 25, 50, 25],
  [25, 100, 25, 75, 25, 75, 0, 50, 25, 75, 0, 50],
  [50, 25, 100, 25, 50, 0, 75, 25, 50, 0, 75, 25],
  [0, 50, 25, 100, 25, 50, 25, 75, 0, 50, 25, 75],
  [75, 25, 50, 100, 25, 25, 50, 0, 75, 25, 50, 0],
  [25, 50, 0, 75, 25, 100, 25, 50, 25, 75, 0, 25],
  [50, 0, 75, 25, 50, 25, 100, 25, 50, 0, 75, 25],
  [0, 50, 25, 75, 0, 50, 25, 100, 25, 50, 25, 75],
  [75, 25, 50, 0, 75, 25, 50, 25, 100, 25, 50, 0],
  [25, 75, 0, 50, 25, 75, 0, 50, 25, 100, 25, 50],
  [50, 0, 75, 25, 50, 0, 75, 25, 50, 25, 100, 25],
  [25, 50, 25, 75, 0, 50, 25, 75, 0, 50, 25, 100],
];

export const VALUE_TO_SIGN = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const MBTI_MAP = {
  INFP: [75, 75, 75, 100, 75, 100, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0],
  ENFP: [75, 75, 100, 75, 100, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0],
  INFJ: [75, 100, 75, 75, 75, 75, 75, 100, 0, 0, 0, 0, 0, 0, 0, 0],
  ENFJ: [100, 75, 75, 75, 75, 75, 75, 75, 100, 0, 0, 0, 0, 0, 0, 0],
  INTJ: [75, 100, 75, 75, 75, 75, 75, 100, 50, 50, 50, 50, 25, 25, 25, 25],
  ENTJ: [100, 75, 75, 75, 75, 75, 100, 75, 50, 50, 50, 50, 50, 50, 50, 50],
  INTP: [75, 75, 75, 75, 75, 100, 75, 75, 50, 50, 50, 50, 25, 25, 25, 100],
  ENTP: [75, 75, 100, 75, 100, 75, 75, 75, 50, 50, 50, 50, 25, 25, 25, 25],
  ISFP: [0, 0, 0, 100, 50, 50, 50, 50, 25, 25, 25, 25, 50, 100, 50, 100],
  ESFP: [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 100, 50, 100, 50],
  ISTP: [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 50, 100, 50, 100],
  ESTP: [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 100, 50, 100, 50],
  ISFJ: [0, 0, 0, 0, 25, 50, 25, 25, 50, 100, 50, 100, 75, 75, 75, 75],
  ESFJ: [0, 0, 0, 0, 25, 50, 25, 25, 100, 50, 100, 50, 75, 75, 75, 75],
  ISTJ: [0, 0, 0, 0, 25, 50, 25, 25, 50, 100, 50, 100, 75, 75, 75, 75],
  ESTJ: [0, 0, 0, 0, 25, 50, 100, 25, 100, 50, 100, 50, 75, 75, 75, 75],
};

export const MBTI_SIMILARITIES = {
  INFP: [100, 75, 75, 50, 50, 25, 75, 50, 75, 50, 50, 25, 50, 25, 25, 0],
  ENFP: [75, 100, 50, 75, 25, 50, 50, 75, 50, 75, 25, 50, 50, 50, 0, 25],
  INFJ: [75, 50, 100, 75, 75, 50, 50, 25, 50, 25, 25, 0, 75, 50, 50, 25],
  ENFJ: [50, 75, 75, 100, 50, 75, 25, 50, 25, 50, 0, 25, 50, 75, 25, 50],
  INTJ: [50, 25, 75, 50, 100, 75, 75, 50, 25, 0, 50, 25, 50, 25, 75, 50],
  ENTJ: [25, 50, 50, 75, 75, 100, 50, 75, 0, 25, 25, 50, 25, 50, 50, 75],
  INTP: [75, 50, 50, 25, 75, 50, 100, 75, 50, 25, 75, 50, 25, 0, 50, 25],
  ENTP: [50, 75, 25, 50, 50, 75, 75, 100, 25, 50, 50, 75, 0, 25, 25, 50],
  ISFP: [75, 50, 50, 25, 25, 0, 50, 25, 100, 75, 75, 50, 75, 50, 50, 25],
  ESFP: [50, 75, 25, 50, 0, 25, 25, 50, 75, 100, 50, 75, 50, 75, 25, 50],
  ISTP: [50, 25, 25, 0, 50, 25, 75, 50, 75, 50, 100, 75, 50, 25, 75, 50],
  ESTP: [25, 50, 0, 25, 25, 50, 50, 75, 50, 75, 75, 100, 25, 50, 50, 75],
  ISFJ: [50, 25, 75, 50, 50, 25, 25, 0, 75, 50, 50, 25, 100, 75, 75, 50],
  ESFJ: [25, 50, 50, 75, 25, 50, 0, 25, 50, 75, 25, 50, 75, 100, 50, 75],
  ISTJ: [25, 0, 50, 25, 75, 50, 50, 25, 50, 25, 75, 50, 75, 50, 100, 75],
  ESTJ: [0, 25, 25, 50, 50, 75, 25, 50, 25, 50, 50, 75, 50, 75, 75, 100],
};

export const BLOOD_MAP = {
  A: [67, 0, 33, 100],
  B: [0, 33, 100, 67],
  AB: [33, 67, 100, 0],
  O: [100, 67, 0, 33],
};

export const BLOOD_SIMILARITIES = {
  A: [100, 0, 50, 25],
  B: [0, 100, 50, 25],
  AB: [100, 100, 100, 0],
  O: [0, 0, 0, 100],
};

export const COLOR_MAP = {
  red: [50, 75, 25, 100, 25, 75, 50, 25, 50, 0],
  orange: [75, 50, 75, 25, 100, 25, 50, 25, 50, 0],
  yellow: [25, 75, 50, 75, 25, 100, 25, 25, 50, 0],
  green: [100, 25, 75, 50, 75, 25, 100, 25, 50, 0],
  blue: [25, 100, 25, 75, 50, 75, 50, 25, 50, 0],
  purple: [75, 25, 100, 25, 75, 50, 75, 25, 50, 0],
  pink: [50, 50, 25, 100, 25, 50, 50, 100, 50, 0],
  brown: [25, 25, 25, 25, 25, 25, 100, 50, 50, 0],
  white: [50, 50, 50, 50, 50, 50, 50, 50, 0, 100],
  black: [0, 0, 0, 0, 0, 0, 0, 0, 100, 50],
};

export const COLOR_SIMILARITIES = {
  red: [100, 50, 0, 0, 0, 50, 75, 25, 50, 0],
  orange: [50, 100, 50, 25, 0, 0, 25, 25, 50, 0],
  yellow: [0, 50, 100, 50, 0, 0, 0, 25, 50, 0],
  green: [0, 25, 50, 100, 50, 25, 0, 25, 50, 0],
  blue: [0, 0, 0, 50, 100, 50, 0, 25, 50, 0],
  purple: [50, 25, 0, 25, 50, 100, 25, 25, 50, 0],
  pink: [75, 25, 0, 0, 0, 50, 100, 25, 50, 0],
  brown: [25, 25, 25, 25, 25, 25, 25, 100, 50, 0],
  white: [50, 50, 50, 50, 50, 50, 50, 50, 100, 0],
  black: [0, 0, 0, 0, 0, 0, 0, 50, 100],
};
