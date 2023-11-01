"use client";

import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import "./liverates.css";
import { useEffect, useState } from "react";

const LiveRates = () => {
  const [metalrates, setMetalRates] = useState([]);

  useEffect(() => {
    const fetchmetals = async () => {
      const response = await fetch("/api/metals");
      const data = await response.json();
      setMetalRates(data);
    };

    fetchmetals();
    // fetchenergy();
  });

  return (
    <div className="liverates">
      <div className="Liverates-title">
        <h1>LIVE RATES</h1>
        <div className="liverate_red-dot" />
      </div>
      <h5>Domestic</h5>
      <div className="slider">
        {/* i have add the commodity 7 * 2 = 14 to make is smooth no stopping or lagging */}
        <div className="slide-track">
          <div className="liverate-slide">
            <p>MCX GOLD:</p>
            <p
              className={
                metalrates.mcxgold &&
                metalrates.mcxgold.Last >= metalrates["mcxgold"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxgold ? metalrates["mcxgold"]["Last"] : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxgold &&
              metalrates.mcxgold.Last >= metalrates["mcxgold"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX SILVER:</p>
            <p
              className={
                metalrates.mcxsilver &&
                metalrates.mcxsilver.Last >= metalrates["mcxsilver"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxsilver
                ? metalrates["mcxsilver"]["Last"]
                : "loading..."}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxsilver &&
              metalrates.mcxsilver.Last >= metalrates["mcxsilver"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX LEAD:</p>
            <p
              className={
                metalrates.mcxlead &&
                metalrates.mcxlead.Last >= metalrates["mcxlead"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxlead ? metalrates["mcxlead"]["Last"] : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxlead &&
              metalrates.mcxlead.Last >= metalrates["mcxlead"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX ZINC:</p>
            <p
              className={
                metalrates.mcxzinc &&
                metalrates.mcxzinc.Last >= metalrates["mcxzinc"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxzinc ? metalrates["mcxzinc"]["Last"] : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxzinc &&
              metalrates.mcxzinc.Last >= metalrates["mcxzinc"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX CRUDEOIL:</p>
            <p
              className={
                metalrates.mcxcrudeoil &&
                metalrates.mcxcrudeoil.Last >=
                  metalrates["mcxcrudeoil"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxcrudeoil
                ? metalrates["mcxcrudeoil"]["Last"]
                : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxcrudeoil &&
              metalrates.mcxcrudeoil.Last >=
                metalrates["mcxcrudeoil"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX NATURALGAS:</p>
            <p
              className={
                metalrates.mcxnaturalgas &&
                metalrates.mcxnaturalgas.Last >=
                  metalrates["mcxnaturalgas"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxnaturalgas
                ? metalrates["mcxnaturalgas"]["Last"]
                : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxnaturalgas &&
              metalrates.mcxnaturalgas.Last >=
                metalrates["mcxnaturalgas"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX COPPER:</p>
            <p
              className={
                metalrates.mcxcopper &&
                metalrates.mcxcopper.Last >= metalrates["mcxcopper"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxcopper
                ? metalrates["mcxcopper"]["Last"]
                : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxcopper &&
              metalrates.mcxcopper.Last >= metalrates["mcxcopper"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX GOLD:</p>
            <p
              className={
                metalrates.mcxgold &&
                metalrates.mcxgold.Last >= metalrates["mcxgold"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxgold ? metalrates["mcxgold"]["Last"] : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxgold &&
              metalrates.mcxgold.Last >= metalrates["mcxgold"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX SILVER:</p>
            <p
              className={
                metalrates.mcxsilver &&
                metalrates.mcxsilver.Last >= metalrates["mcxsilver"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxsilver
                ? metalrates["mcxsilver"]["Last"]
                : "loading..."}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxsilver &&
              metalrates.mcxsilver.Last >= metalrates["mcxsilver"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX LEAD:</p>
            <p
              className={
                metalrates.mcxlead &&
                metalrates.mcxlead.Last >= metalrates["mcxlead"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxlead ? metalrates["mcxlead"]["Last"] : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxlead &&
              metalrates.mcxlead.Last >= metalrates["mcxlead"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX ZINC:</p>
            <p
              className={
                metalrates.mcxzinc &&
                metalrates.mcxzinc.Last >= metalrates["mcxzinc"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxzinc ? metalrates["mcxzinc"]["Last"] : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxzinc &&
              metalrates.mcxzinc.Last >= metalrates["mcxzinc"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX CRUDEOIL:</p>
            <p
              className={
                metalrates.mcxcrudeoil &&
                metalrates.mcxcrudeoil.Last >=
                  metalrates["mcxcrudeoil"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxcrudeoil
                ? metalrates["mcxcrudeoil"]["Last"]
                : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxcrudeoil &&
              metalrates.mcxcrudeoil.Last >=
                metalrates["mcxcrudeoil"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX NATURALGAS:</p>
            <p
              className={
                metalrates.mcxnaturalgas &&
                metalrates.mcxnaturalgas.Last >=
                  metalrates["mcxnaturalgas"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxnaturalgas
                ? metalrates["mcxnaturalgas"]["Last"]
                : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxnaturalgas &&
              metalrates.mcxnaturalgas.Last >=
                metalrates["mcxnaturalgas"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
          <div className="liverate-slide">
            <p>MCX COPPER:</p>
            <p
              className={
                metalrates.mcxcopper &&
                metalrates.mcxcopper.Last >= metalrates["mcxcopper"]["Prev."]
                  ? "co-green"
                  : "co-red"
              }
            >
              {metalrates.mcxcopper
                ? metalrates["mcxcopper"]["Last"]
                : "loading"}
            </p>
            <div className="arrow-live_rate">
              {metalrates.mcxcopper &&
              metalrates.mcxcopper.Last >= metalrates["mcxcopper"]["Prev."] ? (
                <BiSolidUpArrow size={10} color="green" />
              ) : (
                <BiSolidDownArrow size={10} color="red" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* International */}
      {/* <h5>International</h5>
      <div className="liverates-rates"></div> */}
    </div>
  );
};

export default LiveRates;
