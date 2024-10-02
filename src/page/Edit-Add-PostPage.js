import React from "react";
import {
  CardMedia,
  Typography,
  Box,
  TextField,
  FormHelperText,
  FormControl,
  FormGroup,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import MyAppBarEmpty from "component/MyAppBar/MyAppBarEmpty";
import SaveIcon from "@mui/icons-material/Save";
import "./Edit-Add-PostPage.css";
import { useForm } from "react-hook-form";
import { setPostData } from "reduxState/listDataSlice";
import { useNavigate } from "react-router-dom";
import { generateRandomId } from "utils/generateId";
import { useEffect } from "react";

const EditAddPostPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentTextColor, currentTheme } = useSelector(
    (state) => state.theme
  );
  const { listPostData, currentPostId } = useSelector(
    (state) => state.listPostData
  );
  const queryParams = queryString.parse(location.search);

  const postId = queryParams.id;

  let cardData = null;

  if (postId) {
    cardData = listPostData.find((post) => post.id === postId);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: cardData ? cardData.title : "",
      description: cardData ? cardData.description : "",
      author: cardData ? cardData.author : "",
      imageUrl: cardData ? cardData.imageUrl : "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.backgroundColor = currentTheme;
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, [currentTheme]);

  const onSubmit = (data) => {
    let updatedListPost = [...listPostData];
    let postIndex = updatedListPost.findIndex(
      (post) => post.id === currentPostId
    );
    let newPost = null;
    const currentTime = Date.now();

    if (postIndex !== -1) {
      let updatedPost = {
        ...updatedListPost[postIndex],
        title: data.title,
        description: data.description,
        author: data.author,
        imageUrl: data.imageUrl,
        updatedAt: currentTime,
      };

      updatedListPost[postIndex] = updatedPost;
    } else {
      newPost = {
        id: generateRandomId(),
        title: data.title,
        description: data.description,
        author: data.author,
        imageUrl: data.imageUrl,
        createdAt: currentTime,
        updatedAt: currentTime,
      };
      updatedListPost.push(newPost);
    }

    dispatch(
      setPostData({
        listPostData: updatedListPost,
      })
    );

    const postIdToNavigate = updatedListPost[postIndex]?.id || newPost?.id;
    navigate(`/post-detail?id=${postIdToNavigate}`);
  };

  return (
    <Box>
      <MyAppBarEmpty />
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="300"
          image={cardData && cardData.imageUrl ? cardData.imageUrl : ""}
          alt={cardData ? cardData.title : ""}
          sx={{
            backgroundColor:
              cardData && cardData.imageUrl ? "transparent" : "grey",
          }}
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
              top: "150%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              padding: "2%",
              zIndex: "100",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              backgroundColor: currentTheme,
            }}
          >
            <Typography
              data-id="title"
              sx={{ color: currentTextColor }}
              variant="h4"
              className="card-title"
            >
              Add/Edit a post
            </Typography>
            <Typography sx={{ color: currentTextColor }} variant="h8">
              Please enter the following information and submit then.
            </Typography>
            <Box
              className="marginBot"
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: currentTextColor,
              }}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormControl
                  className="marginBot"
                  fullWidth
                  variant="outlined"
                  error={!!errors.title}
                  sx={{ color: currentTextColor }}
                >
                  <label htmlFor="title">Title</label>
                  <TextField
                    id="title"
                    {...register("title", { required: true })}
                    placeholder="Eg: Learning JS is fun"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: currentTextColor,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: currentTextColor,
                      },
                    }}
                    InputProps={{
                      style: {
                        color: currentTextColor,
                      },
                    }}
                  />
                  {errors.title && <FormHelperText>Enter title</FormHelperText>}
                </FormControl>
                <FormControl
                  className="marginBot"
                  fullWidth
                  variant="outlined"
                  error={!!errors.author}
                  sx={{ color: currentTextColor }}
                >
                  <label htmlFor="author">Author</label>
                  <TextField
                    id="author"
                    {...register("author", { required: true })}
                    placeholder="Eg: John Doe"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: currentTextColor,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: currentTextColor,
                      },
                    }}
                    InputProps={{
                      style: {
                        color: currentTextColor,
                      },
                    }}
                  />
                  {errors.author && (
                    <FormHelperText>Enter author</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  className="marginBot"
                  fullWidth
                  variant="outlined"
                  error={!!errors.imageUrl}
                  sx={{ color: currentTextColor }}
                >
                  <label htmlFor="imageUrl">Image Url</label>
                  <TextField
                    id="imageUrl"
                    {...register("imageUrl", { required: false })}
                    placeholder="Eg: http://example.com"
                    variant="outlined"
                    InputProps={{
                      style: {
                        overflow: "auto",
                        color: currentTextColor,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: currentTextColor,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: currentTextColor,
                      },
                    }}
                  />
                </FormControl>
                <FormControl
                  className="marginBot"
                  fullWidth
                  variant="outlined"
                  error={!!errors.description}
                  sx={{ color: currentTextColor }}
                >
                  <label htmlFor="description">Description</label>
                  <TextField
                    multiline
                    spellCheck="false"
                    id="description"
                    {...register("description", { required: false })}
                    variant="outlined"
                    minRows={5}
                    maxRows={5}
                    InputProps={{
                      style: {
                        overflow: "auto",
                        color: currentTextColor,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: currentTextColor,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: currentTextColor,
                      },
                    }}
                  />
                </FormControl>
              </FormGroup>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  startIcon={<SaveIcon />}
                  onClick={() => {}}
                  sx={{ margin: "1px auto" }}
                >
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditAddPostPage;
