import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main/>} />

          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
