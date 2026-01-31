import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import PageNotFound from "../page/PageNotFound";
import Mainlayout from "../Layout/Mainlayout";

export default function AuthRoute() {
  return (
    <>
      <Routes>
        <Route element={<Mainlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
