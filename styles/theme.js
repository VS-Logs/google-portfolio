import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

const getTheme = (darkMode) => ({
  fontFamily: "arial,sans-serif",
  colors: {
    primary: darkMode ? "#BCC0C3" : "#4D5156",
    background: darkMode ? "#202124" : "#FFFFFF",
  },
  breakpoints: {
    sm: "screen and (max-width: 540px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1280px)",
  },
});

const Theme = ({ darkMode, children }) => (
  <ThemeProvider theme={getTheme(darkMode)}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
