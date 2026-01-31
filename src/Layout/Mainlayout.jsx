import React from "react";
import Hader from "./Hader";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <main>
        <Hader />
        <Outlet />
      </main>
    </>
  );
}
