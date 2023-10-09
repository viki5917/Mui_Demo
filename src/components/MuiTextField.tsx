import { Stack, TextField, InputAdornment } from "@mui/material";

import { useState } from "react";

export const MuiTextField = () => {
  //state to handle input value and error
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      {/* Types of text fields */}
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* size  and color*/}
      <Stack spacing={2} direction="row">
        <TextField size="small" label="Small" color="secondary" />
        <TextField size="medium" label="Medium" color="error" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : ""}
        />
        <TextField label="Disabled" disabled />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password."
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
