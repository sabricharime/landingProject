import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
  return (
    <>
      <Container
        sx={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          
        }}>
        <Grid
          container
          spacing={4}
          sx={{
            minHeight: "70vh",
          }}>
          <Grid item xs={12} md={6} gap={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                paddingBlock: "3rem",
              }}>
              <Typography variant="h3" sx={{ fontWeight: "600" }} gutterBottom>
                LET'S GET IN TOUCH{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "400" }}
                gutterBottom>
                Design plays a crucial role in creating difference and value for
                brands. No matter where in the process you are. That's why
                design is an integral part of think{" "}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneEnabledOutlinedIcon />{" "}
                <Typography variant="h3" sx={{ display: "inline" }}>
                  +213668038264
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailOutlinedIcon />{" "}
                <Typography variant="h3" sx={{ display: "inline" }}>
                  sabricharim7@gmail.com
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3" gutterBottom>
                  {" "}
                  <Divider>FOLLOW US</Divider>{" "}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}>
                  <IconButton>
                    <FacebookOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} alignItems={"center"}  >
            <Box
              component={"form"}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                paddingBlock: "3rem",
                flex:"1",
                width:"100%",
                
              }}>
              <Box gap={2} display={"flex"}>
                <TextField
                  id="outlined-basic"
                  label="name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box gap={2} display={"flex"}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Your Message "
                  fullWidth
                  multiline
                  rows={7}
                />
              </Box>
              <Box display={"flex"} gap={2}>
                <FormControl fullWidth>
                  <InputLabel >Age</InputLabel>
                  <Select                    
                    label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Button fullWidth variant="contained">
                  LET'S TALK
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
