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
          p: { xs: 2.5, sm: 3, md: 4 },
          mt: { xs: "calc(max(-80%, -262px))", sm: "calc(max(-76%, -262px))" },
          width: { xs: "92%", sm: "90%" },
          maxWidth: { xs: "100%", sm: 600 },
          position: "relative",
          zIndex: 1,
          border: "1px solid rgba(255, 255, 255, 0.15)",
          background: "rgba(10, 10, 10, 0.85)",
          backdropFilter: "blur(20px)",
          borderRight: "2px solid rgba(0, 102, 255, 0.4)",
          borderTop: "1px solid rgba(0, 217, 255, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0, 102, 255, 0.2)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 48px rgba(0, 102, 255, 0.3)",
          },
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
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                lineHeight: 1.3,
                fontWeight: 700,
              }}
            >
              Building the Future of{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital
              </Box>{" "}
              Experiences
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                opacity: 0.9,
              }}
            >
              Let's build your next big idea—whether it's a{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "primary.light",
                }}
              >
                Website
              </Box>{" "}
              or an{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "primary.light",
                }}
              >
                App
              </Box>
              , our IT solutions are designed to power your growth.
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
