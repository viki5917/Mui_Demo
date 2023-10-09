import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="h6" component="h1" gutterBottom>
        component and gutterBottom
      </Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores
        blanditiis, dolorem, quasi quam amet a fuga ullam totam nostrum
        molestias. Distinctio dolore laudantium quia! At libero ea ab
        reiciendis.
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus
        itaque tempora rerum blanditiis temporibus perspiciatis, veniam illum
        recusandae vero repudiandae adipisci asperiores quis sunt facere
        voluptate ex quam doloribus.
      </Typography>
    </div>
  );
};
