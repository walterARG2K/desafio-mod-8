import { useEffect } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { getUser, login } from "../libs/api";

const emailAtom = atom({
    key: "emailAtom",
    default: "",
});

const userInfo = atom({
    key: "userInfo",
    default: {},
});

// lógica para iniciar sesión
export async function useLogin(email: string, password: string) {
    const setEmail = useSetRecoilState(emailAtom);
    const setInfo = useSetRecoilState(userInfo);

    if (email && password) {
        const promiseLogin = await login(email, password);
        if (promiseLogin === 200) {
            setEmail(email);
            getUser().then((r) => {
                setInfo(r);
            });
        }
        return await promiseLogin;
    }
}

//selector que retorna el valor de email al cambiar
const onChangeEmail = selector({
    key: "SearchItemFromAPI",
    get: ({ get }) => {
        const value = get(emailAtom);
        return value;
    },
});

//
export function useEmailUser() {
    const setEmail = useSetRecoilState(emailAtom);
    const email = useRecoilValue(onChangeEmail);
    const setInfo = useSetRecoilState(userInfo);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (email && !token) setEmail("");
        if (!email && token) {
            getUser().then((r) => {
                if (r.email) {
                    setEmail(r.email);
                    setInfo(r);
                }
            });
        }
    }, [token]);

    return email;
}

//
export function removeToken() {
    localStorage.removeItem("token");
    return false;
}

//avisa al router que se ha iniciado sesión
export function useOnLogin() {
    const email = useRecoilValue(onChangeEmail);
    if (email) return true;
    else return false;
}

//devuelve la información del usuario
export function useInfoUser() {
    const info = useRecoilValue(userInfo);
    return info;
}
