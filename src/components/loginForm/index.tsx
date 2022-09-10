import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLogin } from "../../hooks/login";
import { MainButtons } from "../../ui/buttons";
import { MainField } from "../../ui/field";
import css from "./loginForm.css";

export function LoginForm() {
    const params = useParams();
    const [loginInfo, setLoginInfo] = useState({ email: null, password: null });
    const [check, setCheck] = useState();
    const navigate = useNavigate();

    // al enviar el formulario
    function onSubmit(e) {
        e.preventDefault();
        setLoginInfo({ email: e.target[0].value, password: e.target[1].value });
        setCheck(e);
    }

    //verifica que los datos ingresados en el formulario sean correctos
    useLogin(loginInfo.email, loginInfo.password).then((res) => {
        if (loginInfo.email) {
            if (res === false) navigate("/registrarse", { replace: true });
            else if (res === 400) {
                const span = (check as any).target.children["2"];
                span.textContent = "EMAIL O CONTRASEÑA INCORRECTA";
            } else {
                const route = {
                    1: "/mis-datos",
                    2: "/mis-mascotas-reportadas",
                    3: "/reportar-mascota",
                    4: "/",
                };
                navigate(route[params.page], { replace: true });
            }
        }
    });

    return (
        <form onSubmit={onSubmit} className={css.form}>
            <MainField value="" required={true} type="email">
                EMAIL
            </MainField>
            <MainField value="" required={true} type="password">
                CONTRASEÑA
            </MainField>
            <span className={css.span}></span>
            <MainButtons type="First">Iniciar sesión</MainButtons>
        </form>
    );
}
