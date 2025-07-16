import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import GlassCard from "../subComponents/GlassCard";

import { AnimatePresence, motion, useInView } from "motion/react";

const dataOverlayVariant = {
  hidden: { opacity: 0, y: 10 },
  exit: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardOverlayData = [
  (() => (
    <Typography variant="h3" sx={{ pb: 1 }}>
      Clean. Fast. Effective.
    </Typography>
  ))(),
  (() => (
    <Typography variant="body2">
      <span style={{ fontSize: 24 }}>🚀</span> 100+ Projects Delivered
    </Typography>
  ))(),
  (() => (
    <Typography variant="body2">
      <span style={{ fontSize: 24 }}>⚙️</span> 5+ Years Combined Experience
    </Typography>
  ))(),
  (() => (
    <Typography variant="body2">
      <span style={{ fontSize: 24 }}>🧩</span> Full-Stack Development & UI/UX
    </Typography>
  ))(),
];

const DeprecatedDataOverlayCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  return (
    <GlassCard
      ref={ref}
      spacing={false}
      style={{ width: "auto", position: "relative" }}
      id="testing"
    >
      <WhiteAnimate />
      <RadialGlow />
      <Grid container justifyContent={"center"} spacing={1}>
        <AnimatePresence>
          {isInView && (
            <Grid
              component={motion.div}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.7,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.5,
                    staggerDirection: -1,
                    duration: 0.4,
                  },
                },
              }}
              container
              spacing={1}
            >
              {cardOverlayData.map((data, i) => (
                <Grid key={i}>
                  <Box component={motion.div} variants={dataOverlayVariant}>
                    {data}
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </AnimatePresence>
      </Grid>
    </GlassCard>
  );
};

export default DeprecatedDataOverlayCard;

const WhiteAnimate = () => (
  <Box
    component={motion.div}
    initial={{ y: 0 }}
    animate={{ y: ["80%", "-60%"] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    sx={{
      background:
        "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 60%)",
      pointerEvents: "none",
      zIndex: 1,
      opacity: 0.3,
      width: "100%",
      height: "100%",
      position: "absolute",
      filter: "blur(15px)",
      left: 0,
      top: 0,
    }}
  />
);

const RadialGlow = () => (
  <Box
    sx={{
      width: 200,
      height: 200,
      borderRadius: "50%",
      background: `radial-gradient(circle, #00A2FF 0%, #ff33ff 70%)`,
      filter: "blur(60px)",
      opacity: 0.5,
      position: "absolute",
      bottom: -100,
      right: -100,
      zIndex: -1,
    }}
  />
);
