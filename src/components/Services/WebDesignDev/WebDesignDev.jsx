import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import MiniatureWebsite from "./MiniatureWebsite";
import GlassCard from "../../subComponents/GlassCard";
import NeonSmoke from "../../subComponents/NeonSmoke";
import { motion, useAnimation } from "motion/react";
import MotionScale from "../../subComponents/motionComponents/MotionScale";
import LoopStaggerParent from "../../subComponents/motionComponents/LoopStaggerParent";
import GridMotionViewParent from "../../subComponents/motionComponents/GridMotionViewParent";
import MotionTranslateUp from "../../subComponents/motionComponents/MotionTranslateUp";
import GridMotionParent from "../../subComponents/motionComponents/GridMotionParent";

const WebDesignDev = () => {
  return (
    <>
      <Grid
        id="web-dev"
        label="Miniature-website"
        justifyContent={"center"}
        container
        spacing={8}
        sx={{ width: "100%" }}
      >
        {/* Header */}
        <Grid container spacing={3} sx={{ px: 3, width: "100%" }}>
          <Grid container sx={{ width: "100%" }}>
            <Grid
              component={GridMotionViewParent}
              container
              size={10}
              direction={"column"}
              spacing={1}
            >
              <Typography component={MotionTranslateUp} variant="h4">
                Web Design & Dev
              </Typography>
              <Typography
                component={MotionTranslateUp}
                variant="body2"
                color="textDisabled"
              >
                From sleek UI to solid backend architecture, we create digital
                experiences that are both beautiful and high-performing.
              </Typography>
            </Grid>
          </Grid>
          {/* Mini Website */}
          <Grid container justifyContent={"center"} sx={{ width: "100%" }}>
            <MiniatureWebsite />
          </Grid>
        </Grid>

        <Grid size={12} sx={{ position: "relative", px: 3 }}>
          <NeonSmoke />
          <NeonSmoke />
          <NeonSmoke />

          {/* Text Cards */}
          <TextCards />
        </Grid>
        <Grid
          component={GridMotionViewParent}
          staggerDur={1.2}
          container
          size={12}
          spacing={4}
          sx={{ px: 3 }}
        >
          <Grid component={GridMotionParent} container spacing={1} size={10}>
            <Typography component={MotionTranslateUp} variant="h4">
              Full-Spectrum Digital Delivery
            </Typography>
            <Typography
              component={MotionTranslateUp}
              variant="body2"
              color="textDisabled"
            >
              Sales Conversion, Brand Awareness, Data Collection — You name it,
              the functional websites we create does it.
            </Typography>
          </Grid>
          <Grid component={GridMotionParent}>
            <Box component={MotionTranslateUp}>
              <Link href="#contact-us">
                <Button variant="outlined">Work with Us</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default WebDesignDev;

const TextCards = () => {
  return (
    <LoopStaggerParent
      dur={7000}
      sDur={1.5}
      container
      spacing={4}
      sx={{ width: "100%" }}
    >
      {[
        "Pixel-Perfect. Code-Solid.",
        "Design. Build. Create...",
        "Complete Creative Solutions.",
        "Visual. Interactive. Functional.",
      ].map((info, i) => (
        <MotionScale key={i} sx={{ width: "100%" }}>
          {Number.isInteger(i / 2) ? (
            <Grid
              container
              justifyContent={"flex-start"}
              sx={{ width: "100%" }}
            >
              <Grid>
                <GlassCard>
                  <Typography>{info}</Typography>
                </GlassCard>
              </Grid>
            </Grid>
          ) : (
            <Grid container justifyContent={"flex-end"} sx={{ width: "100%" }}>
              <Grid>
                <GlassCard>
                  <Box>
                    <Typography>{info}</Typography>
                  </Box>
                </GlassCard>
              </Grid>
            </Grid>
          )}
        </MotionScale>
      ))}
    </LoopStaggerParent>
  );
};
