import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  createTheme,
  ThemeProvider,
  Switch,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "reduxState/themeSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./MyAppBar.css";
import { red } from "@mui/material/colors";

function MyAppBarEmpty() {
  const dispatch = useDispatch();
  const { darkMode, currentTheme, currentTextColor } = useSelector(
    (state) => state.theme
  );

  const themeMUI = createTheme({
    palette: {
      titleTextColor: red.A700,
    },
  });

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <ThemeProvider theme={themeMUI}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: currentTheme,
          color: currentTextColor,
          boxShadow: "none",
          zIndex: "100",
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          position: "fixed",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box className="nav-item">
            <a className="nav-link" href="/">
              <img
                className="nav__logo"
                src="/assets/logo.50678c47.svg"
                alt="Logo Nordic Coder"
                style={{ height: 40 }}
              />
            </a>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 2,
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              <i
                className={`fas fa-${darkMode ? "moon" : "sun"}`}
                style={{ marginRight: "4px" }}
              ></i>
              <Switch
                checked={darkMode}
                onChange={handleDarkModeToggle}
                inputProps={{ "aria-label": "Dark Mode Toggle" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MyAppBarEmpty;
