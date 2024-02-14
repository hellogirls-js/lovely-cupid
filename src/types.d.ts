type BloodType = "A" | "B" | "AB" | "O" | "undefined";

enum Question {
  "mbti",
  "blood_type",
  "horoscope",
  "food",
  "color",
}

interface QuizState {
  questionIndex: Question | undefined;
  setQuestionIndex: (prev: Question | undefined) => void;
  userInfo: UserInfo | "undefined";
  showNextButton: boolean;
  formRef: React.MutableRefObject<HTMLFormElement | null> | null;
  setMbtiVal: (action: string | undefined) => void;
  setBloodVal: (action: BloodType | undefined) => void;
  setSignsVal: (action: SignData | ((prevState: S) => S)) => void;
  setFlavorVal: (action: keyof typeof Flavor | undefined) => void;
  setColorVal: (action: string | undefined) => void;
  goBack: () => void;
  goForward: () => void;
  submitQuiz: (event: React.FormEvent<HTMLFormElement>) => void;
  resetQuiz: () => void;
}

interface CharacterInfo {
  index?: number;
  compat_val?: number;
  compat_stats?: any;
  similar_val?: number;
  similar_stats?: any;
  first_name: string;
  last_name: string;
  blood_type: string;
  mbti: string;
  sun_sign: number;
  moon_sign: number;
  venus_sign: number;
  food: string;
  color: string;
  card: string;
}

interface UserInfo {
  blood_type?: BloodType;
  mbti?: string;
  sun_sign?: number | string;
  moon_sign?: number | string;
  venus_sign?: number | string;
  food?: string;
  color?: string;
}

interface SignData {
  sun: number | undefined;
  moon: number | undefined;
  venus: number | undefined;
}

type ButtonProps = HTMLButtonElement;

enum Flavor {
  "sweet" = 0,
  "spicy" = 1,
}
