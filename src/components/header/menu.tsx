import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmailUser, removeToken } from "../../hooks/login";
import { MainTexts } from "../../ui/texts";
import css from "./menu.css";

export function Menu() {
    const navigate = useNavigate();
    const email = useEmailUser();
    const [logout, setLogout] = useState(false);

    // se ejecuta al cerrar la sesión
    useEffect(() => {
        setLogout(false);
    }, [logout]);

    return (
        <div className={css.root}>
            <MainTexts
                click={() => {
                    navigate("/mis-datos", { replace: true });
                }}
                cursor="pointer"
                type="Title"
            >
                Mis datos
            </MainTexts>
            <MainTexts
                click={() => {
                    navigate("/mis-mascotas-reportadas", { replace: true });
                }}
                cursor="pointer"
                type="Title"
            >
                Mis mascotas reportadas
            </MainTexts>
            <MainTexts
                click={() => {
                    navigate("/reportar-mascota", { replace: true });
                }}
                cursor="pointer"
                type="Title"
            >
                Reportar mascota
            </MainTexts>
            {email ? (
                <MainTexts
                    click={() => {
                        setLogout(true);
                        removeToken();
                        navigate("/", { replace: true });
                    }}
                    cursor="pointer"
                    type="Paragraph"
                >
                    {email}
                    <br></br>
                    CERRAR SESIÓN
                </MainTexts>
            ) : (
                <MainTexts
                    click={() => {
                        navigate("/iniciar-sesion/4", { replace: true });
                    }}
                    cursor="pointer"
                    type="Paragraph"
                >
                    INICIAR SESIÓN
                </MainTexts>
            )}
        </div>
    );
}
