import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { motion } from "motion/react";
import { heroVariant } from "../../utils/motionVariants";
import QuoteForm from "../subComponents/QuoteForm";
import TechStats from "./TechStats";

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
            maxWidth: { xs: "100%", sm: 700, md: 900 },
            textAlign: "center",
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
                background: "linear-gradient(135deg, #0066FF 0%, #00D9FF 50%, #0066FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "inherit",
                  filter: "blur(20px)",
                  opacity: 0.3,
                  zIndex: -1,
                },
              }}
            >
              Next-Gen Tech Solutions for the Digital Age
            </Typography>
            <Typography
              component={motion.p}
              variants={heroVariant}
              variant="body1"
              sx={{
                fontSize: { xs: "1.125rem", sm: "1.25rem" },
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Transforming ideas into{" "}
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                intelligent software
              </Box>
              . We build scalable MVPs and enterprise solutions that drive growth
              and innovation.
            </Typography>

            <Box
              component={motion.div}
              variants={heroVariant}
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 4 },
                justifyContent: "center",
                flexWrap: "wrap",
                mt: { xs: 3, sm: 4 },
                mb: { xs: 2, sm: 3 },
              }}
            >
              {["AI-Powered", "Cloud-Native", "Real-Time"].map((tech, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    px: { xs: 2, sm: 3 },
                    py: 1,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "primary.main",
                    background: "rgba(0, 102, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    fontWeight: 600,
                    color: "primary.main",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
            <Grid
              container
              component={motion.div}
              size={12}
              spacing={2}
              variants={btnVariant}
              sx={{
                pt: { xs: 4, sm: 5 },
                justifyContent: "center",
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
      <TechStats />
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
