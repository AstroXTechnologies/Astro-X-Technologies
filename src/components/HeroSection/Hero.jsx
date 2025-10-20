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
          minHeight: "100vh",
          height: "auto",
          position: "relative",
          [`${mode == "dark" ? "background" : "bgcolor"}`]: `${
            mode == "dark"
              ? `linear-gradient(
 to bottom,
 #0a0a0a 0%,
    #0f0f0f 50%,
    #141414 100%
)`
              : "background.paper"
          }`,
          pb: { xs: 15, sm: 18, md: 20 },
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

      <Grid
        container
        justifyContent={"center"}
        sx={{
          mt: { xs: "-80px", sm: "-100px", md: "-120px" },
          zIndex: 1,
          position: "relative",
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 360, sm: 400, md: 450 },
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
