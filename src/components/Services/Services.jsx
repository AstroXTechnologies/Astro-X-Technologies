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
          pt: 10,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Grid
          spacing={1}
          container
          sx={{
            px: 3,
          }}
        >
          <GridMotionViewParent>
            <MotionTranslateUp size={12}>
              <Typography variant="h3">Our Services</Typography>
            </MotionTranslateUp>
            <MotionTranslateUp size={12}>
              <Typography variant="h2">
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
      <Solutions />
    </>
  );
};

export default Services;
