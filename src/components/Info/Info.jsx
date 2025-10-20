import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import QuoteForm from "../subComponents/QuoteForm";

import darkBg from "../../../assets/imgs/dark_gradient_bg.jpg";
import infoImg from "../../../assets/imgs/info_img.png";

const Info = () => {
  const [openQuoteForm, setOpenQuoteForm] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        pt: "calc(min(27vw, 147px))",
        mt: 2,
      }}
    >
      <img
        src={infoImg}
        style={{
          width: "110%",
          maxWidth: 600,
          position: "relative",
          top: "calc(max(-27vw, -145px))",
          left: "-6%",
          zIndex: 1,
          transform: "rotateZ(-5deg)",
        }}
      />
      <Box
        sx={{
          height: 420,

          width: "100%",
          mt: "calc(max(-75vw, -405px))",
          background: `url(${darkBg})`,
          position: "relative",
          overflowX: "hidden",
          overflowY: "visible",
        }}
      ></Box>
      <InfoCard setOpenQuoteForm={setOpenQuoteForm} />
      <QuoteForm open={openQuoteForm} setOpen={setOpenQuoteForm} />
    </Box>
  );
};

export default Info;

const InfoCard = ({ setOpenQuoteForm }) => (
  <>
    <Box
      sx={{
        mb: "calc(min(7%, 90px))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 3,
          mt: "calc(max(-76%, -262px))",

          width: "90%",
          maxWidth: 600,
          position: "relative",
          zIndex: 1,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          background: "rgba(8, 0, 8, 0.62);",
          backdropFilter: "blur(5px)",
          borderRight: "2px solid rgba(255, 0, 255, 0.7)",
          borderTop: "1px solid rgba(0, 122, 204, 0.9)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          borderRadius: 4,
          boxShadow:
            "-5px -5px 12px rgba(126, 15, 128, 0.1), 21px 23px 12px rgba(126, 15, 128, 0.02), 12px 13px 10px rgba(126, 15, 128, 0.07), 5px 6px 8px rgba(126, 15, 128, 0.12), 1px 1px 4px rgba(126, 15, 128, 0.14)",
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          alignItems={"center"}
          sx={{
            "& > *": {
              textAlign: "center",
              color: "#fff",
            },
          }}
        >
          <Grid>
            <Typography variant="h1" sx={{ fontSize: 22, lineHeight: "26px" }}>
              Building the Future of{" "}
              <span style={{ fontWeight: 600, color: "#ff00ff" }}>Digital</span>{" "}
              Experiences
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption">
              Let’s build your next big idea—whether it’s a{" "}
              <span style={{ fontWeight: 600, color: "#ff00ff" }}>Website</span>{" "}
              or an{" "}
              <span style={{ fontWeight: 600, color: "#ff00ff" }}>App</span>,
              our IT solutions are designed to power your growth.
            </Typography>
          </Grid>
          <Grid>
            <RequestQuoteButton setOpenQuoteForm={setOpenQuoteForm} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
);

const RequestQuoteButton = ({ setOpenQuoteForm }) => {
  const handleOpenQuote = () => {
    setOpenQuoteForm(true);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleOpenQuote}>
        Connect With Our Team
      </Button>
    </>
  );
};
