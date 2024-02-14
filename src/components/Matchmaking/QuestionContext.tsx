import { COLOR_MAP } from "data/matching_data";
import React from "react";
import { useLocalStorage } from "@mantine/hooks";

const defaultValue: QuizState = {
  questionIndex: undefined,
  setQuestionIndex: () => {},
  userInfo: "undefined",
  showNextButton: false,
  formRef: null,
  setMbtiVal: () => {},
  setBloodVal: () => {},
  setSignsVal: (prev) => {},
  setFlavorVal: () => {},
  setColorVal: () => {},
  goBack: () => {},
  goForward: () => {},
  submitQuiz: (event) => {},
  resetQuiz: () => {},
};

export const QuestionContext = React.createContext<QuizState>(defaultValue);

export function QuestionProvider({ children }: { children: React.ReactNode }) {
  const [questionIndex, setQuestionIndex] = React.useState<number | undefined>(
    undefined
  );
  const [mbtiVal, setMbtiVal] = React.useState<string>();
  const [bloodVal, setBloodVal] = React.useState<BloodType>();
  const [signsVal, setSignsVal] = React.useState<SignData>({
    sun: undefined,
    moon: undefined,
    venus: undefined,
  });
  const [flavorVal, setFlavorVal] = React.useState<keyof typeof Flavor>();
  const [colorVal, setColorVal] = React.useState<string>();

  const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage<
    UserInfo | "undefined"
  >({
    key: "userInfo",
    defaultValue: "undefined",
  });

  const form = React.useRef<HTMLFormElement>(null);

  const resetQuiz = () => {
    removeUserInfo();
    setQuestionIndex(undefined);
    setMbtiVal(undefined);
    setBloodVal(undefined);
    setSignsVal({
      sun: undefined,
      moon: undefined,
      venus: undefined,
    });
    setFlavorVal(undefined);
    setColorVal(undefined);
  };

  const showNextButton = React.useMemo(() => {
    if (questionIndex === 0 && mbtiVal) {
      return true;
    } else if (questionIndex === 1 && bloodVal) {
      return true;
    } else if (
      questionIndex === 2 &&
      signsVal.moon !== undefined &&
      signsVal.sun !== undefined &&
      signsVal.venus !== undefined
    ) {
      return true;
    } else if (questionIndex === 3 && flavorVal) {
      return true;
    } else if (questionIndex === 4 && colorVal) {
      return true;
    }
    return false;
  }, [questionIndex, mbtiVal, bloodVal, signsVal, flavorVal, colorVal]);

  const goBack = () => {
    if (questionIndex !== undefined) {
      let prev: number = questionIndex;
      prev--;
      setQuestionIndex(prev);
    }
  };

  const goForward = () => {
    if (questionIndex !== undefined && questionIndex < 4) {
      let prev: number = questionIndex;
      prev++;
      setQuestionIndex(prev);
    } else if (questionIndex === 4) {
      submitQuiz();
    }
  };

  const submitQuiz = () => {
    const inputInfo = {
      blood_type: bloodVal,
      mbti: mbtiVal,
      sun_sign: signsVal.sun,
      moon_sign: signsVal.moon,
      venus_sign: signsVal.venus,
      food: flavorVal,
      color: colorVal,
    };
    setUserInfo(inputInfo);
  };

  const value: QuizState = {
    questionIndex,
    setQuestionIndex,
    userInfo,
    showNextButton,
    formRef: form,
    setMbtiVal,
    setBloodVal,
    setSignsVal,
    setFlavorVal,
    setColorVal,
    goBack,
    goForward,
    submitQuiz,
    resetQuiz,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}
