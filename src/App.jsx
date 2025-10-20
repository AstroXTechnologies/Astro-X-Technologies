import { useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import "./firebase/firebaseConfig";

import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Info from "./components/Info/Info";

// Create a custom theme

let theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#0066FF",
          light: "#3385FF",
          dark: "#0052CC",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#00D9FF",
          light: "#33E1FF",
          dark: "#00B8D9",
          contrastText: "#0A0A0A",
        },
        success: {
          main: "#00C853",
          light: "#5EFC82",
          dark: "#009624",
        },
        warning: {
          main: "#FFB300",
          light: "#FFC933",
          dark: "#FF8F00",
        },
        error: {
          main: "#FF3D00",
          light: "#FF6E40",
          dark: "#DD2C00",
        },
        background: {
          default: "#F8F9FA",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#666666",
        },
        adornment: {
          main: "#0066FF80",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#3385FF",
          light: "#66A3FF",
          dark: "#0066FF",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#00D9FF",
          light: "#33E1FF",
          dark: "#00B8D9",
          contrastText: "#0A0A0A",
        },
        success: {
          main: "#00E676",
          light: "#69F0AE",
          dark: "#00C853",
        },
        warning: {
          main: "#FFD740",
          light: "#FFE57F",
          dark: "#FFC400",
        },
        error: {
          main: "#FF5252",
          light: "#FF8A80",
          dark: "#FF1744",
        },
        background: {
          default: "#0A0A0A",
          paper: "#1A1A1A",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B3B3B3",
        },
        adornment: {
          main: "#3385FF80",
        },
      },
    },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontOpticalSizing: "auto",
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(1.25rem, 3vw, 2rem)",
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
        elevation25: {
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  shadows: [
    ...theme.shadows,
    "0 8px 32px rgba(0, 102, 255, 0.15)",
    "0 12px 48px rgba(0, 102, 255, 0.2)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.9375rem",
          padding: theme.spacing(1.5, 3),
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(0, 102, 255, 0.25)",
          },
        },
        custom: {
          background: "linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)",
          color: "#FFFFFF",
          boxShadow: "0 4px 16px rgba(0, 102, 255, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #0052CC 0%, #00B8D9 100%)",
            boxShadow: "0 8px 24px rgba(0, 102, 255, 0.4)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            borderRadius: 12,
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-focused": {
              backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.05)",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        },
        elevation2: {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        },
        elevation3: {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      },
    },
  },
});
const App = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <ThemeProvider theme={theme} defaultMode="dark" noSsr>
        <CssBaseline />
        <Hero />
        <Testimonials />
        <About />
        <Info />
        <Services />
        <Contact />
        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default App;
