import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

const FloatingElements = () => {
  const elements = [
    {
      size: 60,
      top: "15%",
      left: "10%",
      delay: 0,
      duration: 6,
    },
    {
      size: 80,
      top: "25%",
      right: "15%",
      delay: 1,
      duration: 7,
    },
    {
      size: 50,
      top: "60%",
      left: "20%",
      delay: 2,
      duration: 8,
    },
    {
      size: 70,
      top: "70%",
      right: "25%",
      delay: 1.5,
      duration: 6.5,
    },
  ];

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
      {elements.map((element, index) => (
        <Box
          key={index}
          component={motion.div}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
          sx={{
            position: "absolute",
            ...element,
            width: element.size,
            height: element.size,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              fill="none"
              stroke={`url(#grad${index})`}
              strokeWidth="2"
              rx="8"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke={`url(#grad${index})`}
              strokeWidth="2"
            />
            <line
              x1="30"
              y1="30"
              x2="70"
              y2="70"
              stroke={`url(#grad${index})`}
              strokeWidth="2"
            />
            <line
              x1="70"
              y1="30"
              x2="30"
              y2="70"
              stroke={`url(#grad${index})`}
              strokeWidth="2"
            />
          </svg>
        </Box>
      ))}
    </Box>
  );
};

export default FloatingElements;
