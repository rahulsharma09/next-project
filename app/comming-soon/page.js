// import Car from "../components/Car/Car";
"use client";

import StarField from "../components/StarField/StarField";
import SphereImage from "../assets/images/svg/globe.svg";
import Sphere from "../components/Sphere/Sphere";
import Image from "next/image";
import { useEffect } from "react";

const CommingSoon = () => {
  useEffect(() => {
    // const target = window.document.getElementsByTagName("h2")[0];

    // const flickerLetter = (letter) =>
    //   `<span style="animation: text-flicker-in-glow ${
    //     Math.random() * 4
    //   }s linear both ">${letter}</span>`;
    // const colorLetter = (letter) =>
    //   `<span style="color: hsla(${
    //     Math.random() * 360-
    //   }, 100%, 80%, 1);">${letter}</span>`;
    // const flickerAndColorText = (text) =>
    //   text.split("").map(flickerLetter).map(colorLetter).join("");
    // const neonGlory = (target) =>
    //   (target.innerHTML = flickerAndColorText(target.textContent));

    // neonGlory(target);
    // target.onclick = ({ target }) => neonGlory(target);
  }, []);

  const handleClick = async () => {
    try {
      const response = await fetch('/api/updateSheet', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        console.log('Data written to the sheet successfully.');
      } else {
        console.error('Error writing data to the sheet: ', data.error);
      }
    } catch (error) {
      console.error('Error writing data to the sheet: ', error);
    }
  };

  return (
    <div className="comming_soon">
      <div className="data">
        <Image src={SphereImage} alt="sphere" height={50} width={50} />
        <h2 className="">Artificial Intelligence</h2>
        <p className="description">We are building our <span>Brain</span></p>

        <div className="news-letter">
          <p>Subscribe to our newsletter</p>
          <input type="text" />
          <br />
          <button className="btn_subscribe">Subscribe</button>
        </div>
      </div>
      {/* <Sphere /> */}
      {/* <Car /> */}
      <StarField
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    </div>
  );
};

export default CommingSoon;
