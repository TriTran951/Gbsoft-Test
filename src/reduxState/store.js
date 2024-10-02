import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import listPostDataReducer from "./listDataSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    listPostData: listPostDataReducer,
  },
});
