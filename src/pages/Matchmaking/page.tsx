import React from "react";
import Home from "../../components/Matchmaking/Home";
import Mbti from "../../components/Matchmaking/Mbti";
import BloodType from "../../components/Matchmaking/BloodType";
import Horoscope from "../../components/Matchmaking/Horoscope";
import Results from "../../components/Matchmaking/Results";
import "../../styles/main.scss";
import "../../styles/Matchmaking.scss";

// function reducer(state: QuizState, action: QuizAction): QuizState {
//     switch(action.type) {
//       case "go_mbti":
//         return {
//           ...state,
//           showNextButton: false,
//           showHome: false,
//           showMbti: true
//         };
//       case "set_mbti":
//         return {
//           ...state,
//           showNextButton: true,
//           userInfo: {
//             ...state.userInfo,
//             mbti: action.payload as string,
//           }
//         }
//       case "go_bloodType":
//         return {
//           ...state,
//           showNextButton: false,
//           showBloodType: true,
//           showMbti: false,
//         }
//       case "set_bloodType":
//         return {
//           ...state,
//           showNextButton: true,
//           userInfo: {
//             ...state.userInfo,
//             blood_type: action.payload as BloodType,
//           }
//         }
//       case "go_horoscope":
//         return {
//           ...state,
//           showNextButton: false,
//           showHoroscope: true,
//           showBloodType: false
//         }

//       case "set_horoscope": {
//         return {
//           ...state,
//           showNextButton: true,
//           userInfo: {
//             ...state.userInfo,
//             sun_sign: JSON.parse(action.payload as string).sun_sign,
//             moon_sign: JSON.parse(action.payload as string).moon_sign,
//             venus_sign: JSON.parse(action.payload as string).venus_sign,
//           }
//         }
//       }
//       case "showResults": {
//         return {
//           ...state,
//           showNextButton: false,
//           showHoroscope: false,
//           showResults: true,
//         }
//       }
//       default:
//         return state;
//     }
//   }

enum Pages {
  "home",
  "mbti",
  "blood_type",
  "horoscope",
  "results",
}

const mapPages: Record<keyof typeof Pages, React.ReactNode> = {
  home: <Home />,
  mbti: <Mbti />,
  blood_type: <BloodType />,
  horoscope: <Horoscope />,
  results: <Results />,
};

function SetPage({ pageIndex }: { pageIndex: number }): React.ReactElement {
  switch (pageIndex) {
    case Pages["home"]:
      return <Home />;
    case Pages["mbti"]:
      return <Mbti />;
    case Pages["blood_type"]:
      return <BloodType />;
    case Pages["horoscope"]:
      return <Horoscope />;
    case Pages["results"]:
      return <Results />;
    default:
      return <></>;
  }
}

export default function Matchmaking() {
  // const [state, dispatch] = React.useReducer(reducer, {
  //   showHome: true,
  //   showMbti: false,
  //   showBloodType: false,
  //   showHoroscope: false,
  //   showResults: false,
  //   showNextButton: false,
  //   userInfo: {
  //     blood_type: undefined,
  //     mbti: undefined,
  //     sun_sign: "",
  //     moon_sign: "",
  //     venus_sign: ""
  //   }
  // });

  // function onNextClick(state: QuizState) {
  //   if (state.showMbti) {
  //     dispatch({ type: "go_bloodType" });
  //   } else if (state.showBloodType) {
  //     dispatch({ type: "go_horoscope" });
  //   } else if (state.showHoroscope) {
  //     dispatch({ type: "showResults" });
  //   }
  // }

  const [pageIndex, setPageIndex] = React.useState(0);

  return (
    <div id="container">
      <main>
        <SetPage pageIndex={pageIndex} />
      </main>
      <section id="nav">
        <button id="nav-prev" className="nav-button">
          Previous
        </button>
        <button id="nav-next" className="nav-button">
          Next
        </button>
      </section>
    </div>
  );
}
