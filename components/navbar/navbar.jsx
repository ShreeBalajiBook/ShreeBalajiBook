"use client";
import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
import logo from "../../assets/logo-white.png"
import Image from "next/image";

const Navbar = () => {
  const [isToggle, setisToggle] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" style={{textDecoration: "none"}}>
        <div className="navbar_brand">

        <Image src={logo} height={50} width={50}/>
        <h1>Shree Balaji Book</h1>
        </div>
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
