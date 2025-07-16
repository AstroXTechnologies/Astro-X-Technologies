import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

const AnimatedHeader = ({ children, ...props }) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.8,
          },
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AnimatedHeader;
