import React from "react";
import chara_data from "data/chara_data.json";
import "../../styles/main.scss";
import "../../styles/Matchmaking.scss";
import { QuestionContext } from "./QuestionContext";
import { computeCompatibility, computeSimilarity } from "components/utility";
import {
  IconHeart,
  IconHome,
  IconRefresh,
  IconRepeat,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import aira from "assets/AIRABU_big.png";

export default function Results() {
  const questionContext = React.useContext(QuestionContext);
  const { userInfo, resetQuiz } = questionContext;

  const navigate = useNavigate();

  const [flipCard, setFlip] = React.useState(false);
  const [loadedImages, setLoadedImages] = React.useState<number[]>([]);

  const yourType = React.useMemo(() => {
    if (userInfo) return computeSimilarity(userInfo as UserInfo, chara_data)[0];
  }, [userInfo]);

  const lover = React.useMemo(() => {
    if (userInfo)
      return yourType &&
        yourType.first_name ===
          computeCompatibility(userInfo as UserInfo, chara_data)[0].first_name
        ? computeCompatibility(userInfo as UserInfo, chara_data)[1]
        : computeCompatibility(userInfo as UserInfo, chara_data)[0];
  }, [userInfo, yourType]);

  const otherResults = React.useMemo(() => {
    if (userInfo && yourType && lover) {
      return computeCompatibility(userInfo as UserInfo, chara_data).filter(
        (chara) =>
          chara.first_name !== yourType.first_name &&
          chara.first_name !== lover.first_name
      );
    }
  }, [userInfo, yourType, lover]);

  return (
    <>
      <div
        id="loading"
        style={{
          display: loadedImages.length === 0 ? "flex" : "none",
        }}
      >
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: -300 }}
          transition={{ duration: 1 }}
        >
          <img src={aira} alt="lovely cupid loading" />
        </motion.div>
      </div>
      <section
        id="results-container"
        style={{
          display: loadedImages.length > 0 ? "block" : "none",
        }}
      >
        <h1>Here are your results!</h1>
        {yourType && lover && (
          <>
            <section id="cards-desktop">
              {yourType && (
                <div className="result-card">
                  <strong>You're most similar to...</strong>
                  <div className="card-container" id="you">
                    <img
                      src={yourType.card}
                      alt={yourType.first_name}
                      onLoad={() => {
                        const newArray = [...loadedImages, 1];
                        setLoadedImages(newArray);
                      }}
                    />
                  </div>
                  <div className="special-text">
                    {yourType.first_name} {yourType.last_name}
                  </div>
                </div>
              )}
              {lover && (
                <div className="result-card">
                  <strong>You're most compatible with...</strong>
                  <div className="card-container" id="bae">
                    <img
                      src={lover.card}
                      alt={lover.first_name}
                      onLoad={() => {
                        const newArray = [...loadedImages, 2];
                        setLoadedImages(newArray);
                      }}
                    />
                  </div>
                  <div className="special-text">
                    {lover.first_name} {lover.last_name}
                  </div>
                </div>
              )}
            </section>
            <section id="cards-mobile">
              <div id="result-card-container">
                {flipCard ? (
                  <strong>You're most compatible with...</strong>
                ) : (
                  <strong>You're most similar to...</strong>
                )}
                <div id="flip-notice">
                  <IconRepeat size={28} />
                  <div>Tap to flip!</div>
                </div>
                <div
                  id="result-card"
                  className={flipCard ? "flip" : ""}
                  onClick={() => setFlip(!flipCard)}
                >
                  <div className="card-side" id="card-front">
                    <div className="card-name">
                      {yourType.first_name} {yourType.last_name}
                    </div>
                    <div className="card-img">
                      <img src={yourType.card} alt={yourType.first_name} />
                    </div>
                  </div>
                  <div className="card-side" id="card-back">
                    <div className="card-name">
                      {lover.first_name} {lover.last_name}
                    </div>
                    <div className="card-img">
                      <img src={lover.card} alt={lover.first_name} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="silly">
              <h2>
                <em>
                  &ldquo;Just a
                  {["a", "e", "i", "o", "u"].includes(
                    yourType.first_name[0].toLowerCase()
                  )
                    ? "n"
                    : ""}{" "}
                  {yourType.first_name} looking for my {lover.first_name}...
                </em>
                😔🤙<em>&rdquo;</em>
              </h2>
              <p>
                Go seek out those with a {lover.first_name} personality type!
              </p>
            </section>
            <section id="total-compatibility">
              <h1>Overall compatibility</h1>
              <div id="compat-heart">
                <div
                  style={{
                    zIndex: 5,
                  }}
                >
                  {lover.compat_val}%
                </div>
                <motion.div
                  id="compat-heart-icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: (lover.compat_val as number) / 100 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <IconHeart />
                </motion.div>
              </div>
            </section>
            <section id="other-results">
              <h2>Here's where other personality types placed</h2>
              <div id="table">
                {otherResults &&
                  otherResults.map((chara) => (
                    <div className="row" key={chara.first_name}>
                      <div className="name">
                        {chara.first_name} {chara.last_name}
                      </div>
                      <div className="divider"></div>
                      <div className="val">{chara.compat_val}%</div>
                    </div>
                  ))}
              </div>
            </section>
            <section id="final-nav">
              <button onClick={() => navigate("/")}>
                <IconHome size={36} color="white" />
                <span>Go home</span>
              </button>
              <button onClick={resetQuiz}>
                <IconRefresh size={36} color="white" />
                <span>Restart quiz</span>
              </button>
            </section>
          </>
        )}
      </section>
    </>
  );
}
