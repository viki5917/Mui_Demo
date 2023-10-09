import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={70} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={70} />
    </Stack>
  );
};
