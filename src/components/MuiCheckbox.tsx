import React, { useState } from "react";

import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  //state and function to handle single checkbox value
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });
  const handleSingleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  //state and function to handle multiple checkbox value
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  const handleMultipleCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      {/* single checkbox */}
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleSingleCheckBox}
            />
          }
        />
      </Box>

      {/* Icon as CheckBox */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          //   checked={acceptTnC}
          //   onChange={handleSingleCheckBox}
        />
      </Box>

      {/* Multiple CheckBox */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleMultipleCheckBox}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleMultipleCheckBox}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleMultipleCheckBox}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
