import React, { useState } from "react";
import { logo } from "../assets";
import { motion } from "framer-motion";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navLinks } from "../constants/const";
import { styles, components } from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className="text-white fixed -right-[-20px] -top-[-25px] text-3xl z-[999] cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? <CgClose /> : <CgMenuRight />}
      </div>
      {toggle && (
        <motion.nav
          animate={{ x: -1000 }}
          className={`${components.nav} ${styles.slateRight} bg-gradient-to-r shadow-3xl rounded-lg origin-right z-[998] xxs:h-[100vh]`}
        >
          <motion.img
            whileInView={{ scale: [1.2, 0.9, 1] }}
            src={logo}
            alt="logo"
            className="h-[60px] w-[60px] rounded-full scale-0 ml-5 mt-2"
          />
          <div className="flex cursor-pointer absolute -right-[0px] top-[0px] xxs:flex-col xxs:text-center xxs:top-[15%]">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                className={`${styles.smallRight} font-serif list-none font-semibold hover:text-orange-400 xxs:py-7 xxs:text-1xl`}
                animate={{ x: -150 }}
                whileHover={{ scale: 1.2 }}
              >
                {link.name}
              </motion.li>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
