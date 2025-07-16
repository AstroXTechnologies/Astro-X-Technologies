import React from "react";
import { Grid } from "@mui/material";
import { motion } from "motion/react";

import { staggerParentVariant } from "../../../utils/motionVariants";

const GridMotionParent = ({
  children,
  reverse,
  staggerDur = 1,
  standalone,
  ...props
}) => {
  return (
    <Grid
      component={motion.div}
      variants={staggerParentVariant({ reverse, dur: staggerDur })}
      initial={standalone && "hidden"}
      animate={standalone && "animate"}
      container
      {...props}
    >
      {children}
    </Grid>
  );
};

export default GridMotionParent;
