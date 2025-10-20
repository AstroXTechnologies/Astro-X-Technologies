import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MotionTranslateUp from "../subComponents/motionComponents/MotionTranslateUp";
import GridMotionViewParent from "../subComponents/motionComponents/GridMotionViewParent";

import innovativeImg from "../../../assets/imgs/innovative.png";
import intuitiveImg from "../../../assets/imgs/intuitive.png";
import visionaryImg from "../../../assets/imgs/visionary.png";

const About = () => {
  return (
    <>
      <Grid
        id="about-us"
        container
        spacing={7}
        sx={{ width: "100%", px: 3, pt: 10 }}
      >
        {/* About Us Header */}
        <GridMotionViewParent spacing={1} size={12}>
          <MotionTranslateUp size={12}>
            <Typography variant="h3">About Us</Typography>
          </MotionTranslateUp>
          <MotionTranslateUp size={12}>
            <Typography variant="h2">
              Innovation and Creativity — The Core of our Operation.
            </Typography>
          </MotionTranslateUp>
        </GridMotionViewParent>

        {/* About Us Content */}
        <Grid
          component={GridMotionViewParent}
          inView={0.3}
          container
          spacing={7}
          size={12}
          sx={{ maxWidth: 500 }}
        >
          <Grid component={MotionTranslateUp} container spacing={2} size={12}>
            <Grid
              container
              direction={"column"}
              alignItems={"flex-start"}
              spacing={3}
            >
              <Grid>
                <Box
                  sx={{
                    py: 1.4,
                    px: 1.7,
                    background: "#0D0D0D",
                    boxShadow:
                      "-5px -5px 12px rgba(126, 15, 128, 0.1), 21px 23px 12px rgba(126, 15, 128, 0.02), 12px 13px 10px rgba(126, 15, 128, 0.07), 5px 6px 8px rgba(126, 15, 128, 0.12), 1px 1px 4px rgba(126, 15, 128, 0.14)",
                    borderRadius: 4,
                    lineHeight: 0,
                  }}
                >
                  <img src={innovativeImg} />
                  {/* <InnovativeIcon /> */}
                </Box>
              </Grid>
              <Grid
                container
                spacing={0.5}
                alignItems={"center"}
                direction={"column"}
              >
                <Typography variant="h5">We are Innovative</Typography>
                <HeaderUnderline />
              </Grid>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                At Astro X Technologies we build the future, writing software
                with a well-integrated process to help solve a set of problems.
                Our build process is a result of ingenious ideas where it is
                nurtured from an idea into a fully featured software.
              </Typography>
            </Grid>
          </Grid>

          <Grid component={MotionTranslateUp} container spacing={2} size={12}>
            <Grid
              container
              direction={"column"}
              alignItems={"flex-start"}
              spacing={3}
            >
              <Grid>
                <Box
                  sx={{
                    py: 1,
                    px: 1.3,
                    background: "#0D0D0D",
                    boxShadow:
                      "-5px -5px 12px rgba(126, 15, 128, 0.1), 21px 23px 12px rgba(126, 15, 128, 0.02), 12px 13px 10px rgba(126, 15, 128, 0.07), 5px 6px 8px rgba(126, 15, 128, 0.12), 1px 1px 4px rgba(126, 15, 128, 0.14)",
                    borderRadius: 4,
                    lineHeight: 0,
                  }}
                >
                  <img src={intuitiveImg} />
                  {/* <IntuitiveIcon /> */}
                </Box>
              </Grid>
              <Grid
                container
                spacing={0.5}
                alignItems={"center"}
                direction={"column"}
              >
                <Typography variant="h5">We are Intuitive</Typography>
                <HeaderUnderline />
              </Grid>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                There’s a problem? We’ll solve it. We greatly reduce the time we
                expend during our build process by intuitively solving problems,
                breaking down complex problems into smaller chunks that we solve
                elegantly thereby greatly saving cost and time.
              </Typography>
            </Grid>
          </Grid>
          <Grid component={MotionTranslateUp} container spacing={2} size={12}>
            <Grid
              container
              direction={"column"}
              alignItems={"flex-start"}
              spacing={3}
            >
              <Grid>
                <Box
                  sx={{
                    py: 1,
                    px: 1.3,
                    background: "#0D0D0D",
                    boxShadow:
                      "-5px -5px 12px rgba(126, 15, 128, 0.1), 21px 23px 12px rgba(126, 15, 128, 0.02), 12px 13px 10px rgba(126, 15, 128, 0.07), 5px 6px 8px rgba(126, 15, 128, 0.12), 1px 1px 4px rgba(126, 15, 128, 0.14)",
                    borderRadius: 4,
                    lineHeight: 0,
                  }}
                >
                  <img src={visionaryImg} />
                  {/* <VisionaryIcon /> */}
                </Box>
              </Grid>
              <Grid
                container
                spacing={0.5}
                alignItems={"center"}
                direction={"column"}
              >
                <Typography variant="h5">We are Visionary</Typography>
                <HeaderUnderline />
              </Grid>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                At Astro X Technologies we conjure up and build futuristic
                products to help solve present or fore-seen problems. We aim at
                building futuristic technologies that redefine the scope of
                present possibilities. We are a team of visionaries with the
                sole aim of helping to create a better future.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

const HeaderUnderline = () => (
  <Box
    sx={{
      width: "100%",
      height: "1px",
      background: "linear-gradient(45deg, #ff00ff, #00FF7F)",
      borderRadius: "50%",
    }}
  />
);
