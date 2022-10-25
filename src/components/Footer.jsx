import { styles, components, layouts } from "../styles";

const Footer = () => {
  const date = new Date().getFullYear;

  return (
    <>
      <section
        className={`${layouts.smallCol} xxs:hidden`}
      >
        <p className={`${styles.paragraph1}`}>
          MK11 All Rights Reserved {date}
        </p>
      </section>
    </>
  );
};

export default Footer;
