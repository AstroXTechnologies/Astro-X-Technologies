import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "motion/react";

const TechStats = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 6 },
        position: "relative",
        zIndex: 10,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {stats.map((stat, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={3}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              component={motion.div}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 217, 255, 0.8)",
              }}
              sx={{
                p: { xs: 2, sm: 3 },
                textAlign: "center",
                border: "2px solid",
                borderColor: "rgba(0, 102, 255, 0.3)",
                borderRadius: 3,
                background: "rgba(0, 102, 255, 0.03)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.2), transparent)",
                  animation: "shimmer 3s infinite",
                },
                "@keyframes shimmer": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" },
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStats;
