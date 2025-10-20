import React from "react";
import WebDesignDev from "./WebDesignDev/WebDesignDev";
import { Grid, Typography } from "@mui/material";
import VideoEditing from "./VideoEditing/VideoEditing";
import GridMotionViewParent from "../subComponents/motionComponents/GridMotionViewParent";
import MotionTranslateUp from "../subComponents/motionComponents/MotionTranslateUp";
import Solutions from "./Solutions/Solutions";

const Services = () => {
  return (
    <>
      <Grid
        id="services"
        container
        spacing={5}
        sx={{
          pt: { xs: 8, sm: 10, md: 12 },
          width: "100%",
          overflowX: "hidden",
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Grid
          spacing={2}
          container
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <GridMotionViewParent>
            <MotionTranslateUp size={12}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Our Services
              </Typography>
            </MotionTranslateUp>
            <MotionTranslateUp size={12}>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  fontWeight: 400,
                  maxWidth: 700,
                }}
              >
                Crafting Digital Experiences — From Code to Creative.
              </Typography>
            </MotionTranslateUp>
          </GridMotionViewParent>
        </Grid>

        <MotionTranslateUp justifyContent={"center"} container size={12}>
          <WebDesignDev />
        </MotionTranslateUp>
        <Grid container size={12}>
          <VideoEditing />
        </Grid>
      </Grid>
      {/* <Solutions /> */}
    </>
  );
};

export default Services;
