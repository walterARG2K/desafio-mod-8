import { useEffect } from "react";

const API_URL = "https://desafio-mod-7.herokuapp.com";

// obtiene todas las mascotas en un radio
type coordsType = {
    lat: number;
    lng: number;
};

export async function getPetsByLocation({ lat, lng }: coordsType) {
    const petsLost = await fetch(API_URL + `/pet/search/location?lat=${lat}&lng=${lng}`);
    return await petsLost.json();
}

//verifica si el email ingresado coincide con una cuenta en el sitio.
export async function verifyIfEmailExist(email) {
    const existEmail = await fetch(API_URL + `/user/verify-email?email=${email}`);
    const response = await existEmail.json();
    return response;
}

//inicia sesión, y retorna un token para ser útilizado en la sesión
export async function login(email: string, password: string) {
    const response = await verifyIfEmailExist(email);

    if (response.status) {
        const tokenPromise = await fetch(API_URL + "/user/token", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (tokenPromise.status === 200) {
            const token = await tokenPromise.json();
            localStorage.setItem("token", token);
        }
        return await tokenPromise.status;
    } else return false;
}

//obtiene un usuario ya creado
export async function getUser() {
    const token = localStorage.getItem("token");

    if (token) {
        const token = localStorage.getItem("token");
        const user = await fetch(API_URL + "/user", {
            headers: {
                Authorization: `bearer ${token}`,
            },
        });
        const email = await user.json();
        return await email.userFind;
    }

    return false;
}

//registra un nuevo usuario
export async function createUser(userInfo) {
    const response = await verifyIfEmailExist(userInfo.email);
    if (response.status) return false;
    else {
        await fetch(API_URL + "/user", {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return true;
    }
}

//actualiza un usuario ya existente
export async function updateInfoUser(infoUser) {
    const token = localStorage.getItem("token");
    const updatedInfo = await fetch(API_URL + "/user", {
        method: "PUT",
        body: JSON.stringify(infoUser),
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
        },
    });
    return updatedInfo.status;
}

//crea un reporte de una mascota perdida
export async function createPetReport(petInfo) {
    const token = localStorage.getItem("token");
    const newReport = await fetch(API_URL + "/pet", {
        method: "POST",
        body: JSON.stringify(petInfo),
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
        },
    });
    return await newReport.json();
}

//obtiene todas las mascotas reportadas por un usuario
export async function getPetsReportedByUser() {
    const token = localStorage.getItem("token");
    const petsReported = await fetch(API_URL + "/pet", {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
    return await petsReported.json();
}

//obtiene los datos de una mascota
export async function getOnePet(petId) {
    const token = localStorage.getItem("token");
    const petsReported = await fetch(API_URL + "/pet/" + petId, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
    const response = await petsReported.json();
    return response;
}

//actualiza los datos de una mascota
export async function updateInfoPet(InfoPet, petId) {
    const token = localStorage.getItem("token");
    const updatedInfo = await fetch(API_URL + "/pet/" + petId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
        },
        body: JSON.stringify(InfoPet),
    });
    return await updatedInfo.json();
}

//elimina una mascota
export async function deletePet(petId) {
    const token = localStorage.getItem("token");
    const petDeleted = await fetch(API_URL + "/pet/" + petId, {
        method: "DELETE",
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
    return await petDeleted.json();
}

//avisa al dueño de la mascota sobre nueva información
export async function reportInfo(userId, petId, body) {
    const reportSend = await fetch(API_URL + `/report?userId=${userId}&petId=${petId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return await reportSend.json();
}
