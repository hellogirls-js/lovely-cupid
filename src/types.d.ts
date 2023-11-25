type BloodType = "A" | "B" | "AB" | "O" | "undefined";

interface QuizState {
    showHome: boolean;
    showMbti: boolean;
    showBloodType: boolean;
    showHoroscope: boolean;
    showResults: boolean;
    showNextButton: boolean;
    userInfo: UserInfo;
  }
  
  interface QuizAction {
    type: "go_mbti" | "set_mbti" | "go_bloodType" | "set_bloodType" | "go_horoscope" | "set_sun" | "set_moon" | "set_venus" | "set_horoscope" | "showResults",
    payload?: string | number;
  }

  interface CharacterInfo {
    index?: number;
    compat_val?: number;
    compat_stats?: any;
    first_name: string;
    last_name: string;
    blood_type: string;
    mbti: string;
    sun_sign: number;
    moon_sign: number;
    venus_sign: number;
    card: string;
  };

  interface UserInfo {
    blood_type?: BloodType;
    mbti?: string;
    sun_sign: number | string;
    moon_sign: number | string;
    venus_sign: number | string;
  }