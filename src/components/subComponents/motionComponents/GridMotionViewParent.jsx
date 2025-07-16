import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { motion, useInView } from "motion/react";

import { staggerParentVariant } from "../../../utils/motionVariants";

const GridMotionViewParent = ({
  children,
  reverse,
  staggerDur = 1,
  inView = 0.7,
  ...props
}) => {
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, {
    once: true,
    amount: inView,
  });

  return (
    <Grid
      ref={rootRef}
      component={motion.div}
      variants={staggerParentVariant({ reverse, dur: staggerDur })}
      initial="hidden"
      animate={isInView ? "animate" : ""}
      container
      {...props}
    >
      {children}
    </Grid>
  );
};

export default GridMotionViewParent;
