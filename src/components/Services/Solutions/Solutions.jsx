import React, { useState } from "react";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";

import CheckBoxIcon from "@mui/icons-material/CheckBox";

import PCMiniatureWebsite from "./PCMiniatureWebsite";
import ContactFreeOffer from "./ContactFreeOffer";
import QuoteForm from "../../subComponents/QuoteForm";

const Solutions = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        pt: 10,
        px: 3,
      }}
    >
      <Grid container>
        <Typography variant="h2">
          Let's Build You a Website for FREE!
        </Typography>
      </Grid>
      <Grid
        id="offer-card"
        container
        justifyContent={"center"}
        sx={{ width: "100%" }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            width: "100%",
            maxWidth: 412,
            boxShadow: 25,
            pb: 2,
          }}
        >
          <PCMiniatureWebsite />

          <OfferBody />
          <CTA />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Solutions;

const OfferBody = () => {
  return (
    <Grid container spacing={2} size={12} sx={{ px: 2 }}>
      <Grid container spacing={1} sx={{ width: "100%", maxWidth: 250 }}>
        <Typography variant="h4">
          We’re Building FREE Websites — Claim Yours!
        </Typography>
        {/* <Typography variant="body2" color="textDisabled">
        Boost your digital reach with our modern and functional web applications
        that helps drive visibility and boost business ROI through a seamless
        UI/UX that converts leads into clients.
      </Typography> */}
      </Grid>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Typography variant="h3">Features</Typography>
        </Grid>
        <Grid container direction={"column"} spacing={1}>
          <Grid container alignItems={"center"}>
            <CheckBoxIcon color="primary" />
            <Typography variant="h5">Single Page Web App</Typography>
          </Grid>
          <Grid container alignItems={"center"}>
            <CheckBoxIcon color="primary" />
            <Typography variant="h5">Mobile First Design</Typography>
          </Grid>
          <Grid container alignItems={"center"}>
            <CheckBoxIcon color="primary" />
            <Typography variant="h5">Responsive Web App</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CTA = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openQuoteForm, setOpenQuoteForm] = useState(false);

  const handleOpenQuoteForm = () => {
    setOpenQuoteForm(true);
  };

  const handleOpenModal = () => setOpenModal(true);
  return (
    <Grid container spacing={2}>
      <ContactFreeOffer open={openModal} setOpen={setOpenModal} />
      <Grid container size={12} justifyContent={"center"}>
        <Button
          variant="custom"
          sx={{
            color: "#fff",
            px: 9,
            background:
              "linear-gradient(92.27deg, #A300A3 -1.65%, rgba(255, 51, 255, 0.6) 132.82%)",
          }}
          onClick={handleOpenModal}
        >
          🚀 Get A Free Website
        </Button>
      </Grid>
      <Grid container size={12} justifyContent={"center"}>
        <Divider
          color="textDisabled"
          sx={{ width: "100%", maxWidth: 300, px: 5 }}
        >
          <Typography
            component={"span"}
            variant="h4"
            color="textDisabled"
            sx={{ px: 1 }}
          >
            OR
          </Typography>
        </Divider>
      </Grid>
      <Grid container size={12} justifyContent={"center"}>
        <Button variant="text" onClick={handleOpenQuoteForm}>
          Request For A Full Fledged Website
        </Button>
      </Grid>

      <QuoteForm open={openQuoteForm} setOpen={setOpenQuoteForm} />
    </Grid>
  );
};
