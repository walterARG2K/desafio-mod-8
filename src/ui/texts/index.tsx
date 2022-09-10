import React from "react";
import css from "./texts.css";

type textTypes = {
    type: "Title" | "Subtitle" | "Paragraph";
    children: any;
    cursor?: "pointer";
    click?: (e) => any;
};

//tipos de texto
function Title(children: string, cursor?: string, click?: (e) => any) {
    return (
        <h1 onClick={click} className={`${css.title} ${cursor && css.cursor}`}>
            {children}
        </h1>
    );
}

function Subtitle(children: string, cursor?: string, click?: (e) => any) {
    return (
        <h3 onClick={click} className={`${css.subtitle} ${cursor && css.cursor}`}>
            {children}
        </h3>
    );
}

function Paragraph(children: string, cursor?: string, click?: (e) => any) {
    return (
        <p onClick={click} className={`${css.paragraph} ${cursor && css.cursor}`}>
            {children}
        </p>
    );
}

//
//
export function MainTexts({ type, children, cursor, click }: textTypes) {
    const textTypes = {
        Title,
        Subtitle,
        Paragraph,
    };

    return textTypes[type](children, cursor, click);
}
