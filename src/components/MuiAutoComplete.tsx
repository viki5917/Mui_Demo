import { useState } from "react";

import { Stack, Autocomplete, TextField } from "@mui/material";

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log({ value });

  // options
  const skills = [
    "HTML",
    "CSS",
    "MUI",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
  ];

  //   used in real world project with id and label

  const [skill, setSkill] = useState<Skill | null>(null);

  type Skill = {
    id: number;
    label: string;
  };

  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        // freeSolo    //to select anything not in the options
      />

      {/* used in real world project with id and label*/}
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
