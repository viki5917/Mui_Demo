import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={10}>
      <Stack
        sx={{ border: "1px solid red" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          //   component="span" //can change it to span,p,a or ant tag
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
            },
          }}
        >
          MuiLayout using Box
        </Box>

        {/* Inline styling in Box */}
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Inlline Styling
        </Box>
      </Stack>

      {/* Grid component */}
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
