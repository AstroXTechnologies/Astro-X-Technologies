import React from "react";

const OfferCard = ({ header, subHeader, offerData, cta }) => {
  return (
    <Grid
      container
      component={Paper}
      elevation={25}
      spacing={3}
      direction={"column"}
      sx={{
        width: 250,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: 3,
        overflow: "hidden",
        pb: 3,
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: 100,
          background:
            "linear-gradient(45deg, #00ffcc 0%, #00A2FF 35%, #ff00ff 100%)",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
          }}
        >
          <Typography variant="h3">{header}</Typography>
        </Grid>
      </Grid>

      {/* Body */}
      <Grid
        container
        spacing={1}
        sx={{
          px: 3,
          width: "100%",
        }}
      >
        <Grid container>
          <Typography variant="h4">{subHeader}</Typography>
        </Grid>
        <Grid container spacing={1}>
          {offerData.map((data, i) => (
            <Grid key={i}>
              <Typography variant="body2">{data}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} sx={{ width: "100%" }}>
        <Button
          variant="custom"
          sx={{
            px: 5,
            background: "linear-gradient(90deg, #e000e0 0%, #ff70ff 100%)",
            // background: "linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)",
            color: "#fff",
          }}
        >
          {cta}
        </Button>
      </Grid>
    </Grid>
  );
};

export default OfferCard;
