import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import MyAppBar from "component/MyAppBar/MyAppBar";
import PostGrid from "component/PostSection/PostGrid";
import MyCarousel from "component/Carousel/Carousel";
import { constValue } from "GlobalConfig/constValue";

const HomePage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <Box
      sx={{
        backgroundColor: darkMode
          ? constValue.darkTheme
          : constValue.lightTheme,
      }}
    >
      <MyAppBar />
      <MyCarousel />
      <PostGrid />
    </Box>
  );
};

export default HomePage;
