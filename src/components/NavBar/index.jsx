import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  Paper,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, secondaryMenu } from "../../Data/MenuMaster";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../../App";

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const p = useContext(ThemeContext);

  return (
    <>
      <AppBar
        sx={{
          position: "static",
        }}>
        <Toolbar>
          <Container
            maxWidth={"sm"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Box
              component={"img"}
              src=" /logo.png"
              sx={{
                maxWidth: "60px",
              }}
            />

            <IconButton onClick={() => setOpen(!open)} color="inherit">
              <MenuIcon color="inherit" />
            </IconButton>
          </Container>

          <Drawer
            open={open}
            anchor="right"
            onClose={(e) => {
              return setOpen(false);
            }}>
            <List
              sx={{
                paddingBlock: "4rem",
                paddingInline: "3rem",
              }}>
              {Menu.map((item, idx) => (
                <ListItemButton
                  key={idx}
                  onClick={() => setOpen(!open)}
                  sx={{
                    minWidth: "300px",
                  }}>
                  <Link href={item.path} underline="none">
                    {item.name}
                  </Link>
                </ListItemButton>
              ))}

              <Divider>auth</Divider>
              {secondaryMenu.map((item, idx) => (
                <ListItemButton
                  key={idx}
                  onClick={() => setOpen(!open)}
                  sx={{
                    minWidth: "300px",
                  }}>
                  <Link href="#" underline="none">
                    {item.name}
                  </Link>
                </ListItemButton>
              ))}
              <Divider>change mode</Divider>
              <FormControlLabel
                control={
                  <Switch
                    onChange={(e) =>
                      e.currentTarget.checked
                        ? p.setMode("dark")
                        : p.setMode("light")
                    }
                  />
                }
                label="Dark"
              />
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const DesktopNavbar = () => {
  const [open, setOpen] = useState(false);
  const p = useContext(ThemeContext);

  return (
    <Box>
      <Toolbar
        sx={{
          marginTop: "1rem",
        }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          maxWidth={"lg"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
              gap: "1rem",
            }}>
            {Menu.map((item, key) => (
              <Button
                key={key}
                href={item.path}
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  fontWeight: "600",
                  fontSize: "14px",
                }}>
                {item.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            {secondaryMenu.map((item, key) => (
              <Button
                key={key}
                href={item.path}
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  padding: ".3rem .8rem",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                variant={key === 1 ? "outlined" : "text"}>
                {item.name}
              </Button>
            ))}
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) =>
                    e.currentTarget.checked
                      ? p.setMode("dark")
                      : p.setMode("light")
                  }
                />
              }
              label="Dark"
            />
          </Box>
        </Container>
      </Toolbar>
    </Box>
  );
};

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? <MobileNavbar /> : <DesktopNavbar />;
}
