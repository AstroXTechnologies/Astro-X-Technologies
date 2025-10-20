import React from "react";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import GlassCard from "../../subComponents/GlassCard";

import BentoVid1 from "../../../../assets/vids/BentoVid1.mp4?url";
import BentoVid2 from "../../../../assets/vids/BentoVid2.mp4?url";
import GridMotionViewParent from "../../subComponents/motionComponents/GridMotionViewParent";
import MotionTranslateUp from "../../subComponents/motionComponents/MotionTranslateUp";

import LaunchIcon from "@mui/icons-material/Launch";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LogoIcon from "../../../../assets/svg/astrox-logo.svg?react";

const VideoEditing = () => {
  return (
    <>
      <Grid
        id="video-edit"
        container
        spacing={5}
        size={12}
        sx={{ px: 3, pt: 5 }}
      >
        <Grid component={GridMotionViewParent} container spacing={1} size={10}>
          <Typography component={MotionTranslateUp} variant="h4">
            Video Editing
          </Typography>
          <Typography
            component={MotionTranslateUp}
            variant="body2"
            color="textDisabled"
          >
            Visual Content Designed to Move People — and Metrics with Videos
            That Captivate, Convert, and Stick.
          </Typography>
        </Grid>
        <Grid container size={12} sx={{ position: "relative" }}>
          <NeonBg />
          <NeonBg />
          <NeonBg />
          <NeonBg />
          <BentoGridVideos />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoEditing;

const padding = 8 * 7;

const BentoGridVideos = () => (
  <>
    <Grid container spacing={1} size={12}>
      <Grid container spacing={1} size={12}>
        <GridMotionViewParent reverse allInView container spacing={1} size={6}>
          <MotionTranslateUp
            upDown
            container
            size={12}
            sx={{ height: window.innerWidth / 2 - padding }}
          >
            <GlassCard
              style={{
                borderRight: "1px solid rgba(255, 0, 255, 0.6)",
                borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                borderBottom: "1px solid rgba(255, 0, 255, 0.9)",
              }}
              spacing={false}
            >
              <Grid
                container
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1}
                sx={{ height: "100%" }}
              >
                <Typography variant="h1">100+</Typography>
                <Typography variant="caption" color="primary.contrastText">
                  Completed Projects
                </Typography>
              </Grid>
            </GlassCard>
          </MotionTranslateUp>
          <MotionTranslateUp
            upDown
            container
            size={12}
            sx={{ height: window.innerWidth / 2 - padding }}
          >
            <GlassCard
              style={{
                borderRight: "1px solid rgba(255, 0, 255, 0.9)",
                borderTop: "1px solid rgba(255, 0, 255, 0.6)",
                borderBottom: "1px solid rgba(255, 0, 255, 0.6)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
              }}
              spacing={false}
            >
              <Grid
                container
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1}
                sx={{ height: "100%", bgcolor: "background.paper" }}
              >
                <Typography variant="h1" color="primary">
                  5Yrs+
                </Typography>
                <Typography variant="caption" color="primary.contrastText">
                  In Business
                </Typography>
              </Grid>
            </GlassCard>
          </MotionTranslateUp>
        </GridMotionViewParent>
        <Grid container size={6} sx={{ height: "100%" }}>
          <GlassCard
            spacing={false}
            style={{
              position: "relative",
              borderLeft: "1px solid rgba(255, 0, 255, 0.9)",
              borderBottom: "1px solid rgba(255, 0, 255, 0.9)",
              borderTop: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <VideoButtons
              link={
                "https://youtube.com/shorts/dh9RUgn-nYE?si=LdcN5B-f85i6yAq4"
              }
            />
            <video
              autoPlay
              loop
              muted
              style={{ width: "100%", objectFit: "fill", height: "100%" }}
            >
              <source src={BentoVid2} type="video/mp4" />
            </video>

            {/* <VideoTitle title={"From Ideas to Digital Reality for Growth"} /> */}
            <AstroXIconOverlay />
          </GlassCard>
        </Grid>
      </Grid>
      <Grid container size={12} sx={{ height: window.innerWidth / 2 }}>
        <GlassCard
          spacing={false}
          style={{
            position: "relative",
            borderTop: "1px solid rgba(255, 0, 255, 0.9)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <VideoButtons
            link={"https://youtu.be/TMhXI-Z-LOA?si=mT64ib_5qDUxL0hH"}
          />
          <Box sx={{ width: "100%", height: "100%", bgcolor: "#333" }}>
            <video
              autoPlay
              loop
              muted
              style={{ width: "100%", objectFit: "fill", height: "100%" }}
            >
              <source src={BentoVid1} type="video/mp4" />
            </video>
          </Box>
          {/* <VideoTitle
            title={
              "3 Life Lessons For Teenagers to Begin 2025 with MAXIMUM PRODUCTIVITY"
            }
          /> */}

          <AstroXIconOverlay />
        </GlassCard>
      </Grid>
    </Grid>
  </>
);

const NeonBg = () => (
  <Box
    label="neon-bg"
    sx={{
      position: "absolute",
      width: 100,
      height: 150,
      borderRadius: "50%",
      top: "30%",
      left: "30%",
      backgroundColor: "primary.main",
      filter: "blur(50px)",
      zIndex: -1,
    }}
  />
);

const VideoButtons = ({ link }) => {
  return (
    <Grid
      container
      justifyContent={"flex-end"}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 2,
        width: "100%",
        background: "rgba(0,0,0, .3)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Grid>
        <IconButton color="primary" size="medium">
          <PlayArrowIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Grid>
      <Grid>
        <Link href={link} target="_blank">
          <IconButton size="medium">
            <LaunchIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
};

const AstroXIconOverlay = () => (
  <Box
    component={GlassCard}
    sx={{
      backdropFilter: "blur(20px)",
      background: "rgba(0,0,0,.3)",
      borderRadius: "50%",
      width: "initial",
      height: "initial",
      p: 1,
      position: "absolute",
      right: 8,
      bottom: 8,
      lineHeight: 0,
    }}
  >
    <LogoIcon style={{ width: 20 }} />
  </Box>
);

const VideoTitle = ({ title }) => (
  <Grid
    container
    justifyContent={"center"}
    alignItems={"center"}
    sx={{
      backdropFilter: "blur(20px)",
      background: "rgba(0,0,0,.3)",
      width: "100%",
      py: 0.5,
      px: 2,
      position: "absolute",
      left: 0,
      bottom: 0,
    }}
  >
    <Typography variant="caption" sx={{ color: "#fff" }}>
      {title}
    </Typography>
  </Grid>
);
