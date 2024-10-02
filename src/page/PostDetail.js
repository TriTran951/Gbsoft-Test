import React, { useEffect } from "react";
import { CardMedia, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import MyAppBarEdit from "component/MyAppBar/MyAppBarEdit";
import "./Edit-Add-PostPage.css";
import { unixToDate } from "utils/ConvertTime";
import PostRest from "component/PostRest";
import "../GlobalConfig/GlobalStyle.css";

const PostDetail = () => {
  const location = useLocation();

  const { currentTextColor, currentTheme } = useSelector(
    (state) => state.theme
  );
  const { listPostData } = useSelector((state) => state.listPostData);
  const queryParams = queryString.parse(location.search);

  const postId = queryParams.id;

  let cardData = listPostData.find((post) => post.id === postId);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = currentTheme;
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, [currentTheme]);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: currentTextColor,
      }}
    >
      <MyAppBarEdit />
      <Box
        sx={{
          position: "relative",
          backgroundColor: currentTextColor,
        }}
      >
        <CardMedia
          component="img"
          height="300"
          alt={cardData.title}
          image={cardData.imageUrl}
        />
        <Box
          sx={{
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <Box
            className="centerForm"
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, 0)",
              width: "80%",
              padding: "2%",
              zIndex: "1",
              borderRadius: "8px",
              boxShadow: "1px 4px 12px rgba(0, 0, 0, 0.5)",
              backgroundColor: currentTheme,
            }}
          >
            <Typography
              data-id="title"
              sx={{ color: currentTextColor }}
              variant="h4"
              className="card-title"
            >
              {cardData.title}
            </Typography>
            <Typography sx={{ color: currentTextColor }} variant="h8">
              by {cardData.author} -{" "}
              {unixToDate(cardData.createdAt).toLocaleDateString(
                "en-US",
                options
              )}
            </Typography>
            <Box
              className="marginBot"
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: currentTextColor,

                opacity: "0.2",
              }}
            />
            <Box>
              <Typography sx={{ color: currentTextColor }} className="gap">
                {cardData.description}
              </Typography>
              <PostRest />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostDetail;
