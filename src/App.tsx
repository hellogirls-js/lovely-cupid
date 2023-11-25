import { Button, Container, CssBaseline, Link, ThemeProvider, createTheme } from '@mui/material';
import "./styles/main.scss"
import { pink } from '@mui/material/colors';
import { Fragment, useEffect, useReducer } from 'react';
import Home from './components/Home';
import Question from './components/Question';
import Mbti from './components/Mbti';
import BloodType from './components/BloodType';
import Horoscope from './components/Horoscope';
import Results from './components/Results';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[100],
      dark: pink[500],
      light: "#ff99bb"
    },
    secondary: {
      main: "#8c9eff",
    }
  },
  typography: {
    fontFamily: "inherit",
    fontSize: 16,
    h1: {
      color: "white",
    }
  }
});

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch(action.type) {
    case "go_mbti":
      return {
        ...state,
        showNextButton: false,
        showHome: false,
        showMbti: true
      };
    case "set_mbti":
      return {
        ...state,
        showNextButton: true,
        userInfo: {
          ...state.userInfo,
          mbti: action.payload as string,
        }
      }
    case "go_bloodType":
      return {
        ...state,
        showNextButton: false,
        showBloodType: true,
        showMbti: false,
      }
    case "set_bloodType":
      return {
        ...state,
        showNextButton: true,
        userInfo: {
          ...state.userInfo,
          blood_type: action.payload as BloodType,
        }
      }
    case "go_horoscope":
      return {
        ...state,
        showNextButton: false,
        showHoroscope: true,
        showBloodType: false
      }

    case "set_horoscope": {
      return {
        ...state,
        showNextButton: true,
        userInfo: {
          ...state.userInfo,
          sun_sign: JSON.parse(action.payload as string).sun_sign,
          moon_sign: JSON.parse(action.payload as string).moon_sign,
          venus_sign: JSON.parse(action.payload as string).venus_sign,
        }
      }
    }
    case "showResults": {
      return {
        ...state,
        showNextButton: false,
        showHoroscope: false,
        showResults: true,
      }
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    showHome: true,
    showMbti: false,
    showBloodType: false,
    showHoroscope: false,
    showResults: false,
    showNextButton: false,
    userInfo: {
      blood_type: undefined,
      mbti: undefined,
      sun_sign: "",
      moon_sign: "",
      venus_sign: ""
    }
  });

  function onNextClick(state: QuizState) {
    if (state.showMbti) {
      dispatch({ type: "go_bloodType" });
    } else if (state.showBloodType) {
      dispatch({ type: "go_horoscope" });
    } else if (state.showHoroscope) {
      dispatch({ type: "showResults" });
    }
  }

  useEffect(() => {
    console.log("updating state");
    console.log("userInfo", state.userInfo);
  }, [state]);

  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {state.showHome && <Home dispatch={dispatch} />}
        {state.showMbti && <Question question="What is your MBTI?" description={<Fragment>Your MBTI is indicated by four letters, for example, INFP or ESTP. If you don't know your MBTI, you can take <Link href="https://www.16personalities.com/free-personality-test">this quiz</Link>, although you can also opt out by selecting "I don't know" (this may result in less accurate results).</Fragment>} options={<Mbti dispatch={dispatch} />} />}
        {state.showBloodType && <Question question="How about your blood type?" description={<Fragment>Blood types can be used to determine compatibility! If you don't know your blood type, that's okay, just select "I don't know".</Fragment>} options={<BloodType dispatch={dispatch} />} />}
        {state.showHoroscope && <Question question="Let's delve into horoscopes!" mood="serious" description={<Fragment>
          Okay, now it's time for the mandatory section! If you don't know your sun, moon, or venus signs, use <Link href="https://astro.cafeastrology.com/natal.php">this website</Link> to find them. It takes 5 seconds to fill out this form so you have no excuse!!
        </Fragment>} options={<Horoscope state={state} dispatch={dispatch} />} />}
        {state.showResults && <Results state={state} />}
        <Container>
          {state.showNextButton && <Button variant="contained" onClick={() => onNextClick(state)} sx={{ mt: 5, width: "100%" }}>Next</Button>}
        </Container>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
