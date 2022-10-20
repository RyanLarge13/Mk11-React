import { styles, components, layouts } from "../styles";
import { Button } from "./Header";
import { SubZero } from "../assets";

const SignUp = () => {
  return (
    <>
      <section className={`${layouts.fullCol} relative`}>
        <img
          src={SubZero}
          alt="subzero"
          className="absolute -left-10 h-[100vh] w-[100vw] z-0 rounded-lg xxs:h-[40vh] xxs:top-0"
        />
        <form
          className={`flex flex-col absolute right-[10%] rounded-lg w-fit p-10 bg-gradient-to-r xxs:w-[50vw] ${styles.slateRight}`}
        >
          <label htmlFor="name" className={`${styles.label}`}>
            Name
          </label>
          <input type="text" id="name" className={`${styles.input}`} />
          <label htmlFor="password" className={`${styles.label}`}>
            Password
          </label>
          <input type="text" id="password" className={`${styles.input}`} />
          <Button name="Sign Up!" />
        </form>
      </section>
    </>
  );
};

export default SignUp;
