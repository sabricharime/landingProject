import {} from "@mui/base";
import {
  Box,
  Card,
  CardHeader,
  Container,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  CardContent,
} from "@mui/material";
import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

const FeaturesMobile = () => {
  return <h1>Mobile </h1>;
};
const FeaturesDesktop = () => {
  return (
    <>
      <Container
        sx={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          paddingBlock: "3rem",
        }}>
        <Typography
          sx={{
            fontWeight: 300,
            textAlign:"center"
          }}
          variant="h2">
          Build Faster Landing Pages
        </Typography>



        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Card variant="none">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  flexDirection: "column",
                  gap: 2,
                }}>
                <PushPinOutlinedIcon
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                  }}>
                  Easily Add Any Script
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  veritatis consequuntur illum distinctio consequatur maxime
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card variant="none">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  flexDirection: "column",
                  gap: 2,
                }}>
                <OndemandVideoOutlinedIcon
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                  }}>
                  Video Widgets
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  veritatis consequuntur illum distinctio consequatur maxime
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card variant="none">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  flexDirection: "column",
                  gap: 2,
                }}>
                <MouseIcon
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                  }}>
                  Parallax Scroling
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  veritatis consequuntur illum distinctio consequatur maxime
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Features = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return  <FeaturesDesktop />;
};

export default Features;
