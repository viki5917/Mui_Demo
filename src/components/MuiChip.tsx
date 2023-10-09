import { Stack, Chip, Avatar } from "@mui/material";

import FaceIcon from "@mui/icons-material/Face";

import { useState } from "react";

export const MuiChip = () => {
  //state and function to handle chip delete from a list
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip label="Chip" color="primary" size="medium" icon={<FaceIcon />} />
      <Chip
        variant="outlined"
        label="Chip Outlined"
        color="secondary"
        size="small"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("Clicked")}
        size="small"
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
        size="small"
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
