// import Car from "../components/Car/Car";
"use client";

import StarField from "../components/StarField/StarField";
import Sphere from "../assets/images/svg/globe.svg";
import Image from "next/image";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const target = window.document.getElementsByTagName("h2")[0];

    const flickerLetter = (letter) =>
      `<span style="animation: text-flicker-in-glow ${
        Math.random() * 4
      }s linear both ">${letter}</span>`;
    const colorLetter = (letter) =>
      `<span style="color: hsla(${
        Math.random() * 360
      }, 100%, 80%, 1);">${letter}</span>`;
    const flickerAndColorText = (text) =>
      text.split("").map(flickerLetter).map(colorLetter).join("");
    const neonGlory = (target) =>
      (target.innerHTML = flickerAndColorText(target.textContent));

    neonGlory(target);
    target.onclick = ({ target }) => neonGlory(target);
  }, []);
  return (
    <div className="comming_soon">
      <div className="data">
        <Image src={Sphere} alt="sphere" height={50} width={50} />
        <h2 className="neonText">Coming Soon</h2>
      </div>
      {/* <Sphere imagePath={"../assets/images/svg/globe.svg"} /> */}
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

export default HomePage;
