import { Box } from "@mui/material";
import { motion } from "motion/react";

// Note:: Information for using component

// Parent element must have a position of relative
// Other children element have to have a zIndex > 1
// Component is independent and does not take up space
// Component is relative to parent element
// Element has to be placed first

const NeonMist = () => {
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
        size={400}
        position={{ top: "10%", left: "20%" }}
        animation={{ x: [0, 100, -50], y: [0, -100, 50] }}
      />
      <MotionBlob
        color="#ff00ff"
        size={400}
        position={{ bottom: "15%", right: "15%", zIndex: 3 }}
        animation={{ x: [0, -100, 50], y: [0, 80, -60] }}
      />
      <MotionBlob
        color="#00ffcc"
        size={250}
        position={{ top: "30%", right: "10%" }}
        animation={{ x: [0, 50, -40], y: [0, -60, 40] }}
      />
    </Box>
  );
};

export default NeonMist;

const MotionBlob = ({ color, size, position, animation }) => (
  <Box
    component={motion.div}
    initial={{ x: 0, y: 0 }}
    animate={animation}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      filter: "blur(90px)",
      opacity: 0.5,
      ...position,
    }}
  />
);
