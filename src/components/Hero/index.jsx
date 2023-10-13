import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Navbar from "../NavBar";

const MobileHero = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingBlock: "2rem",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            paddingBlock: "1rem",
            alignItems: "center",
          }}>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            GET STARTED FOR FREE WITH
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
            }}>
            Great Web Design Tool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            alignItems: "center",
          }}>
          <Button variant="contained"> TRY FIRST ORDER FOR FREE</Button>
          <Button variant="outlined">GET STARTED WITH PRO</Button>
        </Box>
        <Box
          sx={{
            borderRadius: "3px",
            minWidth: 300,
            width: "100%",
            maxWidth: 600,

            maxHeight: 300,
          }}
          component={"img"}
          src=" /89.webp"
        />
      </Container>
    </>
  );
};
const DesktopHero = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingBlock: "2rem",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            paddingBlock: "1rem",
            alignItems: "center",
          }}>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            GET STARTED FOR FREE WITH
          </Typography>
          <Typography variant="h2">Great Web Design Tool</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",

            alignItems: "center",
          }}>
          <Button variant="contained"> TRY FIRST ORDER FOR FREE</Button>
          <Button variant="outlined">GET STARTED WITH PRO</Button>
        </Box>
        <Box
          sx={{
            borderRadius: "3px",
            minWidth: 300,
            width: "100%",
            maxWidth: 600,

            maxHeight: 300,
          }}
          component={"img"}
          src=" /89.webp"
        />
      </Container>
    </>
  );
};

export default function Hero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? <MobileHero /> : <DesktopHero />;
}
