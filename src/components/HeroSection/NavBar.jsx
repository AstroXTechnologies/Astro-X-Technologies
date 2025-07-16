import React, { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  IconButton,
  Switch,
  useColorScheme,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import LogoText from "../../../assets/svg/astrox-text.svg?react";
import { motion } from "motion/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useColorScheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  if (!mode) return null;
  return (
    <>
      <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
      <Grid size={12} sx={{ position: "relative" }}>
        {/* Animated Neon Lights */}
        {mode == "light" && (
          <NeonLight
            color={"primary.main"}
            animate={{ x: [-20, 0, 20], y: [-20, 0, 20] }}
            position={{ top: -80, left: -100 }}
          />
        )}
        {mode == "light" && (
          <NeonLight
            color={"secondary.main"}
            animate={{ x: [-40, 0, 40], y: [-40, 0, 40] }}
            position={{ top: 90, right: -200 }}
          />
        )}
        <Box sx={{ px: 3, pt: 1, position: "relative", zIndex: 1 }}>
          <Grid container alignItems="center" sx={{ width: "100%" }}>
            <Grid container alignItems="center" size={6}>
              <Box sx={{ width: 60, display: "inline-block" }}>
                <LogoText />
              </Box>
            </Grid>
            <Grid container alignItems="center" size={6}>
              {/* Switch to control the color theme of the app */}
              <Grid sx={{ flexGrow: 1 }}>
                <MaterialUISwitch
                  checked={mode == "dark" ? true : false}
                  onChange={(e) => setMode(e.target.checked ? "dark" : "light")}
                />
              </Grid>
              <Grid>
                <IconButton color="primary" onClick={toggleDrawer(true)}>
                  <MenuIcon fontSize="medium" sx={{ color: "text.primary" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default NavBar;

const NeonLight = ({ position, color, animate }) => (
  <>
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        position: "absolute",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(50px)",
          position: "absolute",
          zIndex: 0,
          bgcolor: color,
          ...position,
        }}
        component={motion.div}
        initial={{ x: 0, y: 0 }}
        animate={animate}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      />
    </Box>
  </>
);

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  transform: "scale(.8)",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.secondary.light,
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.primary.light,
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.secondary.main,
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.primary.main,
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.primary.light,
    }),
  },
}));

const TemporaryDrawer = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { name: "Home", id: "#home" },
          { name: "Testimonials", id: "#testimonials" },
          { name: "About Us", id: "#about-us" },
          { name: "Services", id: "#services" },
          { name: "Contact Us", id: "#contact-us" },
        ].map((text, index) => (
          <Box key={index}>
            <ListItem sx={{ width: "100%" }} key={text} disablePadding>
              <Link
                underline="none"
                width={"100%"}
                height={"100%"}
                color="text.primary"
                href={text.id}
              >
                <ListItemButton>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </Link>
            </ListItem>
            <Box sx={{ width: "100%", py: 1 }}>
              <Divider />
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
