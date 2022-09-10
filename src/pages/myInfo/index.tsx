import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckSuccess } from "../../components/checkSucess";
import { MyInfoForm } from "../../components/myInfoForm";
import { useInfoUser } from "../../hooks/login";
import { MainTexts } from "../../ui/texts";
import css from "./myInfo.css";

export function MyInfo() {
    const userInfo = useInfoUser();
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
            {check ? (
                <div className={css.check}>
                    <CheckSuccess>Usuario actualizado correctamente!</CheckSuccess>
                </div>
            ) : null}
            <MainTexts type="Title">Mis datos</MainTexts>
            <MyInfoForm
                onRegistered={onSubmit}
                value={{ nombre: userInfo["full_name"], email: userInfo["email"] }}
                required={false}
            />
        </div>
    );
}
