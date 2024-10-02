import { createSlice } from "@reduxjs/toolkit";

import data from "../data/postData.json";

const initialState = {
  listPostData: JSON.parse(localStorage.getItem("listPostData")) || data.data,
  searchKey: "",
  currentPostId: "",
};

const listDataSlice = createSlice({
  name: "postData",
  initialState,
  reducers: {
    setPostData: (state, action) => {
      state.listPostData = action.payload.listPostData;
      localStorage.setItem("listPostData", JSON.stringify(state.listPostData));
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload.searchKey;
    },
    setCurrentPostId: (state, action) => {
      state.currentPostId = action.payload.currentPostId;

      console.log(action.payload.currentPostId);
    },
  },
});

export const { setPostData, setSearchKey, setCurrentPostId } =
  listDataSlice.actions;
export default listDataSlice.reducer;
