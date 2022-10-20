import React, { useState } from "react";
import { main } from "../assets";
import { motion } from "framer-motion";
import { xbox, pc, ps5 } from "../assets";
import { styles, components, layouts } from "../styles.js";

export const Button = (props) => {
  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className={`${styles.button} ${props.class}`}
      >
        {props.name}
      </motion.button>
    </>
  );
};

const Header = () => {
  const todaysDate = new Date().getFullYear();

  return (
    <>
      <section className={`${layouts.fullCol} flex justify-evenly`}>
        <motion.img
          src={main}
          whileInView={{ opacity: 1 }}
          className="w-[90vw] h-[90vh] rounded-xl opacity-0 xxs:w-[100vw] xxs:h-[35vh] absolute top-0"
        />

        <motion.div
          animate={{ x: 25, y: 75, opacity: 1 }}
          className={`${components.cards} ${styles.slateRight}`}
        >
          <h2 className={`${styles.heading2}`}>
            Become a <strong className={`${styles.strongLeft}`}>pro!</strong>
          </h2>
          <p className={styles.paragraph1}>
            You handle the research, we handle the content...
          </p>
        </motion.div>

        <motion.div
          transition={{ delay: 0.25 }}
          animate={{ x: 75, y: 220, opacity: 1 }}
          className={`${components.cards} ${styles.slateLeft}`}
        >
          <h2 className={`${styles.heading2}`}>Compete!!</h2>
          <p className={styles.paragraph1}>
            Sign up and compete in the champion leagues against <br /> the{" "}
            <strong className="text-yellow-500">BEST</strong> of the best.
          </p>
        </motion.div>

        <motion.div
          transition={{ delay: 0.5 }}
          animate={{ x: 100, y: 375, opacity: 1 }}
          className={`${components.cards} ${styles.slateRight}`}
        >
          <h2 className={`${styles.heading2}`}>Latest Content</h2>
          <p className={styles.paragraph1}>
            What is <strong className="text-orange-400">NEW</strong> is from
            you, if your interested in showing your skills <br /> let us take
            your knowledge and{" "}
            <strong className="text-orange-400 font-bold">SHARE IT.</strong>.
          </p>
        </motion.div>

        <motion.div
          transition={{ delay: 0.75 }}
          animate={{ opacity: 1 }}
          className="absolute flex flex-row w-[100vw] h-[9vh] bottom-0 justify-around opacity-0"
        >
          <img src={xbox} alt="xbox" />
          <img src={pc} alt="xbox" />
          <img src={ps5} alt="xbox" />
        </motion.div>

        <motion.div
          transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
          animate={{ x: -550, stiffness: 2 }}
          className={`${styles.slateRight} lg:bottom-20 absolute w-[20vw] h-[75vh] flex flex-col justify-center right-[-500px] bottom-40 bg-gradient-to-tl rounded-xl p-[2em] text-white shadow-2xl xxs:w-[50vw] xxs:h-[50vh] xxs:hidden`}
        >
          <h1 className={`${styles.heading2} font-serif`}>
            Welcome To...{" "}
            <strong className={`${styles.strongRight} -translate-x-full`}>
              MK11
            </strong>
          </h1>
          <p className={`${styles.paragraph1}`}>
            This is the hub for{" "}
            <strong className="text-yellow-500 font-bold">
              MK11 {todaysDate}
            </strong>{" "}
            fanatics and fans to learn, grow, and become apart of the gaming
            world like they have ever seen before.{" "}
            <strong className="text-orange-400 font-bold">WELCOME</strong> to
            the community and don't forget to become a...{" "}
            <strong className={`${styles.strongRight}`}>member!</strong>
          </p>
          <Button name="Join!" />
        </motion.div>
      </section>
    </>
  );
};

export default Header;
