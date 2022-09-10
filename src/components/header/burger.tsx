import React from "react";
import css from "./burger.css";

type burger = {
    click: (e) => any;
};

//animación al hacer click al menú
const classInput = `${css.burger} ${css["visuallyHidden"]}`;
const classSpan1 = `${css.bar} ${css.bar1}`;
const classSpan2 = `${css.bar} ${css.bar2}`;
const classSpan3 = `${css.bar} ${css.bar3}`;
const classSpan4 = `${css.bar} ${css.bar4}`;

export function Burger({ click }: burger) {
    return (
        <div className={css.header}>
            <input type="checkbox" id="burger" className={classInput} />
            <label htmlFor="burger">
                <div onClick={click} className={css.hamburger}>
                    <span className={classSpan1}></span>
                    <span className={classSpan2}></span>
                    <span className={classSpan3}></span>
                    <span className={classSpan4}></span>
                </div>
            </label>
        </div>
    );
}
