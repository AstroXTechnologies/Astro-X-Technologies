import React from "react";
import { Grid } from "@mui/material";
import { motion } from "motion/react";

import { translateVariant } from "../../../utils/motionVariants";

const MotionTranslateUp = ({
  children,
  upDown,
  initial,
  animate,
  dur = 0.5,
  ...props
}) => {
  return (
    <Grid
      component={motion.div}
      variants={translateVariant({ upDown, dur, initial, animate })}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default MotionTranslateUp;
