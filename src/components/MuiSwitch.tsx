import React, { useState } from "react";

import { Box, FormControlLabel, Switch } from "@mui/material";

export const MuiSwitch = () => {
  //state and function to handle toggle switch button
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};
