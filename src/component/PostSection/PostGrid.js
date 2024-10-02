import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Container, Box, Pagination } from "@mui/material";
import PostCard from "./PostCardItem";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PostGrid() {
  const { currentTextColor } = useSelector((state) => state.theme);
  const { listPostData } = useSelector((state) => state.listPostData);
  const { searchKey } = useSelector((state) => state.listPostData);

  let cardDataList = listPostData.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchKey.toLowerCase()) |
      post.id.toLowerCase().includes(searchKey.toLowerCase())
    );
  });

  const query = useQuery();
  const navigate = useNavigate();

  const currentPage = parseInt(query.get("page") || "1", 10);
  const limit = parseInt(query.get("limit") || "6", 10);

  const [page, setPage] = useState(currentPage);

  const totalPosts = cardDataList.length;
  const totalPages = Math.ceil(totalPosts / limit);

  const paginatedData = cardDataList.slice((page - 1) * limit, page * limit);

  const handlePageChange = (event, value) => {
    setPage(value);
    navigate(`?page=${value}&limit=${limit}`);
  };

  useEffect(() => {
    if (!query.get("page") || !query.get("limit")) {
      navigate(`?page=1&limit=6`, { replace: true });
    }
  }, [navigate, query]);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <Container>
      <Box
        className="titlePost"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          width: "100%",
          color: currentTextColor,
        }}
      >
        <h1
          className=" text-center"
          sx={{
            fontSize: "larger",
            display: "inline-block",
            position: "relative",
          }}
        >
          Latest posts
        </h1>
        <Box
          sx={{
            height: "2px",
            width: "100px",
            backgroundColor: currentTextColor,
            margin: "10px auto",
          }}
        />
      </Box>

      <SearchBox />

      <Grid container spacing={2} justifyContent="flex-start" sx={{}}>
        {paginatedData.map((cardData, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostCard {...cardData} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: currentTextColor,
            },
            "& .Mui-selected": {
              color: currentTextColor,
              backgroundColor: "lightgrey",
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default PostGrid;
