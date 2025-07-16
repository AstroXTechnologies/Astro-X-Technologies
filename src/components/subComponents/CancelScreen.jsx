import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

import CloseIcon from "@mui/icons-material/Close";

const closeVariant = {
  hidden: {
    opacity: 0.5,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
const CancelScreen = ({
  children,
  navBar,
  pathName,
  canClose = true,
  open = false,
  setOpen = () => {},
}) => {
  const handleClose = () => {
    if (!canClose) return;
    setOpen(false);
  };
  return (
    <AnimatePresence>
      {open && (
        <Grid
          id={pathName}
          key={"Cancel Screen"}
          component={motion.div}
          variants={closeVariant}
          initial="hidden"
          animate={"animate"}
          exit={"hidden"}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          container
          alignItems={"flex-start"}
          spacing={2}
          sx={{
            pb: 3,
            width: "100vw",
            height: "100vh",
            bgcolor: "background.paper",
            position: "fixed",
            zIndex: 1000,
            top: 0,
            left: 0,
            overflowX: "hidden",
            overscrollBehavior: "contain",
          }}
        >
          <NavBar handleClose={handleClose} canClose={canClose}>
            {navBar}
          </NavBar>
          {children}
        </Grid>
      )}
    </AnimatePresence>
  );
};

export default CancelScreen;

const NavBar = ({ children, handleClose, canClose }) => {
  return (
    <Grid container spacing={2} size={12}>
      <Grid>
        <IconButton disableRipple={!canClose} onClick={handleClose}>
          <CloseIcon color={!canClose ? "disabled" : "default"} />
        </IconButton>
      </Grid>

      {children}
    </Grid>
  );
};
