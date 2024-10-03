import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./reduxState/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditAddPostPage from "page/Edit-Add-PostPage";
import "./GlobalConfig/reset.css";
import PostDetail from "page/PostDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-edit-post" element={<EditAddPostPage />} />
        <Route path="/post-detail" element={<PostDetail />} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
