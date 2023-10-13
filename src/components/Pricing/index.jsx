import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

export default function Pricing() {
  const theme = useTheme();
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          paddingBlock: "2rem",
          alignItems: "center",
          marginBottom: "2rem",
        }}>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="h2"
            gutterBottom>
            be a Design Hero
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              maxWidth: "500px",
            }}
            variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eius
            est asperiores. Voluptatum, natus numquam porro voluptatibus culpa,
            corporis aliquid repellat nulla
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: "2rem",

                borderRadius: "3px",
              }}>
              <Typography variant="h5">STUDENT</Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography
                  sx={{
                    display: "inline",
                  }}
                  variant="h3">
                  $
                </Typography>
                <Typography
                  sx={{
                    display: "inline",
                  }}
                  variant="h2">
                  19
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBlock: 2,
                }}>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  1Gb Of space
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  Support an $25/hour
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  Small social media package
                </Typography>
              </Box>

              <Button variant="outlined" fullWidth>I WANT IT </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: "2rem",
                background: theme.palette.mode === "dark" ? "white" : "#333",
                color: theme.palette.mode === "dark" ? "black" : "white",
                borderRadius: "3px",
              }}>
              <Typography variant="h5">PROFESSIONAL</Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography
                  sx={{
                    display: "inline",
                  }}
                  variant="h3">
                  $
                </Typography>
                <Typography
                  sx={{
                    display: "inline",
                  }}
                  variant="h2">
                  119
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBlock: 2,
                }}>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  5Gb Of space
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  Support an $5/hour
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  Medium social media package
                </Typography>
              </Box>

              <Button variant="contained" fullWidth>I WANT IT </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: "2rem",

                borderRadius: "3px",
              }}>
              <Typography variant="h5">MASTER</Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography
                  sx={{
                    display: "inline",
                  }}
                  variant="h3">
                  $
                </Typography>
                <Typography
                  sx={{
                    display: "inline",
                  }}
                  variant="h2">
                  344
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBlock: 2,
                }}>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  Unlimited space
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  20 hours of free support
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  Full social media package
                </Typography>
              </Box>

              <Button variant="outlined" fullWidth>I WANT IT </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
