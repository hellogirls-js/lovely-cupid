import {
  HOROSCOPE_MAP,
  MBTI_MAP,
  BLOOD_MAP,
  COLOR_MAP,
  HOROSCOPE_SIMILARITIES,
  MBTI_SIMILARITIES,
  BLOOD_SIMILARITIES,
  COLOR_SIMILARITIES,
} from "../data/matching_data";

export function charaCompatibility(
  chara1: CharacterInfo,
  chara2: CharacterInfo
) {
  const MULTIPLIER = 100 / 7 / 100;

  const sunValue = HOROSCOPE_MAP[chara1.sun_sign as number][chara2.sun_sign];
  const moonValue = HOROSCOPE_MAP[chara1.moon_sign as number][chara2.moon_sign];
  const venusValue =
    HOROSCOPE_MAP[chara1.venus_sign as number][chara2.venus_sign];
  const mbtiValue =
    MBTI_MAP[chara1.mbti as keyof typeof MBTI_MAP][
      Object.keys(MBTI_MAP).indexOf(chara2.mbti)
    ];
  const bloodValue =
    BLOOD_MAP[chara1.blood_type as keyof typeof BLOOD_MAP][
      Object.keys(BLOOD_MAP).indexOf(chara2.blood_type)
    ];
  const flavorValue = chara2.food !== chara1.food ? 100 : 0;
  const colorValue =
    COLOR_MAP[chara1.color as keyof typeof COLOR_MAP][
      Object.keys(COLOR_MAP).indexOf(chara2.color)
    ];

  let value =
    sunValue * MULTIPLIER +
    moonValue * MULTIPLIER +
    venusValue * MULTIPLIER +
    mbtiValue * MULTIPLIER +
    bloodValue * MULTIPLIER +
    flavorValue * MULTIPLIER +
    colorValue * MULTIPLIER;

  return +value.toFixed(1);
}

export function computeCompatibility(
  userData: UserInfo,
  charaData: CharacterInfo[]
) {
  const changingData: CharacterInfo[] = charaData;
  let amtOfInfo = 7;
  if (userData.blood_type === "undefined" && userData.mbti === "undefined") {
    amtOfInfo = 5;
  } else if (
    userData.blood_type === "undefined" ||
    userData.mbti === "undefined"
  ) {
    amtOfInfo = 6;
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
    const flavorValue = chara.food !== userData.food ? 100 : 0;
    const colorValue =
      COLOR_MAP[userData.color as keyof typeof COLOR_MAP][
        Object.keys(COLOR_MAP).indexOf(chara.color)
      ];

    chara.compat_stats = {
      sun_sign: sunValue,
      moon_sign: moonValue,
      venus_sign: venusValue,
      mbti: userData.mbti !== "undefined" ? mbtiValue : undefined,
      blood_type: userData.blood_type !== "undefined" ? bloodValue : undefined,
      flavor: flavorValue,
      color: colorValue,
    };

    let value =
      sunValue * MULTIPLIER +
      moonValue * MULTIPLIER +
      venusValue * MULTIPLIER +
      mbtiValue * MULTIPLIER +
      bloodValue * MULTIPLIER +
      flavorValue * MULTIPLIER +
      colorValue * MULTIPLIER;
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

export function computeSimilarity(
  userData: UserInfo,
  charaData: CharacterInfo[]
) {
  const changingData: CharacterInfo[] = charaData;
  let amtOfInfo = 7;
  if (userData.blood_type === "undefined" && userData.mbti === "undefined") {
    amtOfInfo = 5;
  } else if (
    userData.blood_type === "undefined" ||
    userData.mbti === "undefined"
  ) {
    amtOfInfo = 6;
  }

  const MULTIPLIER = 100 / amtOfInfo / 100;

  changingData.forEach((chara: CharacterInfo, index: number) => {
    chara.index = index;
    const sunValue =
      HOROSCOPE_SIMILARITIES[userData.sun_sign as number][chara.sun_sign];
    const moonValue =
      HOROSCOPE_SIMILARITIES[userData.moon_sign as number][chara.moon_sign];
    const venusValue =
      HOROSCOPE_SIMILARITIES[userData.venus_sign as number][chara.venus_sign];
    const mbtiValue =
      userData.mbti !== "undefined"
        ? MBTI_SIMILARITIES[userData.mbti as keyof typeof MBTI_SIMILARITIES][
            Object.keys(MBTI_SIMILARITIES).indexOf(chara.mbti)
          ]
        : 0;
    const bloodValue =
      userData.blood_type !== "undefined"
        ? BLOOD_SIMILARITIES[
            userData.blood_type as keyof typeof BLOOD_SIMILARITIES
          ][Object.keys(BLOOD_SIMILARITIES).indexOf(chara.blood_type)]
        : 0;
    const flavorValue = chara.food !== userData.food ? 100 : 0;
    const colorValue =
      COLOR_SIMILARITIES[userData.color as keyof typeof COLOR_SIMILARITIES][
        Object.keys(COLOR_SIMILARITIES).indexOf(chara.color)
      ];

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
      bloodValue * MULTIPLIER +
      flavorValue * MULTIPLIER +
      colorValue * MULTIPLIER;
    chara.similar_val = +value.toFixed(2);
  });

  changingData.sort((a, b) => {
    if (b.similar_val && a.similar_val) {
      return b.similar_val - a.similar_val;
    } else {
      return 0;
    }
  });

  return changingData;
}
