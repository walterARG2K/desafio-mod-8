import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import css from "./layout.css";

export function Layout() {
    return (
        <div className={css.root}>
            <Header />
            <Outlet />
        </div>
    );
}
