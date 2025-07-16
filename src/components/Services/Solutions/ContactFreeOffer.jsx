import React, { useEffect, useState } from "react";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

import Contact from "../../Contact/Contact";
import CancelScreen from "../../subComponents/CancelScreen";
import useFirestore from "../../../hooks/useFirestore";
import SubmitResultSnackbar from "../../subComponents/SubmitResultSnackBar";

const SECTION_ID = "free-contact";

const ContactFreeOffer = ({ open, setOpen }) => {
  const [submitResult, setSubmitResult] = useState({ info: "", result: "" });
  const [openAlert, setOpenAlert] = useState(false);
  const [contactData, setContactData] = useState({
    fName: { data: "", error: false },
    lName: { data: "", error: false },
    phoneNo: { data: "", error: false },
    email: { data: "", error: false },
    message: { data: "", error: false },
    IGHandle: "",
    business: "",
  });

  const { isLoading, addFreeContact } = useFirestore();

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleDataChange = (el, ev) => {
    setContactData((prev) => ({
      ...prev,
      [el]: ev.target.value,
    }));
  };

  const submitUserData = (formData) => {
    const updatedData = { ...contactData, ...formData };
    const fName = formData.fName["data"];
    const lName = formData.lName["data"];
    const phoneNo = formData.phoneNo["data"];
    const email = formData.email["data"];
    const message = formData.message["data"];
    const IGHandle = contactData.IGHandle;
    const business = contactData.business;
    setContactData(updatedData);
    addFreeContact({
      fName,
      lName,
      phoneNo,
      email,
      message,
      IGHandle,
      business,
    }).then((result) => {
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
  return (
    <CancelScreen open={open} setOpen={setOpen} pathName={SECTION_ID}>
      <Contact
        standalone={false}
        isLoading={isLoading}
        setContactData={setContactData}
        onSubmit={submitUserData}
        metaData={{
          header: "Get A Free Website",
          subHeader:
            "Reach out — we're ready to build something great with you for Free.",
          cta: "Submit Information",
          pathName: SECTION_ID,
        }}
      >
        <Grid container spacing={1}>
          <Typography variant="body2">Kindly give us your IG Handle</Typography>
          <TextField
            id="IG-handle"
            onChange={(ev) => handleDataChange("IGHandle", ev)}
            variant="filled"
            sx={{ width: "100%" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon color="adornment" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>

        <Grid container spacing={1}>
          <Typography variant="body2">What business are you into?</Typography>
          <TextField
            id="business"
            onChange={(ev) => handleDataChange("business", ev)}
            variant="filled"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Contact>

      <SubmitResultSnackbar
        submitResult={submitResult}
        open={openAlert}
        setOpen={setOpenAlert}
      />
    </CancelScreen>
  );
};

export default ContactFreeOffer;
