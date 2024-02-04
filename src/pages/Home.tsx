import "../styles/main.scss";
import "../styles/Home.scss";
import aira from "../assets/AIRABU_big.png";
import { IconHeart } from "@tabler/icons-react";
import { clsx } from "clsx";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main id="home">
        <section className="home-section" id="top">
          <h1>You can call me the Lovely Cupid~!</h1>
          <div id="aira">
            <img src={aira} alt="the lovely cupid, aira shiratori" />
          </div>
        </section>
        <section className="home-section" id="bottom">
          <div id="button-links">
            <div className="button-container">
              <div className="button" id="button-rot-left">
                <span>Matchmaking</span>
                <IconHeart />
              </div>
              <div className="page-desc left">
                Find your personality type, along with your most compatible
                type!
              </div>
            </div>
            <div className="button-container">
              <div className="button" id="button-rot-right">
                <span>Compatibility</span>
                <IconHeart />
              </div>
              <div className="page-desc right">
                See how compatible a pair of characters are with a classic love
                calculator!
              </div>
            </div>
          </div>
        </section>
        <section id="falling-hearts">
          {Array.from(new Array(10).keys()).map((heart) => (
            <div id={`heart-${heart}`} className={clsx("heart", heart)}>
              <IconHeart size={30} />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
