import { styles, components, layouts } from "../styles";
import { kollector } from "../assets";
import { Button } from "./Header";

const WhatIsNew = () => {
  return (
    <>
      <section className={`${layouts.fullCol}`}>
        <img
          src={kollector}
          alt="kollector"
          className="z-0 absolute w-[90vw] h-[100vh] xxs:h-[45vh] xxs:top-[10%]"
        />
        <h2
          className={`${styles.heading2} ${styles.strongRight} font-serif z-10 absolute left-10 bottom-[30%]`}
        >
          Checkout what is new <br />
          this month...
        </h2>
        <p
          className={`absolute bottom-20 left-10 ${styles.paragraph1} z-10 xxs:bottom-[15%]`}
        >
          <strong className={`${styles.strongLeft}`}>Kollector</strong> is
          featured this month as the top character to learn. <br /> Praised for
          his mixture of range and his unblockable command grab. Kollector is
          ranked as <strong className={`${styles.strongRight}`}>A</strong> teer.
        </p>
        <Button
          name="READ MORE"
          class="absolute bottom-0 left-10 xxs:bottom-[1em]"
        />
      </section>
    </>
  );
};

export default WhatIsNew;
