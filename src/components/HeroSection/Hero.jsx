import React, { useRef } from "react";
import { Box, Grid, Typography, useColorScheme } from "@mui/material";
import NavBar from "./NavBar";
import HeroBody from "./HeroBody";
import GlassCard from "../subComponents/GlassCard";

import { AnimatePresence, motion, transform, useInView } from "motion/react";
import PCMiniatureWebsite from "../Services/Solutions/PCMiniatureWebsite";

import bgVid from "../../../assets/vids/herovid_1.mp4";

const Hero = () => {
  const { mode } = useColorScheme();

  return (
    <>
      <Grid
        id="home"
        container
        direction="column"
        sx={{
          width: "100%",
          maxWidth: "100vw",
          height: "100vh",
          position: "relative",
          [`${mode == "dark" ? "background" : "bgcolor"}`]: `${
            mode == "dark"
              ? `linear-gradient(
 to bottom,
 #0a0a0a 0%,
    #121212 50%,
    #1a1a1a 100%
)`
              : "background.paper"
          }`,
        }}
      >
        <NavBar />
        <HeroBody />
      </Grid>

      {mode === "dark" && (
        <video
          loop
          autoPlay
          src={bgVid}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            opacity: 0.4,
          }}
        />
      )}

      {/* Display Card with an offset */}
      <Grid
        container
        justifyContent={"center"}
        sx={{ mt: "-100px", zIndex: 1, position: "relative" }}
      >
        <Box
          sx={{
            width: "90%",
            minWidth: 360,
            maxWidth: 400,
          }}
        >
          <DataOverlayCard />
        </Box>
      </Grid>
    </>
  );
};

export default Hero;

const DataOverlayCard = () => {
  return (
    <GlassCard spacing={false} style={{ width: "auto", position: "relative" }}>
      <PCMiniatureWebsite style={{ transform: "scale(1)" }} />
    </GlassCard>
  );
};
