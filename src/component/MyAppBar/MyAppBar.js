import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Switch,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "reduxState/themeSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./MyAppBar.css";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { setCurrentPostId } from "reduxState/listDataSlice";

function MyAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { darkMode, currentTheme, currentTextColor } = useSelector(
    (state) => state.theme
  );

  const themeMUI = createTheme({
    palette: {
      titleTextColor: red.A700,
    },
  });

  const handleCreateNewPost = () => {
    dispatch(
      setCurrentPostId({
        currentPostId: "",
      })
    );

    navigate(`/add-edit-post`);
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
            <Button
              variant="contained"
              sx={{
                mr: 2,
                boxShadow: "none",
                border: "none",
                display: "flex",
                alignItems: "center",
                position: "relative",
                "&:hover .rotate-icon": {
                  transform: "rotate(90deg)",
                },
                "&:hover": {
                  boxShadow: "none",
                },
                backgroundColor: "transparent",
                color: themeMUI.palette.titleTextColor,
                fontSize: "large",
              }}
              onClick={() => {
                handleCreateNewPost();
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                }}
              >
                <i
                  className="fas fa-plus-circle rotate-icon"
                  style={{
                    color: themeMUI.palette.titleTextColor,
                    transition: "transform 0.3s ease",
                  }}
                ></i>
              </span>
              Add New Post
            </Button>

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
                onChange={() => dispatch(toggleDarkMode())}
                inputProps={{ "aria-label": "Dark Mode Toggle" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MyAppBar;
