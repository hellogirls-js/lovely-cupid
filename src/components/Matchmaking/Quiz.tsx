import Button from "components/Button";
import Select from "components/Select";
import {
  MBTI_MAP,
  BLOOD_MAP,
  VALUE_TO_SIGN,
  COLOR_MAP,
} from "data/matching_data";
import React from "react";
import { QuestionTitle, QuestionDescription } from "./Question";
import { QuestionContext } from "./QuestionContext";
import RadioButton from "./RadioButton";
import aira from "assets/AIRABU_big.png";
import "styles/main.scss";
import "styles/Matchmaking.scss";

export default function Quiz() {
  const questionContext = React.useContext(QuestionContext);
  const {
    formRef,
    questionIndex,
    setQuestionIndex,
    setMbtiVal,
    setBloodVal,
    setSignsVal,
    setFlavorVal,
    setColorVal,
    goBack,
    goForward,
    showNextButton,
  } = questionContext;

  return (
    <>
      <section id="question-container">
        <h1>
          <QuestionTitle />
        </h1>
        <section id="description">
          <QuestionDescription />
        </section>
        {formRef && (
          <form id="quiz" ref={formRef}>
            <section
              id="mbti"
              style={{
                display: questionIndex === 0 ? "block" : "none",
              }}
            >
              <Select
                label="MBTI"
                onChange={(event) => {
                  setMbtiVal(event.target.value);
                }}
                placeholder="Select your MBTI"
                options={[
                  {
                    value: "undefined",
                    label: "I don't know",
                  },
                ].concat(
                  Object.keys(MBTI_MAP).map((mbti) => ({
                    value: mbti,
                    label: mbti,
                  }))
                )}
              />
            </section>
            <section
              id="blood-type"
              style={{
                display: questionIndex === 1 ? "flex" : "none",
              }}
            >
              {Object.keys(BLOOD_MAP).map((type) => (
                <RadioButton
                  key={type}
                  aria-label={type}
                  name="blood-type"
                  value={type}
                  id={`blood-type-${type}`}
                  onChange={(event) => {
                    setBloodVal(event.target.value as BloodType);
                  }}
                />
              ))}
              <div id="blood-idk">
                <input
                  type="radio"
                  name="blood-type"
                  value="undefined"
                  id="blood-type-null"
                  onChange={(event) => {
                    setBloodVal(event.target.value as BloodType);
                  }}
                />
                <label htmlFor="blood-type-null">I don't know</label>
              </div>
            </section>
            <section
              id="horoscope"
              style={{
                display: questionIndex === 2 ? "block" : "none",
              }}
            >
              <Select
                label="Sun sign"
                options={VALUE_TO_SIGN.map((sign, index) => ({
                  label: sign,
                  value: index.toString(),
                }))}
                placeholder="Choose your sun sign"
                onChange={(event) => {
                  setSignsVal((prev) => ({
                    ...prev,
                    sun: parseInt(event.target.value),
                  }));
                }}
              />
              <Select
                label="Moon sign"
                options={VALUE_TO_SIGN.map((sign, index) => ({
                  label: sign,
                  value: index.toString(),
                }))}
                placeholder="Choose your moon sign"
                onChange={(event) => {
                  setSignsVal((prev) => ({
                    ...prev,
                    moon: parseInt(event.target.value),
                  }));
                }}
              />
              <Select
                label="Venus sign"
                options={VALUE_TO_SIGN.map((sign, index) => ({
                  label: sign,
                  value: index.toString(),
                }))}
                placeholder="Choose your venus sign"
                onChange={(event) => {
                  setSignsVal((prev) => ({
                    ...prev,
                    venus: parseInt(event.target.value),
                  }));
                }}
              />
            </section>
            <section
              id="flavor"
              style={{
                display: questionIndex === 3 ? "flex" : "none",
              }}
            >
              <RadioButton
                aria-label="Sweet"
                value="sweet"
                name="flavor"
                onChange={(event) =>
                  setFlavorVal(event.target.value as keyof typeof Flavor)
                }
              />
              <RadioButton
                aria-label="Spicy"
                value="spicy"
                name="flavor"
                onChange={(event) =>
                  setFlavorVal(event.target.value as keyof typeof Flavor)
                }
              />
            </section>
            <section
              id="color"
              style={{
                display: questionIndex === 4 ? "flex" : "none",
              }}
            >
              <Select
                label="Favorite color"
                placeholder="Choose your favorite color"
                options={Object.keys(COLOR_MAP).map((color) => ({
                  value: color,
                  label: `${color[0].toLocaleUpperCase()}${color.slice(1)}`,
                }))}
                onChange={(event) =>
                  setColorVal(event.target.value as keyof typeof COLOR_MAP)
                }
              />
            </section>
          </form>
        )}
        <section id="nav-buttons">
          {questionIndex === undefined ? (
            <Button
              aria-label="Start!"
              onClick={() => {
                setQuestionIndex(0);
              }}
            />
          ) : (
            <>
              {questionIndex > 0 && (
                <Button aria-label="Go back" onClick={goBack} />
              )}
              {showNextButton && (
                <Button
                  id="next-question-button"
                  aria-label="Next"
                  onClick={goForward}
                />
              )}
            </>
          )}
        </section>
      </section>
      <div id="aira">
        <img src={aira} alt="aira shiratori" />
      </div>
    </>
  );
}
