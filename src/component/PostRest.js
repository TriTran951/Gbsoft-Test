import React from "react";
import { CardMedia, Typography, Box } from "@mui/material";
import "../GlobalConfig/GlobalStyle.css";
import { useSelector } from "react-redux";

const PostRest = () => {
  const { currentTextColor } = useSelector((state) => state.theme);
  return (
    <Box>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
        pariatur quibusdam tenetur nemo tempora incidunt ex doloremque
        exercitationem dicta. Corporis fuga totam nulla voluptatibus possimus
        similique aliquid nobis illo.
      </Typography>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
        pariatur quibusdam tenetur nemo tempora incidunt ex doloremque
        exercitationem dicta. Corporis fuga totam nulla voluptatibus possimus
        similique aliquid nobis illo.
      </Typography>
      <CardMedia
        src="https://picsum.photos/1368/1000"
        component="img"
        height="300"
        alt="img"
        className="gap"
      ></CardMedia>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
      <CardMedia
        src="https://picsum.photos/1368/1000"
        component="img"
        height="300"
        alt="img"
        className="gap"
      ></CardMedia>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
      <CardMedia
        src="https://picsum.photos/1368/1000"
        component="img"
        height="300"
        alt="img"
        className="gap"
      ></CardMedia>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
      <Typography sx={{ color: currentTextColor }} className="gap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit inventore hic tenetur, dolor iusto dolorum rem, non error,
        saepe quia dignissimos quas ducimus aliquid. Praesentium ea aspernatur
        vero deserunt.
      </Typography>
    </Box>
  );
};

export default PostRest;
