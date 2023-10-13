import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
import { Dark, Light } from "./theme/dark";
import Hero from "./components/Hero";
import Features from "./components/features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { light } from "@mui/material/styles/createPalette";

export const ThemeContext = createContext(null);
const App = () => {
  const [mode, setMode] = useState("light");
  return (
    <ThemeContext.Provider value={{setMode}}>
      <ThemeProvider theme={mode === "light" ? Light : Dark}>
        <CssBaseline />
        <Hero  />
        <Features />
        <Pricing />
        <Contact />
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
