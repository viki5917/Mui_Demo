import { Snackbar, Button, Alert, AlertProps } from "@mui/material";

import { useState, forwardRef } from "react";

// custom snackbar component
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

export const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* Default Snackbar */}
      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      /> */}

      {/* Custom Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
