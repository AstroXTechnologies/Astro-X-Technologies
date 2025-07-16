import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { motion } from "motion/react";
import { heroVariant } from "../../utils/motionVariants";
import QuoteForm from "../subComponents/QuoteForm";

const btnVariant = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const HeroBody = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 200);
  }, [rootRef]);
  return (
    <>
      <Grid
        ref={rootRef}
        alignItems={"center"}
        justifyContent={"flex-start"}
        container
        sx={{ flexGrow: 1, position: "relative", zIndex: 10 }}
      >
        <Grid sx={{ pt: 2, px: 3, maxWidth: 600, mt: "-20vh" }}>
          <AnimatedHeader pageLoaded={pageLoaded}>
            <Typography
              component={motion.h1}
              variants={heroVariant}
              variant="h1"
              sx={{ mb: 5 }}
            >
              Transforming Ideas into Cutting Edge Solutions
            </Typography>
            <Typography
              component={motion.p}
              variants={heroVariant}
              variant="body"
            >
              You have a project? We'll build it. <br /> At Astroxtechnologies,
              we harness the power of technology to create innovative solutions
              that drive success.
            </Typography>
            <Grid
              container
              component={motion.div}
              size={12}
              spacing={3}
              variants={btnVariant}
              sx={{ pt: 5 }}
            >
              <Link
                component={motion.a}
                variants={heroVariant}
                href="#offer-card"
              >
                <Button
                  variant="custom"
                  sx={{ color: "#fff", bgcolor: "primary.main" }}
                >
                  Get A Free Website
                </Button>
              </Link>
              <GetQuoteButton />
            </Grid>
          </AnimatedHeader>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroBody;

const AnimatedHeader = ({ children, pageLoaded, ...props }) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate={pageLoaded ? "visible" : ""}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.8,
          },
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

const GetQuoteButton = () => {
  const [openQuoteForm, setOpenQuoteForm] = useState(false);

  const handleOpenQuote = () => {
    setOpenQuoteForm(true);
  };
  return (
    <>
      <Box component={motion.div} variants={heroVariant}>
        <Button variant="text" onClick={handleOpenQuote}>
          Get a Quote
        </Button>
      </Box>
      <QuoteForm open={openQuoteForm} setOpen={setOpenQuoteForm} />
    </>
  );
};

// const GetQuoteButton = () => {
//   const [open, setOpen] = useState(false);

//   const handleTooltipClose = () => {
//     setOpen(false);
//   };

//   const handleTooltipOpen = () => {
//     setOpen(true);
//   };
//   return (
//     <ClickAwayListener onClickAway={handleTooltipClose}>
//       <Box component={motion.div} variants={heroVariant}>
//         <Tooltip
//           onClose={handleTooltipClose}
//           open={open}
//           disableFocusListener
//           disableHoverListener
//           title="Coming Soon! 🙂"
//           placement="top"
//           arrow
//           slotProps={{
//             popper: {
//               disablePortal: true,
//             },
//           }}
//         >
//           <Button variant="text" onClick={handleTooltipOpen}>
//             Get a Quote
//           </Button>
//         </Tooltip>
//       </Box>
//     </ClickAwayListener>
//   );
// };
