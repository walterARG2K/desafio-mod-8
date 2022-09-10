import React from "react";
import { MapboxField } from "../../ui/mapboxField";
import { MainButtons } from "../../ui/buttons";
import { MainField } from "../../ui/field";
import { MainTexts } from "../../ui/texts";
import { CheckSuccess } from "../../components/checkSucess";
import css from "./reportPet.css";

export function ReportPetComponent(check, onSubmit, mapboxCoords, navigate) {
    return (
        <div className={css.root}>
            <div className={css["title-container"]}>
                <MainTexts type="Title">Reportar una mascota perdida</MainTexts>
                {check ? (
                    <div className={css.check}>
                        <CheckSuccess>Reporte creado correctamente!</CheckSuccess>
                    </div>
                ) : null}
            </div>
            <form onSubmit={onSubmit} className={css.form}>
                <MainField required={true} value="" type="text">
                    NOMBRE
                </MainField>
                <div className={css.dropzone}>
                    <div className="dropzone" id="dropzone"></div>
                </div>
                <MapboxField onClick={mapboxCoords} />
                <MainTexts type="Paragraph">
                    Buscá un punto de referencia para reportar a tu mascota. Puede ser una
                    dirección, un barrio o una ciudad.
                </MainTexts>
                <hr className={css.hr} />
                <span className={css.span}></span>
                <MainButtons type="Second">Reportar como perdido</MainButtons>
            </form>
            <MainButtons
                click={() => {
                    navigate("/", { replace: true });
                }}
                type="Third"
            >
                Cancelar reporte
            </MainButtons>
        </div>
    );
}
