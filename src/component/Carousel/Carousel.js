import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../data/carousel.data.json";

function MyCarousel() {
  const renderIndicator = (onClickHandler, isSelected, index) => {
    return (
      <div
        onClick={onClickHandler}
        style={{
          display: "inline-block",
          width: 30,
          height: 2.5,
          backgroundColor: isSelected ? "#fff" : "#888",
          margin: "0 5px",
          cursor: "pointer",
        }}
      ></div>
    );
  };

  return (
    <Carousel
      infiniteLoop
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      emulateTouch
      autoFocus
      autoPlay
      renderIndicator={renderIndicator}
    >
      {data.data.map((slide) => (
        <Box key={slide.id} position="relative">
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={slide.imageUrl}
              alt={slide.label}
            />
            <Box
              sx={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",

                padding: "16px",
              }}
            >
              <Typography variant="h5" component="div">
                {slide.label}
              </Typography>
              <Typography variant="body2">{slide.content}</Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
