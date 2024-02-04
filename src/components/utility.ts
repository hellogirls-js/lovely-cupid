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

export const BLOOD_MAP = {
  A: [67, 0, 33, 100],
  B: [0, 33, 100, 67],
  AB: [33, 67, 100, 0],
  O: [100, 67, 0, 33],
};

export function computeResults(userData: UserInfo, charaData: CharacterInfo[]) {
  const changingData: CharacterInfo[] = charaData;
  let amtOfInfo = 5;
  if (userData.blood_type === "undefined" && userData.mbti === "undefined") {
    amtOfInfo = 3;
  } else if (
    userData.blood_type === "undefined" ||
    userData.mbti === "undefined"
  ) {
    amtOfInfo = 4;
  }

  const MULTIPLIER = 100 / amtOfInfo / 100;

  changingData.forEach((chara: CharacterInfo, index: number) => {
    chara.index = index;
    const sunValue = HOROSCOPE_MAP[userData.sun_sign as number][chara.sun_sign];
    const moonValue =
      HOROSCOPE_MAP[userData.moon_sign as number][chara.moon_sign];
    const venusValue =
      HOROSCOPE_MAP[userData.venus_sign as number][chara.venus_sign];
    const mbtiValue =
      userData.mbti !== "undefined"
        ? MBTI_MAP[userData.mbti as keyof typeof MBTI_MAP][
            Object.keys(MBTI_MAP).indexOf(chara.mbti)
          ]
        : 0;
    const bloodValue =
      userData.blood_type !== "undefined"
        ? BLOOD_MAP[userData.blood_type as keyof typeof BLOOD_MAP][
            Object.keys(BLOOD_MAP).indexOf(chara.blood_type)
          ]
        : 0;

    chara.compat_stats = {
      sun_sign: sunValue,
      moon_sign: moonValue,
      venus_sign: venusValue,
      mbti: userData.mbti !== "undefined" ? mbtiValue : undefined,
      blood_type: userData.blood_type !== "undefined" ? bloodValue : undefined,
    };

    let value =
      sunValue * MULTIPLIER +
      moonValue * MULTIPLIER +
      venusValue * MULTIPLIER +
      mbtiValue * MULTIPLIER +
      bloodValue * MULTIPLIER;
    chara.compat_val = +value.toFixed(2);
  });

  changingData.sort((a, b) => {
    if (b.compat_val && a.compat_val) {
      return b.compat_val - a.compat_val;
    } else {
      return 0;
    }
  });

  return changingData;
}
