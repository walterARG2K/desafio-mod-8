import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Burger } from "./burger";
import css from "./header.css";
import { Menu } from "./menu";
const logo = require("../../images/logo.svg");

export function Header() {
    const [switcher, setSwitcher] = useState(false);
    const [event, setEvent] = useState();

    //cuando se cambia el pathname se cierra el menú
    useEffect(() => {
        switcher ? (event as any)?.click() : null;
    }, [useLocation().pathname]);

    //al hacer click al menú
    function onClickBurger(e) {
        setEvent(e.target);
        switcher ? setSwitcher(false) : setSwitcher(true);
    }

    return (
        <div className={css.root}>
            {switcher ? <Menu /> : null}
            <Link className={css.home} to="/">
                <img className={css.img} src={logo} alt="" />
            </Link>
            <div className={css.menu}>
                <Burger click={onClickBurger} />
            </div>
        </div>
    );
}
