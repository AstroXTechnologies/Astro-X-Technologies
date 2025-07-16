import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { motion } from "motion/react";
import { staggerParentVariant } from "../../../utils/motionVariants";

const LoopStaggerParent = ({ children, dur, sDur, ...props }) => {
  const [animateKey, setAnimateKey] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      setAnimateKey(Math.random() * 1000);
    }, dur || 6000);
  }, [animateKey]);

  return (
    <Grid
      key={animateKey}
      component={motion.div}
      initial="initial"
      animate={"animate"}
      variants={staggerParentVariant({ dur: sDur })}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default LoopStaggerParent;
