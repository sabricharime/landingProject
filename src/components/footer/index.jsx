import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { Menu } from "../../Data/MenuMaster";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        background: "#001",
        minHeight: "50vh",
        color: "#f4f9f4",
      }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          gap: {
            xs: 2,
            md: 8,
          },
          paddingBlock: 3,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "start",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100px",
            height: "100px",
          }}>
          <Box
            component={"img"}
            src=" /logo.png"
            sx={{
              maxWidth: "60px",
            }}
          />
          <Typography variant="h3">Design</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              height: 100,
            }}>
            {Menu.map((item, key) => (
              <Button
                key={key}
                href={item.path}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "600",
                  fontSize: "14px",
                }}>
                {item.name}
              </Button>
            ))}
          </Box>

          <Box maxWidth={400}>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Just then her head Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Perferendis quasi reprehenderit natus sit
              aspernatur neque. Consectetur possimus ratione doloribus vitae
              voluptate corrupti asperiores, voluptatum nam consequatur eligendi
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              height: 100,
              width: "100%",
            }}>
            <Typography variant="h3">Folow us</Typography>
          </Box>

          <Box maxWidth={400}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                justifyContent: "center",
                marginTop: "2rem",
              }}>
              <IconButton
                sx={{
                  color: "white",
                }}>
                <FacebookOutlinedIcon color="white" />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
