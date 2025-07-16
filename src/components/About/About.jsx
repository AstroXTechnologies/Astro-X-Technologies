import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MotionTranslateUp from "../subComponents/motionComponents/MotionTranslateUp";
import GridMotionViewParent from "../subComponents/motionComponents/GridMotionViewParent";

const About = () => {
  return (
    <>
      <Grid
        id="about-us"
        container
        spacing={4}
        sx={{ width: "100%", px: 3, pt: 10 }}
      >
        {/* About Us Header */}
        <GridMotionViewParent spacing={1} size={12}>
          <MotionTranslateUp size={12}>
            <Typography variant="h3">About Us</Typography>
          </MotionTranslateUp>
          <MotionTranslateUp size={10}>
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
          spacing={3}
          size={12}
          sx={{ maxWidth: 500 }}
        >
          <Grid component={MotionTranslateUp} container spacing={1} size={12}>
            <Grid
              container
              spacing={0.5}
              alignItems={"center"}
              direction={"column"}
            >
              <Typography variant="h5">We are Innovative</Typography>
              <HeaderUnderline />
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                At AstroX Technologies we build the future, writing software
                with a well-integrated process to help solve a set of problems.
                Our build process is a result of ingenious ideas where it is
                nurtured from an idea into a fully featured software.
              </Typography>
            </Grid>
          </Grid>

          <Grid component={MotionTranslateUp} container spacing={1} size={12}>
            <Grid
              container
              spacing={0.5}
              alignItems={"center"}
              direction={"column"}
            >
              <Typography variant="h5">We are Intuitive</Typography>
              <HeaderUnderline />
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
          <Grid component={MotionTranslateUp} container spacing={1} size={12}>
            <Grid
              container
              spacing={0.5}
              alignItems={"center"}
              direction={"column"}
            >
              <Typography variant="h5">We are Visionary</Typography>
              <HeaderUnderline />
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                At AstroX Technologies we conjure up and build futuristic
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
      width: 80,
      height: "1px",
      background: "linear-gradient(45deg, #ff00ff 25%, #00A2FF)",
      borderRadius: "50%",
    }}
  />
);
