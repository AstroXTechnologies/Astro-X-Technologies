import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import useFirestore from "../../hooks/useFirestore";
import SubmitResultSnackbar from "../subComponents/SubmitResultSnackBar";

const Contact = ({
  onSubmit = () => {},
  isLoading = false,
  metaData: { header, subHeader, cta, ctaId, pathName } = {
    header: "",
    subHeader: "",
    cta: "",
    pathName: "contact-us",
  },
  standalone = true,

  children,
}) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    fName: { data: "", error: false },
    lName: { data: "", error: false },
    phoneNo: { data: "", error: false },
    email: { data: "", error: false },
    message: { data: "", error: false },
  });
  const [submitResult, setSubmitResult] = useState({ info: "", result: "" });
  const [openAlert, setOpenAlert] = useState(false);
  const [openClipboard, setOpenClipboard] = useState(false);

  const { isLoading: standaloneLoading, addContact } = useFirestore();

  const handleCloseClipboard = () => setOpenClipboard(false);

  const handleDataChange = (el, ev) => {
    setFormData((prev) => ({
      ...prev,
      [el]: { data: ev.target.value, error: false },
    }));
  };

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleUploadData = () => {
    const fName = formData.fName["data"];
    const lName = formData.lName["data"];
    const phoneNo = formData.phoneNo["data"];
    const email = formData.email["data"];
    const message = formData.message["data"];

    addContact({ fName, lName, phoneNo, email, message }).then((result) => {
      if (result == "success") {
        setSubmitResult({
          info: "Information Successfully uploaded!!",
          result,
        });
        handleOpenAlert();
        return;
      }
      if (result == "error") {
        setSubmitResult({
          info: "Sorry something went wrong!",
          result,
        });
        handleOpenAlert();
        return;
      }
    });
  };
  const handleSubmitData = () => {
    setError(false);

    const dataKeys = Object.keys(formData);
    const dataObj = Object.values(formData);
    dataKeys.pop();
    dataObj.pop();

    let num = 0;
    let error = false;
    while (num < dataKeys.length) {
      if (dataObj[num].data.length < 1) {
        setFormData((prev) => ({
          ...prev,
          [dataKeys[num]]: { data: "", error: true },
        }));
        error = true;
        setError(true);
        if (standalone) {
          window.location.hash = `#${pathName}`;
          window.location.pathname = "/";
        }
        if (!standalone) {
          document.getElementById(pathName).scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        return;
      }
      num++;
    }

    if (error) return;
    onSubmit(formData);
    if (!standalone) return;
    handleUploadData();
  };

  return (
    <>
      <Grid
        id="contact-us"
        container
        spacing={4}
        sx={{ width: "100%", px: 3, pt: standalone ? 10 : 0 }}
      >
        <Grid container spacing={1} size={12}>
          <Grid size={12}>
            <Typography variant="h3">
              {standalone ? "Contact Us" : header ? header : "Contact Us"}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="h4">
              {standalone
                ? "Reach out — we're ready to build something great with you."
                : subHeader
                ? subHeader
                : "Reach out — we're ready to build something great with you."}
            </Typography>
          </Grid>
        </Grid>
        <Grid label="parent-input-form" container spacing={4} size={12}>
          <Grid container size={12} spacing={2}>
            {error && (
              <Grid sx={{ width: "100%", maxWidth: 416 }}>
                <Typography color="error" variant="body2">
                  Please fill the form before submitting.
                </Typography>
              </Grid>
            )}
            <Grid flex={1} sx={{ maxWidth: 200 }}>
              <TextField
                name="first-name"
                error={formData.fName.error}
                value={formData.fName.data}
                onChange={(ev) => handleDataChange("fName", ev)}
                helperText="Enter your First Name"
                variant="filled"
                label="First Name"
                sx={{ width: "100%" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlinedIcon color="adornment" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid flex={1} sx={{ maxWidth: 200 }}>
              <TextField
                name="last-name"
                error={formData.lName.error}
                value={formData.lName.data}
                onChange={(ev) => handleDataChange("lName", ev)}
                helperText="Enter your Last Name"
                variant="filled"
                label="Last Name"
                sx={{ width: "100%" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlinedIcon color="adornment" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container size={12}>
            <TextField
              name="phone-number"
              error={formData.phoneNo.error}
              value={formData.phoneNo.data}
              onChange={(ev) => handleDataChange("phoneNo", ev)}
              helperText="Enter your phone No"
              variant="filled"
              label="Phone No"
              sx={{ width: "100%", maxWidth: 416 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneOutlinedIcon color="adornment" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid container size={12}>
            <TextField
              name="email"
              error={formData.email.error}
              value={formData.email.data}
              onChange={(ev) => handleDataChange("email", ev)}
              helperText="Enter your Email"
              variant="filled"
              label="Email"
              sx={{ width: "100%", maxWidth: 416 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlinedIcon color="adornment" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          {/* Add Children To exted the Contact Form */}
          {children}
          <Grid container spacing={1} size={12}>
            <Typography variant="body2">
              Anything you want us to know?
            </Typography>
            <TextField
              name="message"
              error={formData.message.error}
              value={formData.message.data}
              onChange={(ev) => handleDataChange("message", ev)}
              variant="filled"
              label="Message"
              helperText="Send Us a Message"
              sx={{ width: "100%", maxWidth: 416 }}
              multiline
              rows={4}
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Button
              id={ctaId ? ctaId : "contact-btn"}
              variant="outlined"
              loading={isLoading || standaloneLoading}
              fullWidth
              loadingPosition="start"
              sx={{ width: "100%", maxWidth: 416 }}
              onClick={() => {
                handleSubmitData();
              }}
            >
              {standalone
                ? "Get In Touch With Us"
                : cta
                ? cta
                : "Get In Touch With Us"}
            </Button>
            <Grid
              container
              size={12}
              justifyContent={"center"}
              sx={{ maxWidth: 416 }}
            >
              <Typography variant="body2">
                You may also call us at +234-704-283-0441
                <sup>
                  <IconButton
                    size="small"
                    sx={{ mt: -2 }}
                    onClick={() => {
                      navigator.clipboard
                        .writeText("+2347042830441")
                        .then(() => setOpenClipboard(true));
                    }}
                  >
                    <ContentCopyIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </sup>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Snackbar
          open={openClipboard}
          autoHideDuration={3000}
          message="Copied to Clipboard!"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          onClose={handleCloseClipboard}
          sx={{ width: 180 }}
        />
        <SubmitResultSnackbar
          submitResult={submitResult}
          open={openAlert}
          setOpen={setOpenAlert}
        />
      </Grid>
    </>
  );
};

export default Contact;
