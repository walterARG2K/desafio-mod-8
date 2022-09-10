import { useState } from "react";
import { useLogin } from "../../hooks/login";
import { createUser, updateInfoUser, verifyIfEmailExist } from "../../libs/api";

export async function onRegister(e, onRegistered, setInfo) {
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const repeatPassword = e.target[3].value;
    const span = e.target.children[1].children[2];

    if (password !== repeatPassword) span.textContent = "CONTRASEÑAS NO COINCIDEN";
    else {
        const userInfo = {
            full_name: name,
            email,
            password,
        };
        const response = await createUser(userInfo);
        if (response) {
            setTimeout(() => {
                setInfo({ email, password });
            }, 2000);
            onRegistered();
        } else span.textContent = "CORREO ELECTRÓNICO YA EXISTE ";
    }
}

//si el que lo ejecuta es la página de /mis-datos
export async function onUpdateInfo(e, onRegistered, { lastEmail }) {
    var aux = false;
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const repeatPassword = e.target[3].value;
    const span = e.target.children[1].children[2];

    if (password !== repeatPassword) span.textContent = "CONTRASEÑAS NO COINCIDEN";
    else if (lastEmail !== email && email !== "") {
        const response = await verifyIfEmailExist(email);
        if (response.status) span.textContent = "EMAIL YA EN USO";
        else aux = true;
    } else aux = true;

    if (aux) {
        const userInfo = {
            full_name: name,
            email,
            password,
        };
        //elimina campos vacíos
        for (const key in userInfo) {
            if (userInfo[key] === "") delete userInfo[key];
        }

        const response = await updateInfoUser(userInfo);
        if (response) onRegistered();
    }
}
