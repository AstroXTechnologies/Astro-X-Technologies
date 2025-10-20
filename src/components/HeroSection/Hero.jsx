import React, { useRef } from "react";
import { Box, Grid, Typography, useColorScheme } from "@mui/material";
import NavBar from "./NavBar";
import HeroBody from "./HeroBody";
import TechGrid from "./TechGrid";
import FloatingElements from "./FloatingElements";
import DataStream from "./DataStream";
import { motion } from "motion/react";

const Hero = () => {
  const { mode } = useColorScheme();

  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          mode === "dark"
            ? "linear-gradient(180deg, #000000 0%, #0a0a1a 50%, #000510 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #f0f4ff 50%, #e6f0ff 100%)",
      }}
    >
      <TechGrid />
      <FloatingElements />
      <DataStream />

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />
        <HeroBody />
      </Box>

      <ScanLine />
      <CornerFrames />
    </Box>
  );
};

export default Hero;

const ScanLine = () => {
  return (
    <Box
      component={motion.div}
      animate={{
        y: [0, "100vh"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background:
          "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.8), transparent)",
        boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)",
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
};

const CornerFrames = () => {
  const frameSize = { xs: 60, sm: 80, md: 100 };
  const frameThickness = 3;

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 16, sm: 24, md: 32 },
          left: { xs: 16, sm: 24, md: 32 },
          width: frameSize,
          height: frameSize,
          borderTop: `${frameThickness}px solid`,
          borderLeft: `${frameThickness}px solid`,
          borderImage: "linear-gradient(135deg, #0066FF, #00D9FF) 1",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          width: frameSize,
          height: frameSize,
          borderTop: `${frameThickness}px solid`,
          borderRight: `${frameThickness}px solid`,
          borderImage: "linear-gradient(225deg, #0066FF, #00D9FF) 1",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, sm: 24, md: 32 },
          left: { xs: 16, sm: 24, md: 32 },
          width: frameSize,
          height: frameSize,
          borderBottom: `${frameThickness}px solid`,
          borderLeft: `${frameThickness}px solid`,
          borderImage: "linear-gradient(45deg, #0066FF, #00D9FF) 1",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          width: frameSize,
          height: frameSize,
          borderBottom: `${frameThickness}px solid`,
          borderRight: `${frameThickness}px solid`,
          borderImage: "linear-gradient(315deg, #0066FF, #00D9FF) 1",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
    </>
  );
};
