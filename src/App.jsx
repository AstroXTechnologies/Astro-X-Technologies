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
          main: "#ff00ff",
          light: "#ff33ff",
          dark: "#a300a3",
          contrastText: "#333",
        },
        secondary: {
          main: "#00A2FF",
          light: "#66CFFF",
          dark: "#007ACC",
          contrastText: "#E6EAF0",
        },
        adornment: {
          main: "#ff00ff80",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#ff00ff",
          light: "#ff33ff",
          dark: "#b200b2",
          contrastText: "#ccc",
        },
        secondary: {
          main: "#00A2FF",
          light: "#66CFFF",
          dark: "#007ACC",
          contrastText: "#E6EAF0",
        },
        adornment: {
          main: "#ff00ff80",
        },
      },
    },
  },

  typography: {
    fontFamily: '"inter", sans-serif;',
    fontOpticalSizing: "auto",
    h1: {
      fontFamily: '"Orbitron", sans-serif;',
      fontSize: "1.9rem",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: 0.5,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "#ff00ff",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: ".875rem",
      fontWeight: 600,
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

theme = createTheme({
  ...theme,
  shadows: [...theme.shadows, "0 8px 24px rgba(0,0,0,0.2)"],
  components: {
    MuiButton: {
      styleOverrides: {
        custom: {
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          padding: theme.spacing(1, 2.5),
          borderRadius: 20,
          fontWeight: 500,
          textTransform: "capitalize",
          color: theme.palette.primary.light,
        },
        text: {
          fontWeight: 600,
        },
        outlined: {
          borderRadius: 20,
          fontWeight: 500,
          textTransform: "capitalize",
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
