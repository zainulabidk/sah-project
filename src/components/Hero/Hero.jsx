import React, { useState } from "react";
import bgImageSrc from "../../assets/bg-slate.png";
import coffeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImageStyle = {
  backgroundImage: `url(${bgImageSrc})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const Hero = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <main style={bgImageStyle}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sideBar} setSideBar={setSideBar} />
          {/* Hero section */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 
           lg:grid-cols-3 place-items-center min-h-[850px] "
          >
            {/* text content section */}

            <div className="text-lightOrange ml-[100px] md:mt-0 p-4 space-y-28">
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
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
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
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black LifeStyle Lovers.</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis corrupti officia unde quaerat quasi rerum non velit
                    dolores quae eligendi esse, blanditiis, sint adipisci
                    laborum iusto porro repellat deleniti hic?
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero image section */}

            <div className="relative">
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={coffeMain}
                alt="cofee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* Orange ring */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>

              {/* big text section*/}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150px font-bold text-darkGray leading-tight]">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* third div  section */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange ml-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Blvck Tumbler</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    sharon ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis corrupti officia unde quaerat quasi rerum non velit
                    dolores quae eligendi esse, blanditiis.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>

            <div></div>
          </div>
        </div>

        {/* Side Bar Menu */}
        {sideBar && (
          <motion.div
            // initial={{ x: `100%` }}
            // whileInView={{ x: 0 }}

            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.1,
            }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* Line */}

                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white ">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div
                  className="inline-block
              p-2
              rounded-full
              cursor-pointer
              border
              border-white"
                >
                  <FaTwitter className="text-2xl" />
                </div>
                <div
                  className="inline-block
              p-2
              rounded-full
              cursor-pointer
              border
              border-white"
                >
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
