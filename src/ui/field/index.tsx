import React from "react";
import css from "./field.css";

type field = {
    type: "text" | "password" | "email";
    children: string;
    required?: boolean;
    value: string;
};

export function MainField({ type, children, required, value }: field) {
    return (
        <div className={css.root}>
            <label className={css.label} htmlFor={css.input}>
                {children}
            </label>
            {required ? (
                <input
                    defaultValue={value}
                    required
                    id={css.input}
                    className={css.input}
                    type={type}
                />
            ) : (
                <input defaultValue={value} id={css.input} className={css.input} type={type} />
            )}
        </div>
    );
}
