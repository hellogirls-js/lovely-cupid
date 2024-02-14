import { IconHeart, IconHome } from "@tabler/icons-react";
import FallingHearts from "components/FallingHearts";
import Footer from "components/Footer";
import Select from "components/Select";
import { charaCompatibility } from "components/utility";
import chara_data from "data/chara_data.json";
import React from "react";

import airabu from "assets/AIRABU_small_1.png";
import "styles/Compatibility.scss";
import { Link } from "react-router-dom";

export default function Compatibility() {
  const [charaLeft, setCharaLeft] = React.useState<CharacterInfo>();
  const [charaRight, setCharaRight] = React.useState<CharacterInfo>();

  const compatibility =
    charaLeft && charaRight
      ? charaCompatibility(charaLeft, charaRight)
      : undefined;

  return (
    <>
      <Footer />
      <main id="compatibility">
        <div id="heading">
          <Link to="/">
            <IconHome />
          </Link>
          <h1>Love Calculator</h1>
          <img src={airabu} alt="mini aira" />
        </div>
        <p>
          View how compatible characters are with this old fashioned love
          calculator! Just as a disclaimer, this is not based in any science.
          It's all for fun! Enjoy~
        </p>
        <section id="compat-container">
          <div className="dropdown">
            <div className="avatar-container">
              {charaLeft ? (
                <img src={charaLeft.card} alt={charaLeft.first_name} />
              ) : (
                <IconHeart />
              )}
            </div>
            <Select
              label="Character"
              placeholder="Choose a lucky bachelor"
              options={chara_data.map((chara) => ({
                label: `${chara.first_name} ${chara.last_name}`,
                value: chara.first_name,
              }))}
              onChange={(event) => {
                const firstName = event.target.value;
                const findFullData = chara_data.find(
                  (chara) => chara.first_name === firstName
                );
                setCharaLeft(findFullData);
              }}
            />
          </div>
          <div id="compat-value">
            <div>{compatibility ? compatibility + "%" : "??"}</div>
            <div
              id="value-heart"
              style={{
                transform: `scale(${compatibility ?? 0}%)`,
              }}
            >
              <IconHeart
                style={{
                  fill: `hsla(350, ${
                    compatibility ? 75 * (compatibility / 100) : 0
                  }%, 70%, ${compatibility ? `${compatibility}%` : "0%"})`,
                }}
              />
            </div>
          </div>
          <div className="dropdown">
            <div className="avatar-container">
              {charaRight ? (
                <img src={charaRight.card} alt={charaRight.first_name} />
              ) : (
                <IconHeart />
              )}
            </div>
            <Select
              label="Character"
              placeholder="Choose a lucky bachelor"
              options={chara_data.map((chara) => ({
                label: `${chara.first_name} ${chara.last_name}`,
                value: chara.first_name,
              }))}
              onChange={(event) => {
                const firstName = event.target.value;
                const findFullData = chara_data.find(
                  (chara) => chara.first_name === firstName
                );
                setCharaRight(findFullData);
              }}
            />
          </div>
        </section>
      </main>
      <FallingHearts opacity={0.4} />
    </>
  );
}
