import React from "react";
import Footer from "components/Footer";
import {
  QuestionContext,
  QuestionProvider,
} from "components/Matchmaking/QuestionContext";
import { IconHeart } from "@tabler/icons-react";
import FallingHearts from "components/FallingHearts";
import Quiz from "components/Matchmaking/Quiz";
import Results from "components/Matchmaking/Results";

function Content() {
  const questionContext = React.useContext(QuestionContext);
  const { userInfo } = questionContext;
  if (userInfo !== "undefined") {
    return <Results />;
  } else {
    return <Quiz />;
  }
}

export default function Matchmaking() {
  return (
    <QuestionProvider>
      <Footer />
      <main id="matchmaking">
        <Content />
        <div id="heart-bg">
          <div id="main-heart" className="bg-heart">
            <IconHeart />
          </div>
          <div className="bg-heart">
            <IconHeart />
          </div>
        </div>
      </main>
      <FallingHearts opacity={0.4} />
    </QuestionProvider>
  );
}
