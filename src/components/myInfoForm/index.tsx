import React, { useState } from "react";
import { MainField } from "../../ui/field";
import { MainButtons } from "../../ui/buttons";
import css from "./myInfoForm.css";
import { useLogin } from "../../hooks/login";
import { onRegister, onUpdateInfo } from "./onSubmit";

type formType = {
    value?: {
        nombre: string;
        email: string;
    };
    required: boolean;
    onRegistered?: () => any;
};

export function MyInfoForm({ required, value, onRegistered }: formType) {
    const [info, setInfo] = useState({ email: null, password: null });

    //se útiliza para iniciar la sesión luego de registrarse
    useLogin(info.email, info.password);

    // al enviar el formulario dependiendo de la page que lo invoque ejecuta una u otra función
    function onSubmit(e) {
        e.preventDefault();
        if (required) onRegister(e, onRegistered, setInfo);
        else onUpdateInfo(e, onRegistered, { lastEmail: value.email });
    }

    return (
        <form onSubmit={onSubmit} className={css.form}>
            <div>
                <MainField value={value?.nombre || ""} required={required} type="text">
                    NOMBRE
                </MainField>
                <MainField value={value?.email || ""} required={required} type="email">
                    EMAIL
                </MainField>
            </div>
            <div>
                <MainField value="" required={required} type="password">
                    CONTRASEÑA
                </MainField>
                <MainField value="" required={required} type="password">
                    REPETIR CONTRASEÑA
                </MainField>
                <span className={css.span}></span>
                <div className={css["container-button"]}>
                    <MainButtons type="First">Guardar datos</MainButtons>
                </div>
            </div>
        </form>
    );
}
