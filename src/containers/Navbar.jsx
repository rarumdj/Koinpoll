import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assests/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  return (
    <header className="bg-navColor py-6 px-10 md:py-4 md:px-16">
      <nav className="flex flex-row justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button
            className="-translate-y-4 -translate-x-8 md:hidden block absolute z-50"
            onClick={handleClick}
          >
            <Icon
              icon={click ? "ep:close" : "charm:menu-hamburger"}
              fontSize={30}
              color="fff"
            />
          </button>
          <aside>
            <nav className="md:block hidden">
              <ul className="flex flex-row space-x-6 items-center">
                <li className="text-white">Tutorial Videos</li>
                <li className="py-1 px-6 rounded-lg border text-center border-primary text-white">
                  Login
                </li>
                <li className="py-1 px-6 rounded-lg text-center bg-primary text-white shadow-lg shadow-purple-500/50">
                  Join
                </li>
              </ul>
            </nav>

            <motion.nav
              initial={false}
              animate={click ? "open" : "closed"}
              variants={variants}
              className={`md:hidden block bg-navColor absolute top-0 left-0 right-0 bottom-0 min-h-screen`}
            >
              <ul className="flex flex-col justify-center h-full space-y-6 items-center max-w-full px-8">
                <li className="text-white">Tutorial Videos</li>
                <li className="py-2 w-full text-center rounded-lg border border-primary text-white">
                  Login
                </li>
                <li className="py-2 w-full text-center rounded-lg bg-primary text-white shadow-lg shadow-purple-500/50">
                  Join
                </li>
              </ul>
            </motion.nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
