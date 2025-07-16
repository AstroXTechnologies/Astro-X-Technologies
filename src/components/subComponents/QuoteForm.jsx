import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import useFirestore from "../../hooks/useFirestore";

import Contact from "../Contact/Contact";
import CancelScreen from "./CancelScreen";
import SubmitResultSnackbar from "./SubmitResultSnackBar";

const SECTION_ID = "quote_form";

const QuoteForm = ({ open, setOpen }) => {
  const [submitResult, setSubmitResult] = useState({ info: "", result: "" });
  const [openAlert, setOpenAlert] = useState(false);
  const [hasExistingSite, setHasExistingSite] = useState(false);
  const [contactData, setContactData] = useState({
    fName: { data: "", error: false },
    lName: { data: "", error: false },
    phoneNo: { data: "", error: false },
    email: { data: "", error: false },
    message: { data: "", error: false },
    existingSite: "",
    budget: { value: 0, currency: "USD" },
    reachOutChannel: "",
    businessName: "",
    business: "",
  });

  const { isLoading, addQuoteContact } = useFirestore();

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
    const quoteData = { ...updatedData, fName, lName, phoneNo, email, message };
    setContactData(updatedData);
    addQuoteContact(quoteData).then((result) => {
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
          header: "Recieve a Quote",
          subHeader:
            "Reach out — Get a Quote from us today to build a fully robust web application.",
          pathName: SECTION_ID,
        }}
      >
        <FormTextField
          label={"business"}
          value={contactData["business"]}
          caption={"What business are you into?"}
          handleDataChange={handleDataChange}
        />
        <FormTextField
          label={"businessName"}
          value={contactData["businessName"]}
          caption={"What's your business name?"}
          handleDataChange={handleDataChange}
        />

        <Grid container spacing={1}>
          <RadioButtonsGroup setHasExistingSite={setHasExistingSite} />
          {hasExistingSite && (
            <FormTextField
              value={contactData["existingSite"]}
              label={"existingSite"}
              caption={"Link to your existing site"}
              handleDataChange={handleDataChange}
            />
          )}
        </Grid>
        <FormTextField
          label={"budget"}
          value={contactData.budget.value}
          Adornment={({ ...props }) => (
            <>
              <TextField
                variant="standard"
                id="budget-currency"
                select
                value={contactData.budget.currency}
                slotProps={{ select: { disableUnderline: true } }}
                onChange={(ev) => {
                  setContactData((prev) => ({
                    ...prev,
                    budget: { ...prev.budget, currency: ev.target.value },
                  }));
                }}
                {...props}
              >
                {[
                  { label: "$", value: "USD" },
                  { label: "₦", value: "NGN" },
                ].map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
          caption={"What is your budget?"}
          handleDataChange={(el, ev) => {
            setContactData((prev) => ({
              ...prev,
              [el]: { ...prev.budget, value: ev.target.value },
            }));
          }}
        />

        {/* Preferred Reach Out Channel */}

        <Grid container spacing={1}>
          <Typography variant="body2">
            What's your preferred channel for us to reach out?
          </Typography>
          <TextField
            id="reach-out-channel"
            value={contactData.reachOutChannel}
            variant="filled"
            select
            fullWidth
            onChange={(ev) => handleDataChange("reachOutChannel", ev)}
          >
            {["WhatsApp DM", "WhatsApp Call", "Mobile Call", "Google Meet"].map(
              (option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              )
            )}
          </TextField>
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

export default QuoteForm;

const FormTextField = ({
  label,
  value,
  caption,
  Adornment,
  handleDataChange,
}) => (
  <Grid container spacing={1}>
    <Typography variant="body2">{caption}</Typography>
    <TextField
      id={label}
      value={value}
      onChange={(ev) => handleDataChange(label, ev)}
      variant="filled"
      sx={{ width: "100%" }}
      slotProps={{
        input: {
          startAdornment: Adornment ? (
            <InputAdornment position="start">
              <Adornment color="adornment" />
            </InputAdornment>
          ) : (
            <></>
          ),
        },
      }}
    />
  </Grid>
);

function RadioButtonsGroup({ setHasExistingSite }) {
  const handleChange = (event) => {
    setHasExistingSite(() => {
      if (event.target.value == "yes") return true;
      if (event.target.value == "no") return false;
    });
  };
  return (
    <FormControl>
      <FormLabel>Have an existing Site?</FormLabel>
      <RadioGroup row onChange={handleChange} name="has-existing-site">
        <FormControlLabel value="yes" control={<Radio />} label="I do" />
        <FormControlLabel value="no" control={<Radio />} label="I don't" />
      </RadioGroup>
    </FormControl>
  );
}
