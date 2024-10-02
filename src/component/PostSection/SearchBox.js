import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { constValue } from "GlobalConfig/constValue";
import { setSearchKey } from "reduxState/listDataSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const { darkMode, currentTextColor } = useSelector((state) => state.theme);
  const { searchKey } = useSelector((state) => state.listPostData);

  const handleSearchChange = (event) => {
    dispatch(
      setSearchKey({
        searchKey: event.target.value,
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "16px",
      }}
    >
      <Button
        disabled
        variant="contained"
        sx={{
          height: "100%",

          padding: "14px",
          "&.Mui-disabled": {
            backgroundColor: "light-gray",
            opacity: "1",
            color: darkMode
              ? constValue.textDarktheme
              : constValue.textLightTheme,
          },
        }}
      >
        Search
      </Button>
      <TextField
        label="Search"
        variant="outlined"
        value={searchKey}
        onChange={handleSearchChange}
        sx={{
          flexGrow: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: currentTextColor,
            },
          },
          "& .MuiInputLabel-root": {
            color: currentTextColor,
          },
        }}
        placeholder="Search by id | name"
        InputProps={{
          style: {
            color: currentTextColor,
          },
        }}
      />
    </Box>
  );
}

export default SearchBox;
