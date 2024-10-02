import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { timeAgo } from "utils/ConvertTime";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPostId, setPostData } from "reduxState/listDataSlice";
import { useNavigate } from "react-router-dom";

const PostCard = (cardData) => {
  const dispatch = useDispatch();
  const { listPostData } = useSelector((state) => state.listPostData);
  const [isHovered, setIsHovered] = useState(false);

  const { darkMode, currentTheme, currentTextColor } = useSelector(
    (state) => state.theme
  );

  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    const isConfirmed = window.confirm("Are you sure?");

    const updatedPostData = listPostData.filter((post) => post.id !== id);

    if (isConfirmed) {
      dispatch(
        setPostData({
          listPostData: updatedPostData,
        })
      );
    }
  };

  const handleClick = (card) => {
    dispatch(
      setCurrentPostId({
        currentPostId: cardData.id,
      })
    );

    navigate(`/post-detail?id=${card.id}`);
  };

  const handeEditClick = (card) => {
    dispatch(
      setCurrentPostId({
        currentPostId: cardData.id,
      })
    );

    navigate(`/add-edit-post?id=${card.id}`);
  };

  return (
    <span
      className="post-item mb-4"
      style={{ position: "relative", cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        handleClick(cardData);
      }}
    >
      <Card
        className="card"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          boxShadow: darkMode
            ? "0px 4px 12px rgba(255, 255, 255, 0.1)"
            : "0px 4px 12px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 3,
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={cardData.imageUrl}
          alt={cardData.title}
          sx={{
            transition: "transform 0.3s ease",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: currentTheme,
          }}
        >
          <Box>
            <Typography
              data-id="title"
              sx={{ color: currentTextColor }}
              variant="h5"
              className="card-title"
            >
              {cardData.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxHeight: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: currentTextColor,
              }}
            >
              {cardData.description}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1, color: currentTextColor }}
          >
            <small className="text-muted">by</small>{" "}
            <small className="text-muted font-weight-bold">
              {cardData.author}
            </small>{" "}
            <small className="text-muted">
              {" "}
              - {timeAgo(cardData.createdAt)}
            </small>
          </Typography>
        </CardContent>
      </Card>

      {isHovered && (
        <Box
          className="post-item-menu"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <IconButton
            data-id="edit"
            size="small"
            sx={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            }}
            onClick={(event) => {
              event.stopPropagation();
              handeEditClick(cardData);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            data-id="remove"
            size="small"
            sx={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            }}
            onClick={(event) => {
              event.stopPropagation();
              handleDeleteClick(cardData.id);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </span>
  );
};

export default PostCard;
