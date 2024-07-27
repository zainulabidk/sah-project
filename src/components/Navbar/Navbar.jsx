import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
const Navbar = ({ sidebar, setSideBar }) => {
  return (
    <nav className="absolute top-10 left-1 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.h1
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary"> candle </span> cafe
          </motion.h1>
          {/* Harmberger Menu Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSideBar(!sidebar)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
