import React, { useRef } from "react";
import { Box, Typography, Button, Grid, Paper, Link } from "@mui/material";
import { motion, useInView } from "motion/react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import GlassCard from "../../subComponents/GlassCard";
import LoopStaggerParent from "../../subComponents/motionComponents/LoopStaggerParent";
import MotionScale from "../../subComponents/motionComponents/MotionScale";
import GridMotionViewParent from "../../subComponents/motionComponents/GridMotionViewParent";
import MotionTranslateUp from "../../subComponents/motionComponents/MotionTranslateUp";

// Main Card with Animated Overlay
const MiniatureWebsite = () => {
  return (
    <Grid
      component={GridMotionViewParent}
      inView={0.4}
      justifyContent={"center"}
      container
      sx={{ position: "relative" }}
    >
      <Grid
        component={MotionTranslateUp}
        sx={{
          position: "relative",
          width: 320,
          p: 2,
          borderRadius: 3,
          border: "1px solid rgba(255, 255, 255, 0.1)",

          boxShadow: 25,
        }}
      >
        {/* Main Mini-Website */}

        <MiniWebsite />

        {/* Animated Overlay Card (on scroll into view) */}
        {/* <ScreenCard /> */}
      </Grid>
    </Grid>
  );
};

export default MiniatureWebsite;

const ScreenCard = () => (
  <>
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      viewport={{ once: true }}
      style={{
        width: 180,
        position: "absolute",
        top: "-5%",
        right: "-50%",
        transform: "translate(-50%, -50%)",
        //   borderRadius: 12,
        //   boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
    >
      <GlassCard>
        <Grid container sx={{ py: 1, width: "100%" }}>
          <Typography
            textAlign={"center"}
            variant="body1"
            sx={{ fontWeight: 600 }}
          >
            Boost ROI through our digital{" "}
            <Typography variant="span" color="primary">
              masterpiece.
            </Typography>
          </Typography>
        </Grid>
      </GlassCard>
    </Box>
  </>
);

// Miniature Website Component
const MiniWebsite = () => (
  <Grid container spacing={3}>
    <NavBar />
    {/* Hero Section */}
    <Hero />

    {/* Services */}
    <Services />
    <Charts />

    {/* Call to Action */}
    <Contact />
  </Grid>
);

const NavBar = () => (
  <Grid size={12} container>
    <Grid flexGrow={1}>
      <Typography
        variant="body2"
        color="primary"
        sx={{
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: 1.2,
        }}
      >
        AstroX
      </Typography>
    </Grid>
    <Grid container spacing={1.5}>
      {["Services", "Testimonial", "Contact"].map((navName) => (
        <Grid key={navName}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            {navName}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Grid>
);
const Hero = () => (
  <>
    <Grid container spacing={2} sx={{ pt: 3, pb: 1 }}>
      <Grid container size={12} justifyContent={"center"}>
        <Typography
          color="primary"
          textAlign={"center"}
          sx={{
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Build your Online presence
        </Typography>
      </Grid>
      <Grid container size={12} justifyContent={"center"}>
        <Typography variant="body2" textAlign={"center"} sx={{ fontSize: 12 }}>
          Boost your business ROI through a functional website that converts.
        </Typography>
      </Grid>
    </Grid>
  </>
);
const Services = () => (
  <>
    <LoopStaggerParent
      sDur={1.8}
      container
      size={12}
      justifyContent={"center"}
      spacing={2}
    >
      {["Web Dev", "UI/UX", "Marketing"].map((service) => (
        <MotionScale dur={1.2} key={service}>
          <Paper
            sx={{ p: 1, textAlign: "center", borderRadius: 2, boxShadow: 1 }}
          >
            <Typography variant="caption">{service}</Typography>
          </Paper>
        </MotionScale>
      ))}
    </LoopStaggerParent>
  </>
);

const data = [
  { x: 0, name: ".", nameB: "." },
  { x: 1, name: ".", nameB: "." },
  { x: 0.5, name: ".", nameB: "." },
  { x: 2, name: ".", nameB: "." },
  { x: 1.5, name: ".", nameB: "." },
  { x: 3, name: ".", nameB: "." },
  { x: 2.5, name: ".", nameB: "." },
  { x: 3.5, name: ".", nameB: "." },
];
const Charts = () => {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { amount: 0.8 });

  return (
    <>
      <Grid container ref={animateRef} justifyContent={"center"} sx={{ pt: 4 }}>
        <LineChart
          width={250}
          height={100}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey={"name"} />
          <YAxis />
          {isInView && <Line dataKey="x" stroke="#ff00ff" />}
        </LineChart>
      </Grid>
    </>
  );
};
const Contact = () => (
  <>
    <Grid container size={12} justifyContent={"center"} sx={{ mt: -1 }}>
      <Link href="#contact-us">
        <Button
          variant="custom"
          size="small"
          sx={{
            fontSize: 12,
          }}
        >
          Get Started
        </Button>
      </Link>
    </Grid>
  </>
);
