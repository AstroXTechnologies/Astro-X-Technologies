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
        justifyContent={"center"}
        container
        sx={{ flexGrow: 1, position: "relative", zIndex: 10, px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Grid
          sx={{
            pt: { xs: 4, sm: 2 },
            maxWidth: { xs: "100%", sm: 600, md: 700 },
            mt: { xs: "-10vh", sm: "-15vh", md: "-20vh" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <AnimatedHeader pageLoaded={pageLoaded}>
            <Typography
              component={motion.h1}
              variants={heroVariant}
              variant="h1"
              sx={{
                mb: { xs: 3, sm: 4, md: 5 },
                fontWeight: 900,
              }}
            >
              Scalable Tech Solutions & MVPs That Power SME Growth
            </Typography>
            <Typography
              component={motion.p}
              variants={heroVariant}
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem" },
                color: "text.secondary",
                maxWidth: 580,
                mx: { xs: "auto", sm: 0 },
              }}
            >
              We create IT solutions that empower your business to scale and
              grow with it. We help businesses go from idea to execution —
              faster, smarter, better.
            </Typography>
            <Grid
              container
              component={motion.div}
              size={12}
              spacing={2}
              variants={btnVariant}
              sx={{
                pt: { xs: 4, sm: 5 },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <GetQuoteButton />
              <Link
                component={motion.a}
                variants={heroVariant}
                href="#services"
                underline="none"
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "primary.main",
                    borderColor: "primary.main",
                    "&:hover": {
                      borderColor: "primary.dark",
                      backgroundColor: "rgba(0, 102, 255, 0.04)",
                    },
                  }}
                >
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
          onClick={handleOpenQuote}
          sx={{
            px: { xs: 3, sm: 4 },
            py: { xs: 1.5, sm: 1.75 },
            fontSize: { xs: "0.9375rem", sm: "1rem" },
          }}
        >
          Contact Our Team
        </Button>
      </Box>
      <QuoteForm open={openQuoteForm} setOpen={setOpenQuoteForm} />
    </>
  );
};
