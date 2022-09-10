import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { useOnLogin } from "../hooks/login";
import { EditPet } from "../pages/editPet";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { MyInfo } from "../pages/myInfo";
import { MyPetsReported } from "../pages/petsReported";
import { ReportPet } from "../pages/reportPet";
import { Signup } from "../pages/signup";

export function MyRoutes() {
    const token = useOnLogin();

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {token ? (
                    <Route path="mis-datos" element={<MyInfo />} />
                ) : (
                    <Route path="mis-datos" element={<Navigate to="/iniciar-sesion/1" replace />} />
                )}
                {token ? (
                    <Route path="mis-mascotas-reportadas" element={<MyPetsReported />} />
                ) : (
                    <Route
                        path="mis-mascotas-reportadas"
                        element={<Navigate to="/iniciar-sesion/2" replace />}
                    />
                )}
                {token ? (
                    <Route path="mis-mascotas-reportadas/edit/:id" element={<EditPet />} />
                ) : (
                    <Route
                        path="mis-mascotas-reportadas/edit/:id"
                        element={<Navigate to="/iniciar-sesion/2" replace />}
                    />
                )}
                {token ? (
                    <Route path="reportar-mascota" element={<ReportPet />} />
                ) : (
                    <Route
                        path="reportar-mascota"
                        element={<Navigate to="/iniciar-sesion/3" replace />}
                    />
                )}
                {token ? (
                    <Route path="iniciar-sesion/4" element={<Navigate to="/" replace />} />
                ) : (
                    <Route path="iniciar-sesion/:page" element={<Login />} />
                )}
                {token ? (
                    <Route path="registrarse" element={<Navigate to="/" replace />} />
                ) : (
                    <Route path="registrarse" element={<Signup />} />
                )}
                <Route path="test" element={<div>Prueba</div>} />
            </Route>
        </Routes>
    );
}
