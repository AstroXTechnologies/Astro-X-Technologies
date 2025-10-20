import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

const TechGrid = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 102, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 102, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          sx={{
            position: "absolute",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "rgba(0, 217, 255, 0.8)",
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)",
          }}
        />
      ))}

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </Box>
  );
};

export default TechGrid;
