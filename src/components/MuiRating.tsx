import React, { useState } from "react";

import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      {/* Default rating icon star */}
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        // readOnly  //if readOnly and initial value is not null then cannot change the rating
        // highlightSelectedOnly //to highlight only one icon
      />

      {/* custom rating icon heart*/}
      <Rating
        // value={value}
        // onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Stack>
  );
};
