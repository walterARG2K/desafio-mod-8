import React from "react";
import css from "./buttons.css";

//variable y función para animación al hacer click
const animation = `${css.load} ${css.loading}`;

function animationOnClick(e, goEventClick) {
    e.target.classList.add(css.activeLoading);
    goEventClick ? goEventClick() : null;
}

//tipos de botones
export function FirstButton(children: string, click) {
    return (
        <button
            onClick={(e) => {
                animationOnClick(e, click);
            }}
            className={css.first}
        >
            {children}
            <span className={animation}></span>
        </button>
    );
}

export function SecondButton(children: string, click) {
    return (
        <button
            onClick={(e) => {
                animationOnClick(e, click);
            }}
            className={css.second}
        >
            {children}
            <span className={animation}></span>
        </button>
    );
}

export function ThirdButton(children: string, click) {
    return (
        <button
            onClick={(e) => {
                animationOnClick(e, click);
            }}
            className={css.third}
        >
            {children}
            <span className={animation}></span>
        </button>
    );
}
