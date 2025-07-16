import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import GlassCard from "../subComponents/GlassCard";
import NeonMist from "../subComponents/NeonMist";

import avatarSrc1 from "../../../assets/imgs/avatarSrc1.jpg";
import avatarSrc2 from "../../../assets/imgs/avatarSrc2.jpg";
import avatarSrc3 from "../../../assets/imgs/avatarSrc3.jpg";
import MotionTranslateUp from "../subComponents/motionComponents/MotionTranslateUp";
import GridMotionViewParent from "../subComponents/motionComponents/GridMotionViewParent";
import { translateVariant } from "../../utils/motionVariants";

const Testimonials = () => {
  return (
    <>
      <Box
        id="testimonials"
        sx={{
          width: "100%",
          mt: "-100px",
          pt: "100px",
          position: "relative",
        }}
      >
        <NeonMist />
        <Grid
          container
          spacing={5}
          justifyContent={"center"}
          sx={{ position: "relative", zIndex: 1, px: 3, pt: 10 }}
        >
          <GridMotionViewParent spacing={1}>
            <MotionTranslateUp size={12}>
              <Typography variant="h3">Testimonials</Typography>
            </MotionTranslateUp>
            <MotionTranslateUp size={12}>
              <Typography variant="h2">
                Trusted by Innovators, Creators, and Brands.
              </Typography>
            </MotionTranslateUp>
            <MotionTranslateUp sx={{ pt: 2 }}>
              <Typography variant="body2" color="textDisabled">
                Trusted by teams, founders, and creators worldwide — our work
                delivers results that people remember and talk about.
              </Typography>
            </MotionTranslateUp>
          </GridMotionViewParent>

          <Grid
            container
            direction="column"
            spacing={4}
            size={9}
            sx={{ maxWidth: 320 }}
          >
            <TestimonialCard
              avatarSrc={avatarSrc2}
              testimonial={`AstroXtechnologies is definitely my recommendation if you're looking for a web app that converts.`}
              role={"CEO of GidiSteel"}
            />

            <TestimonialCard
              avatarSrc={avatarSrc3}
              testimonial={`Their work transformed our online presence. What used to be just a website is now one of our biggest growth engine.`}
              role={"Proprietress of POMS"}
            />

            <TestimonialCard
              avatarSrc={avatarSrc1}
              testimonial={`I was a bit skeptical about creating a website, but I'm glad I did, it has increased my visibility & credibility, I 100% reccomend them.`}
              role={"CEO of Jayex"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;

const TestimonialCard = ({ avatarSrc, testimonial, role }) => (
  <GridMotionViewParent>
    <MotionTranslateUp>
      <GlassCard>
        <Stack spacing={2} alignItems={"center"}>
          <Box sx={{ pr: 1 }}>
            <Avatar alt={role} src={avatarSrc} />
          </Box>
          <Grid container flexGrow={1} direction={"column"}>
            <Grid>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                <FormatQuoteIcon
                  fontSize="small"
                  color="primary"
                  sx={{ transform: "rotateY(180deg)" }}
                />
                {testimonial}{" "}
                <FormatQuoteIcon fontSize="small" color="primary" />
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Grid container justifyContent={"flex-end"} sx={{ pt: 1 }}>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ fontStyle: "italic" }}
          >
            ~ {role}
          </Typography>
        </Grid>
      </GlassCard>
    </MotionTranslateUp>
  </GridMotionViewParent>
);
