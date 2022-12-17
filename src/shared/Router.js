import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Layout from "../components/layout/Layout";
import SignIn from "../pages/SignIn";
import Create from "../pages/Create";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="/create" element={<Create />} />
          <Route path="/create/:id" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
