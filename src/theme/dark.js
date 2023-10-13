import { createTheme } from "@mui/material";

export const Dark = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      fontSize: "62px",
    },
    h2: {
      fontSize: "42px",
    },
    h3: {
      fontSize: "20px",
    },
    h4: {
      fontSize: "16px",
    },
    h5: {
      fontSize: "14px",
    },
  },
});

export const Light = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: "62px",
      fontFamily: "Source Code Pro", 
        },
    h2: {
      fontSize: "42px",
      fontFamily: "Source Code Pro",
    },
    h3: {
      fontSize: "20px",
      fontFamily: "Source Code Pro",
    },
    h4: {
      fontSize: "16px",
      fontFamily: "Source Code Pro",
    },
    h5: {
      fontSize: "14px",
      fontFamily: "Source Code Pro",
    },
    body1: {
      fontSize: "14px",
      fontFamily: "Source Code Pro",
    },
  },
});
