import React from 'react'
import bannerimage from "../../assets/tradingimage.jpg";
import Image from "next/image";
import './banners.css'

const Banners = () => {
  return (
    <div className="banners">
      <Image src={bannerimage} alt="banner-promotion" />
      <div className="banners-title">
        <h1>Welcome To</h1>
        <h1>Shree Balaji Book</h1>
      </div>
    </div>
  );
}

export default Banners