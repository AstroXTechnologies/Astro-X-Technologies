import React from "react";
import { Box, Button, ButtonBase, Grid, Typography } from "@mui/material";

import pcMockup from "../../../../assets/imgs/pc-mockup.png?react";
import GridMotionViewParent from "../../subComponents/motionComponents/GridMotionViewParent";
import MotionTranslateUp from "../../subComponents/motionComponents/MotionTranslateUp";
import GridMotionParent from "../../subComponents/motionComponents/GridMotionParent";

const PCMiniatureWebsite = ({ style = {} }) => {
  return (
    <Grid
      component={GridMotionViewParent}
      staggerDur={1}
      inView={1}
      container
      direction={"column"}
      sx={{
        px: 2,
        pt: 3,
        pb: 4,
        width: "100%",
        overflow: "hidden",
        background: "#00a2ff20",
        ...style,
      }}
    >
      <NavBar />
      <HeroBody />
    </Grid>
  );
};

export default PCMiniatureWebsite;

const NavBar = () => (
  <Grid
    component={GridMotionParent}
    staggerDur={0.3}
    container
    spacing={3}
    sx={{ width: "100%" }}
  >
    <Grid component={ModMotionTranslate} dur={0.1} flexGrow={1}>
      <Typography
        sx={{ fontSize: ".625rem", fontWeight: 700, color: "text.primary" }}
      >
        Brand Name
      </Typography>
    </Grid>
    <Typography
      component={ModMotionTranslate}
      dur={0.1}
      sx={{ fontSize: ".625rem", fontWeight: 500, color: "text.primary" }}
    >
      About
    </Typography>
    <Typography
      dur={0.1}
      component={ModMotionTranslate}
      sx={{ fontSize: ".625rem", fontWeight: 500, color: "text.primary" }}
    >
      Services
    </Typography>
    <Typography
      dur={0.1}
      component={ModMotionTranslate}
      sx={{ fontSize: ".625rem", fontWeight: 500, color: "text.primary" }}
    >
      Contact
    </Typography>
  </Grid>
);

const HeroBody = () => (
  <Grid
    component={GridMotionParent}
    staggerDur={0.7}
    container
    justifyContent={"space-between"}
    alignItems={"center"}
    sx={{ pt: 4 }}
  >
    <Grid
      component={GridMotionParent}
      staggerDur={0.4}
      container
      flexGrow={1}
      spacing={3}
      sx={{ maxWidth: 180 }}
    >
      <Grid component={GridMotionParent} staggerDur={0.1} size={12}>
        <Typography
          component={MotionTranslateEl}
          dur={0.2}
          sx={{
            fontSize: ".875rem",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "text.primary",
          }}
        >
          Transform Your Business With Our Functional Web & Mobile Applications
        </Typography>
      </Grid>
      <Grid
        component={GridMotionParent}
        staggerDur={0.3}
        container
        spacing={2}
        alignItems={"center"}
        size={12}
      >
        <ButtonBase
          component={MotionTranslateEl}
          dur={0.2}
          sx={{
            height: 0,
            px: 1.6,
            py: 1.5,
            background:
              "linear-gradient(92.28deg, #737373 0.77%, rgba(115, 115, 115, 0.6) 99%)",
            borderRadius: "1px",
            fontWeight: 600,
            fontSize: ".5rem",
            color: "text.primary",

            textTransform: "capitalize",
          }}
        >
          Learn More
        </ButtonBase>

        <Button
          dur={0.2}
          component={MotionTranslateEl}
          variant="text"
          sx={{ fontWeight: 800, fontSize: ".5rem", color: "text.primary" }}
        >
          Get a Quote
        </Button>
      </Grid>
    </Grid>
    <Grid
      component={GridMotionParent}
      staggerDur={0.3}
      container
      justifyContent={"flex-end"}
      sx={{
        position: "relative",
        flex: 1,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <MotionTranslateEl
        dur={0.4}
        initial={{
          transform: "translateZ(-100px) rotateX(-50deg) rotateY(-50deg)",
        }}
        animate={{ transform: "translateZ(0px) rotateX(0deg) rotateY(0deg)" }}
      >
        <img
          src={pcMockup}
          style={{
            width: "100%",
            maxWidth: 180,
            height: "auto",
          }}
        />
        <Box
          sx={{
            width: 115,
            height: 10,
            borderRadius: "50%",
            filter: "blur(5px)",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 1) 16.02%, rgba(85, 85, 85, 1) 106.02%)",
            position: "absolute",
            opacity: 0.6,
            bottom: -10,
            left: "34%",
          }}
        />
      </MotionTranslateEl>
    </Grid>
  </Grid>
);

const ModMotionTranslate = ({ ...props }) => (
  <MotionTranslateUp initial={{ y: -5 }} {...props} />
);

const MotionTranslateEl = ({ ...props }) => (
  <MotionTranslateUp initial={{ y: 10 }} {...props} />
);
