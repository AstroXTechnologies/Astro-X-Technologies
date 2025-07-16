import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubmitResultSnackbar from "../subComponents/SubmitResultSnackBar";
import useFirestore from "../../hooks/useFirestore";

const Footer = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [email, setEmail] = useState("");
  const { addEmail, isLoading } = useFirestore();

  const handleChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handleSubmitEmail = () => {
    addEmail({ newsletterEmail: email }).then(() => setOpenSnackbar(true));
  };
  return (
    <Grid container spacing={3} sx={{ pt: 10, px: 3, width: "100%" }}>
      <Grid size={12} sx={{ pb: 0 }}>
        <Divider />
      </Grid>
      {/* Sections & Info */}
      <Grid container size={12} spacing={2}>
        <Grid direction={"column"} spacing={0.5} container size={6}>
          <Grid>
            <Typography variant="h4">Sections</Typography>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#home" underline="hover">
              <Typography variant="body2">Home</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#testimonials" underline="hover">
              <Typography variant="body2">Testimonials</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#services" underline="hover">
              <Typography variant="body2">Services</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#about-us" underline="hover">
              <Typography variant="body2">About Us</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#contact-us" underline="hover">
              <Typography variant="body2">Contact Us</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid container direction={"column"} spacing={1} size={6}>
          <Grid>
            <Typography variant="h4">Info</Typography>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#web-dev" underline="hover">
              <Typography variant="body2">Web Developement</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#video-edit" underline="hover">
              <Typography variant="body2">Video Editing</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#offer-card" underline="hover">
              <Typography variant="body2">Get A Free Website</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Newsletter Section */}
      <Grid size={12} container spacing={1}>
        <Grid size={12}>
          <Typography variant="h5">Subscribe to our Newsletter!</Typography>
        </Grid>
        <Grid size={12} container spacing={3}>
          <TextField
            id="email"
            variant="standard"
            helperText="Enter your Email"
            sx={{ flex: 1, maxWidth: 300 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlinedIcon color="adornment" />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChange}
          />
          <Grid>
            <Button
              variant="outlined"
              loading={isLoading}
              loadingPosition="start"
              onClick={handleSubmitEmail}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <SubmitResultSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          submitResult={{
            info: "Thanks for Subscribing to our Newsletter!",
            result: "success",
          }}
        />
      </Grid>

      {/* Social Media links */}
      <Grid container rowSpacing={1}>
        <Grid size={12}>
          <Typography variant="body2">Follow Us on:</Typography>
        </Grid>
        <Link
          color="text.primary"
          underline="none"
          href="https://facebook.astroxtechnologies.com/"
          target="_blank"
        >
          <FacebookIcon />
        </Link>
        <Link
          color="text.primary"
          underline="none"
          href="https://instagram.astroxtechnologies.com"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link
          color="text.primary"
          underline="none"
          href="https://whatsapp.astroxtechnologies.com"
          target="_blank"
        >
          <WhatsAppIcon />
        </Link>
        <Link
          color="text.primary"
          underline="none"
          href="https://youtube.astroxtechnologies.com"
          target="_blank"
        >
          <YouTubeIcon />
        </Link>
      </Grid>

      {/* Copyright */}
      <Grid container size={12} justifyContent={"center"} sx={{ pb: 1 }}>
        <Typography variant="body2">
          @ AstroX Technologies {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
