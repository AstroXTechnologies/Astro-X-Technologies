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
        <Grid
          sx={{
            pt: 2,
            px: 3,
            maxWidth: 600,
            mt: "-20vh",
          }}
        >
          <AnimatedHeader pageLoaded={pageLoaded}>
            <Typography
              component={motion.h1}
              variants={heroVariant}
              variant="h1"
              sx={{ mb: 5 }}
            >
              Scalable Tech Solutions & MVPs That Power SME Growth
            </Typography>
            <Typography
              component={motion.p}
              variants={heroVariant}
              variant="body"
            >
              We create IT solutions that empowers your business to scale &
              scales with it.
              <br />
              We help businesses go from idea to execution — faster, smarter,
              better.
            </Typography>
            <Grid
              container
              component={motion.div}
              size={12}
              spacing={2}
              variants={btnVariant}
              sx={{ pt: 5 }}
            >
              <GetQuoteButton />
              <Link
                component={motion.a}
                variants={heroVariant}
                href="#contact-us"
              >
                <Button variant="text" sx={{ color: "primary.main" }}>
                  Our Services
                </Button>
              </Link>
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
        <Button
          variant="custom"
          sx={{
            color: "#fff",
            boxShadow:
              "0px 8px 3px rgba(255, 0, 255, 0.01), 0px 4px 3px rgba(255, 0, 255, 0.05), 0px 2px 2px rgba(255, 0, 255, 0.09), 0px 0px 1px rgba(255, 0, 255, 0.1)",
            background:
              "linear-gradient(95.02deg, #B800B8 2.02%, #e000e0 82.06%, #e000e0 118.55%)",
          }}
          onClick={handleOpenQuote}
        >
          Contact Our Team
        </Button>
      </Box>
      <QuoteForm open={openQuoteForm} setOpen={setOpenQuoteForm} />
    </>
  );
};
