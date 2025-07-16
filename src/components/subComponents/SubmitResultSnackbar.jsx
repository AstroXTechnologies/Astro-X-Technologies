import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SubmitResultSnackbar = ({
  submitResult: { info, result },
  open,
  setOpen,
}) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={result} variant="filled">
        {info}
      </Alert>
    </Snackbar>
  );
};

export default SubmitResultSnackbar;
