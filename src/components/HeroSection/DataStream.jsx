import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";

const DataStream = () => {
  const streams = [
    { left: "5%", delay: 0, duration: 8 },
    { left: "25%", delay: 2, duration: 10 },
    { left: "45%", delay: 1, duration: 9 },
    { left: "65%", delay: 3, duration: 7 },
    { left: "85%", delay: 1.5, duration: 8.5 },
  ];

  const generateRandomCode = () => {
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {streams.map((stream, index) => (
        <Box
          key={index}
          component={motion.div}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            left: stream.left,
            top: 0,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <Typography
              key={i}
              variant="caption"
              sx={{
                fontFamily: "monospace",
                color: "rgba(0, 217, 255, 0.4)",
                fontSize: { xs: "0.5rem", sm: "0.65rem" },
                textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
              }}
            >
              {generateRandomCode()}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default DataStream;
