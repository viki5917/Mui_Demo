import { Stack, Box, TextField, MenuItem } from "@mui/material";

import React, { useState } from "react";

export const MuiSelect = () => {
  //state and function to handle single select
  const [country, setCountry] = useState("");
  console.log({ country });
  const handleSingleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  //state and function to handle multiple select
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleMultipleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack direction="row" spacing={3}>
      <Box width="200px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleSingleSelect}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="SL">SriLanka</MenuItem>
        </TextField>
      </Box>
      <Box width="200px">
        <TextField
          label="Select Countries"
          select
          value={countries}
          onChange={handleMultipleSelect}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="SL">SriLanka</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};
