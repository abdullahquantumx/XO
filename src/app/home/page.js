"use client";
import React from "react";
import { motion } from "framer-motion";

const Homie = () => {
  const contentVariants = {
    hidden: { x: -80, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const backgroundStyles = {
    backgroundImage: "url('./doctor2.jpg')",
    backgroundSize: "cover",
    height: "100vh", // Use 100% if you want the background to cover the entire viewport height
    display: "flex",
    alignItems: "center",
  };

  const paragraphStyles = {
    marginLeft: "20px", // Adjust the left margin as needed
    fontSize: "3.8rem",
  };

  return (
    <>
      <div style={backgroundStyles}>
        {/* Content inside the background */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          style={paragraphStyles}
          className="w-86"
        >
          <p className="font-bold font-serif">Care Today</p>
          <p className="font-bold font-serif"> Appreciate Tomorrow </p>
        </motion.div>
      </div>
    </>
  );
};

export default Homie;
