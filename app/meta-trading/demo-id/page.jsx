"use client";

import React, { useState } from "react";
import "./demoid.css";
import { AiOutlineCopy } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import Image from "next/image";
import cash from "../../../assets/cash.png"
const DemoIdPage = () => {
  const [copied, setcopied] = useState("");

  const demoid1 = {
    _ID: 200,
    TITLE: "DEMO 001",
    ID: "460060",
    PASSWORD: "Abc@12345",
  };
  const demoid2 = {
    _ID: 201,
    TITLE: "DEMO 002",
    ID: "460061",
    PASSWORD: "Abc@12345",
  };
  const demoid3 = {
    _ID: 202,
    TITLE: "DEMO 003",
    ID: "460062",
    PASSWORD: "Abc@12345",
  };

  const handlecopy = (data) => {
    setcopied(data);
    navigator.clipboard.writeText(data);
    setTimeout(() => setcopied(""), 3000);
  };

  const handlepasswordcopy = (data, demoid) => {
        setcopied(demoid);
        navigator.clipboard.writeText(data);
        setTimeout(() => setcopied(""), 3000);
  }
  return (
    <div className="demoid-container">
      <h1>Demo ID</h1>
      <p>COPY THE DEMO ID AND PASSWORD</p>
      {/* demo 001 */}
      <Image className="cash-1" src={cash} height={60} width={60} />
      <div className="demoid-container_demi-ids_1">
        <div className="demoid-container_demo-ids">
          <h3>{demoid1.TITLE}</h3>
          <div className="demoid-container_demo-ids_links_1">
            <p>ID: {demoid1.ID}</p>
            {copied === demoid1.ID ? (
              <FcCheckmark />
            ) : (
              <AiOutlineCopy
                color="tomato"
                onClick={() => handlecopy(demoid1.ID)}
              />
            )}
          </div>
          <div className="demoid-container_demo-ids_links_2">
            <p>PASSWORD: {demoid1.PASSWORD}</p>
            {copied === demoid1._ID ? (
              <FcCheckmark />
            ) : (
              <AiOutlineCopy
                color="tomato"
                onClick={() =>
                  handlepasswordcopy(demoid1.PASSWORD, demoid1._ID)
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* demo 002 */}
      <div className="demoid-container_demo-ids">
        <h3>{demoid2.TITLE}</h3>
        <div className="demoid-container_demo-ids_links_1">
          <p>ID: {demoid2.ID}</p>
          {copied === demoid2.ID ? (
            <FcCheckmark />
          ) : (
            <AiOutlineCopy
              color="tomato"
              onClick={() => handlecopy(demoid2.ID)}
            />
          )}
        </div>
        <div className="demoid-container_demo-ids_links_2">
          <p>PASSWORD: {demoid2.PASSWORD}</p>
          {copied === demoid2._ID ? (
            <FcCheckmark />
          ) : (
            <AiOutlineCopy
              color="tomato"
              onClick={() => handlepasswordcopy(demoid2.PASSWORD, demoid2._ID)}
            />
          )}
        </div>
      </div>

      {/* demo 003 */}
      <div className="demoid-container_demi-ids_3">
        <div className="demoid-container_demo-ids">
          <h3>{demoid3.TITLE}</h3>
          <div className="demoid-container_demo-ids_links_1">
            <p>ID: {demoid3.ID}</p>
            {copied === demoid3.ID ? (
              <FcCheckmark />
            ) : (
              <AiOutlineCopy
                color="tomato"
                onClick={() => handlecopy(demoid3.ID)}
              />
            )}
          </div>
          <div className="demoid-container_demo-ids_links_2">
            <p>PASSWORD: {demoid3.PASSWORD}</p>
            {copied === demoid3._ID ? (
              <FcCheckmark />
            ) : (
              <AiOutlineCopy
                color="tomato"
                onClick={() =>
                  handlepasswordcopy(demoid3.PASSWORD, demoid3._ID)
                }
              />
            )}
          </div>
        </div>
      </div>
      <Image className="cash-2" src={cash} height={60} width={60} />
    </div>
  );
};

export default DemoIdPage;
