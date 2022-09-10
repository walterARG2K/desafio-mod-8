import React from "react";
import { MapboxField } from "../../ui/mapboxField";
import { MainButtons } from "../../ui/buttons";
import { MainField } from "../../ui/field";
import { MainTexts } from "../../ui/texts";
import css from "./editPet.css";
import { Link } from "react-router-dom";
import { deletePet, updateInfoPet } from "../../libs/api";
import { CheckSuccess } from "../../components/checkSucess";

export function EditPetComponent(check, onSubmit, petInfo, mapboxCoords, params, navigate) {
    return (
        <div className={css.root}>
            <div className={css["title-container"]}>
                <MainTexts type="Title">Editar mascota</MainTexts>
                {check ? (
                    <div className={css.check}>
                        <CheckSuccess>Mascota editada correctamente!</CheckSuccess>
                    </div>
                ) : null}
            </div>
            <form onSubmit={onSubmit} className={css.form}>
                <MainField required={true} value={petInfo.name} type="text">
                    NOMBRE
                </MainField>
                <div className={css.dropzone}>
                    <div className="dropzone" id="dropzone"></div>
                </div>
                <MapboxField
                    coords={{ lat: petInfo.lat, lng: petInfo.lng }}
                    onClick={mapboxCoords}
                />
                <MainTexts type="Paragraph">
                    Buscá un punto de referencia para reportar a tu mascota. Puede ser una
                    dirección, un barrio o una ciudad.
                </MainTexts>
                <hr className={css.hr} />
                <span className={css.span}></span>
                <MainButtons type="Second">Guardar información</MainButtons>
            </form>
            <MainButtons
                click={() => {
                    if (petInfo.state !== "perdido") updateInfoPet({ state: "perdido" }, params.id);
                    else updateInfoPet({ state: "encontrado" }, params.id);
                    navigate("/mis-mascotas-reportadas", { replace: true });
                }}
                type="Third"
            >
                {petInfo.state !== "perdido" ? "Reportar como perdido" : "Reportar como encontrado"}
            </MainButtons>
            <Link
                onClick={() => {
                    deletePet(params.id);
                }}
                className={css.link}
                to={"/mis-mascotas-reportadas"}
            >
                ELIMINAR REPORTE
            </Link>
        </div>
    );
}
