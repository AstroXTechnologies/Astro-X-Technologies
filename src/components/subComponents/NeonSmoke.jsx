import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

const NeonSmoke = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* 🔵 Animated Mist Blobs */}
      <MotionBlob
        color="#00A2FF"
        position={{ top: "10%", left: "20%" }}
        animation={{ x: [0, 100, -50], y: [0, -100, 50] }}
      />
      <MotionBlob
        color="#ff00ff"
        position={{ top: "30%", right: "10%" }}
        animation={{ x: [0, 50, -40], y: [0, -60, 40] }}
      />
      <MotionBlob
        color="#00ffcc"
        position={{ bottom: "30%", right: "10%" }}
        animation={{ x: [0, 50, -40], y: [0, -60, 40] }}
      />
      <MotionBlob
        color="#ff00ff"
        position={{ bottom: "15%", left: "15%", zIndex: 3 }}
        animation={{ x: [0, -100, 50], y: [0, 80, -60] }}
      />
    </Box>
  );
};

export default NeonSmoke;

const MotionBlob = ({ color, position, animation }) => (
  <Box
    component={motion.div}
    style={{
      position: "absolute",
      width: "80px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: color,
      filter: "blur(40px)",
      opacity: 0.7,
      ...position,
    }}
  />
);
