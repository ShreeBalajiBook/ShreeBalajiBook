"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import playstore from "../../assets/play_store.png";
import appstore from "../../assets/app_store.png";
import metatrader from "../../assets/metatrader-5-logo.png";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

// import tradingvideo from "";
import "./meta.css";
import { useRef, useState } from "react";

const MetaTrading = () => {
  const [isVideoplayed, setIsVideoPlayed] = useState(false);
  const vidref = useRef();

  const handleCLick = () => {
    setIsVideoPlayed((prevPlayVideo) => !prevPlayVideo);

    if (isVideoplayed) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };
  return (
    <>
      <div className="meta-trading">
        <div className="meta-trading-banner">
          <div className="meta-trader_title">
            <h1>META TRADING</h1>
            <p>Gold market - Silver market - NSC - Forex - Stocks</p>
          </div>
        </div>
        <div className="meta-trading-download">
          <h4>Join the Experince</h4>
          <h2>Download the App</h2>
          <div className="meta-trading-meta_trader_5">
            <Image src={metatrader} alt="metatrader" />
          </div>
          <div className="meta-trading_download_buttons">
            <div className="meta-trading_download_buttons-button">
              <span>
                <Image
                  src={playstore}
                  height={25}
                  width={25}
                  style={{ marginRight: "5px", marginTop: "5px" }}
                  alt="meta_trader_data"
                />
              </span>
              Play Store
            </div>
            <div className="meta-trading_download_buttons-button">
              <span>
                <Image
                  src={appstore}
                  height={25}
                  width={25}
                  style={{ marginRight: "5px", marginTop: "5px" }}
                  alt="meta-trader-data"
                />
              </span>
              App Store
            </div>
          </div>
        </div>
        <div className="meta-trading_tutorial">
          <div className="meta-trading_line" />
          <div className="meta-trading_tutorial-title">
            <h3>STEP-BY-STEP TUTORIAL</h3>
            <p>HOW TO START YOUR TRADING JOURNEY WITH METATRADER 5</p>
          </div>
          <div className="meta-trading_tutorial-video">
            <video src="videos/trading.mp4" ref={vidref} />
            <div className="meta-trading-video-control">
              {isVideoplayed ? (
                <BsPauseFill
                  size={30}
                  onClick={handleCLick}
                  style={{ opacity: "0.5" }}
                />
              ) : (
                <BsFillPlayFill
                  size={30}
                  onClick={handleCLick}
                  style={{ opacity: "0.5" }}
                />
              )}
            </div>
          </div>
          <div className="meta-trading_tutorial-photos">
            <div className="meta-trading_tutoial-photo">
              <h1>image</h1>
            </div>
            <div className="meta-trading_tutoial-photo">
              <h1>image</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrading;
