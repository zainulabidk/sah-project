import React from "react";
import coffee1 from "../../assets/coffee1.png";
import coffee2 from "../../assets/1000045603.jpg";
import coffee3 from "../../assets/coffee3.png";
import coffee4 from "../../assets/coffeee4.jpg";
import coffee5 from "../../assets/coffe5.jpg";
import coffee6 from "../../assets/coffe6.jpg";
import { motion } from "framer-motion";

export const serviceData = () => [
  {
    id: 4,
    image: coffee4,
    title: "Masala Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, velit at perferendis dolores delectus architecto voluptatem incidunt fugiat quos laboriosam suscipit.",
  },
  {
    id: 5,
    image: coffee5,
    title: "Caramel Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, velit at perferendis dolores delectus architecto voluptatem incidunt fugiat quos laboriosam suscipit.",
  },
  {
    id: 6,
    image: coffee2,
    title: "Chocolate Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, velit at perferendis dolores delectus architecto voluptatem incidunt fugiat quos laboriosam suscipit.",
  },
  {
    id: 1,
    image: coffee1,
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, velit at perferendis dolores delectus architecto voluptatem incidunt fugiat quos laboriosam suscipit.",
  },
  {
    id: 2,
    image: coffee3,
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, velit at perferendis dolores delectus architecto voluptatem incidunt fugiat quos laboriosam suscipit.",
  },

  {
    id: 3,
    image: coffee6,
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, velit at perferendis dolores delectus architecto voluptatem incidunt fugiat quos laboriosam suscipit.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
// const containerVariants = {
//   hidden: {
//     opacity: 1,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.6,
//       staggerChildren: 0.4,
//     },
//   },
// };

const Services = () => {
  // Call the serviceData function to get the data
  const services = serviceData();

  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffees</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          velit at perferendis dolores delectus architecto voluptatem incidunt
          fugiat quos laboriosam suscipit.
        </motion.p>
      </div>
      {/* Card Section */}

      <motion.div
        // variants={containerVariants}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className=" 
              max-w-[450px]
              mx-auto hover:scale-110
              duration-300 cursor-pointer"
            />

            <div className="space-y-2 ">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <h1 className="text-darkGray">{service.subtitle}</h1>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
