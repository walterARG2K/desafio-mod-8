import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckSuccess } from "../../components/checkSucess";
import { MyInfoForm } from "../../components/myInfoForm";
import { MainTexts } from "../../ui/texts";
import css from "./signup.css";

export function Signup() {
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    function onSubmit() {
        setCheck(true);
        setTimeout(() => {
            navigate("/", { replace: true });
        }, 2500);
    }

    return (
        <div className={css.root}>
            <MainTexts type="Title">Registrarse</MainTexts>
            {check ? (
                <div className={css.check}>
                    <CheckSuccess>Cuenta creada correctamente!</CheckSuccess>
                </div>
            ) : null}
            <MyInfoForm onRegistered={onSubmit} required={true} />
        </div>
    );
}
