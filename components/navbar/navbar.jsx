"use client";
import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isToggle, setisToggle] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" style={{textDecoration: "none"}}>
        <h1>Shree Balaji Book</h1>
      </Link>
      <div className="navbar-links large_device">
        <a href="/">Home</a>
        <a href="/meta-trading">Meta Trading</a>
        <a href="/">About</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="small_device">
        {isToggle ? (
          <MdOutlineCancel
            color="white"
            size={30}
            style={{ marginTop: "2px" }}
            onClick={() => setisToggle(false)}
          />
        ) : (
          <AiOutlineMenu
            color="white"
            size={25}
            style={{ marginTop: "2px" }}
            onClick={() => setisToggle(true)}
          />
        )}
        {isToggle && (
          <div className="toggle-navbar">
            <div className="toggle-navbar_links">
              <a href="/">Home</a>
              <a href="/meta-trading">Meta Trading</a>
              <a href="/">About</a>
              <a href="#Contact">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
