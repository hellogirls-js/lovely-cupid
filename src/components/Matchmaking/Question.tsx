import React from "react";
import { QuestionContext } from "./QuestionContext";

export function QuestionTitle(): React.JSX.Element {
  const questionContext = React.useContext(QuestionContext);
  const { questionIndex } = questionContext;
  switch (questionIndex) {
    case 0:
      return <>What is your MBTI?</>;
    case 1:
      return <>How about your blood type?</>;
    case 2:
      return <>Let's delve into horoscopes!</>;
    case 3:
      return <>Do you prefer sweet or spicy food?</>;
    case 4:
      return <>What's your favorite color?</>;
    default:
      return <>Come find your match!</>;
  }
}

export function QuestionDescription(): React.JSX.Element {
  const questionContext = React.useContext(QuestionContext);
  const { questionIndex } = questionContext;
  switch (questionIndex) {
    case 0:
      return (
        <p>
          Your MBTI is indicated by four letters, for example, INFP or ESTP. If
          you don't know your MBTI, you can take{" "}
          <a
            href="https://www.16personalities.com/free-personality-test"
            target="_blank"
            rel="noreferrer"
          >
            this quiz
          </a>
          , although you can also opt out by selecting "I don't know" (this may
          result in less accurate results).
        </p>
      );
    case 1:
      return (
        <p>
          Blood types can be used to determine compatibility! If you don't know
          your blood type, that's okay, just select "I don't know".
        </p>
      );
    case 2:
      return (
        <p>
          Okay, now it's time for the mandatory section! If you don't know your
          sun, moon, or venus signs, use{" "}
          <a href="https://astro.cafeastrology.com/natal.php">this website</a>{" "}
          to find them. It takes 5 seconds to fill out this form so you have no
          excuse!!
        </p>
      );
    case 3:
    case 4:
      return <></>;
    default:
      return (
        <>
          <p>
            As a super fan, I know a lot about the idols at Ensemble Square! I
            LOVE them so much! Since I also love love, I can determine which
            idol you'd be the most compatible with, based on finding out which
            idol you're the most similar to!
          </p>
          <p>This quiz will ask for the following information:</p>
          <ul>
            <li>MBTI (optional)</li>
            <li>Blood type (optional)</li>
            <li>
              Horoscope information (required, must know your birthday and birth
              location)
            </li>
          </ul>
        </>
      );
  }
}
