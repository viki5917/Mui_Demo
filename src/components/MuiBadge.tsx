import { Stack, Badge } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge color="primary" badgeContent={5}>
        <MailIcon />
      </Badge>
      <Badge color="primary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
      <Badge color="primary" badgeContent={100} max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" badgeContent={5} invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
