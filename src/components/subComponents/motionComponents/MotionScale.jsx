import React from "react";
import { Grid } from "@mui/material";
import { motion } from "motion/react";

import { scaleVariant } from "../../../utils/motionVariants";

const MotionScale = ({ children, dur, ...props }) => {
  return (
    <Grid component={motion.div} variants={scaleVariant({ dur })} {...props}>
      {children}
    </Grid>
  );
};

export default MotionScale;
