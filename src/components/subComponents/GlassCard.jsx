import React from "react";
import { Box, Paper } from "@mui/material";

const GlassCard = ({ children, spacing, style, ...props }) => {
  return (
    //    📦 Glass Cards

    <Paper
      elevation={25}
      sx={{
        width: "100%",
        height: "100%",
        p: spacing == undefined ? 3 : spacing == true ? 3 : 0,
        borderRadius: 3,
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default GlassCard;
