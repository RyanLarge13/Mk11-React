import { styles, components, layouts } from "../styles";
import { mkDragon } from "../assets";
import { Button } from "./Header";
import { videos } from "../constants/const";
import { motion } from "framer-motion";

const Tutorials = () => {
  return (
    <section className={`${layouts.fullCol}`}>
      <img
        src={mkDragon}
        alt="background"
        className={`w-[25vw] h-[100vh] absolute left-0 rounded-xl xxs:w-[75vw]`}
      />
      <div
        className={`py-[5em] px-[5em] overflow-auto absolute right-0 flex flex-col justify-start max-w-[75vw] h-[100vh] xxs:overflow-x-hidden xxs:translate-x-[-10%]`}
      >
        {videos.map((video) => (
          <motion.div
            className={`${components.videos} ${
              video.id % 2 === 0 ? styles.slateRight : styles.slateLeft
            } my-2`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <h2 key={video.title} className={`${styles.heading2}`}>
              {video.title}
            </h2>
            <p key={video.id} className={`${styles.paragraph1}`}>
              {video.paragraph}
            </p>
            <Button name="Watch Now!" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
