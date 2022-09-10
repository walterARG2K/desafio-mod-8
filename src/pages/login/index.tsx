import React, { useState } from "react";
import { LoginForm } from "../../components/loginForm";
import { MainTexts } from "../../ui/texts";
import css from "./login.css";

export function Login() {
    return (
        <div className={css.root}>
            <MainTexts type="Title">Ingresar</MainTexts>
            <LoginForm />
        </div>
    );
}
