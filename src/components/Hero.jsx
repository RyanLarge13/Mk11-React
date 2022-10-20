import React from "react";
import { styles, layouts } from "../styles";
import { logoYellow, katana, noob } from "../assets";
import { Button } from "./Header";

const Hero = () => {
  return (
    <>
      <section className={`${layouts.fullCol}`}>
        <img
          src={noob}
          alt="noob"
          className={`h-[75vh] w-[40vw] absolute right-[-90px] xxs:h-[20%] xxs:w-[35%] xxs:right-[0] xxs:top-[20%]`}
        />
        <img
          className="w-[50%] h-[50%] xxs:w-[100%]"
          src={logoYellow}
          alt="mk11 logo"
        />
        <img
          src={katana}
          alt="katana"
          className={`scale-50 absolute left-0 xxs:h-[20%] xxs:w-[30%] xxs:top-[20%]`}
        />
        <Button name="Play!!" />
      </section>
    </>
  );
};

export default Hero;
