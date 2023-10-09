import React, { useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export const MuiRadioButton = () => {
  //state and function to handle radio button value
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years Of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
          <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
          <FormControlLabel value="5-6" control={<Radio />} label="5-6" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
