import React, { useState } from "react";
import { MainButtons } from "../../ui/buttons";
import { MainTexts } from "../../ui/texts";
import { CheckSuccess } from "../checkSucess";
import { reportInfo } from "../../libs/api";
import css from "./popup.css";

type popupType = {
    onClick: () => any;
    name: string;
    petId: number;
    userId: number;
};

export function Popup({ onClick, name, petId, userId }: popupType) {
    const [success, setSuccess] = useState(false);
    //al enviar el reporte con información sobre la mascota
    function onSubmit(e) {
        e.preventDefault();
        const info = {
            reporter: e.target[0].value,
            phone_number: e.target[1].value,
            description: e.target[2].value,
        };

        reportInfo(userId, petId, info);
        setSuccess(true);
        setTimeout(() => {
            (document.querySelector("." + css.img as any).click();
        }, 2500);
    }

    return (
        <div className={css["container-popup"]}>
            {success ? (
                <div className={css.check}>
                    <CheckSuccess>Info enviada correctamente!</CheckSuccess>
                </div>
            ) : null}
            <div>
                <div className={css["container-first"]}>
                    <div className={css["container-img"]}>
                        <img
                            onClick={onClick}
                            className={css.img}
                            src="https://desafio-mod-7.herokuapp.com/cruz.3754ac60.svg"
                        />
                    </div>
                    <MainTexts type="Subtitle">{"Reportar info de " + name}</MainTexts>
                </div>
                <form onSubmit={onSubmit} className={css.form}>
                    <div className={css["container-name-reporter"]}>
                        <label htmlFor="input-reporter-name" className={css["name-reporter"]}>
                            TU NOMBRE
                        </label>
                        <input
                            required
                            id="input-reporter-name"
                            className={css["input-name-reporter"]}
                        />
                    </div>
                    <div className={css["container-phone-reporter"]}>
                        <label htmlFor="input-reporter-phone" className={css["phone-reporter"]}>
                            TU TÉLEFONO
                        </label>
                        <input
                            required
                            id="input-reporter-phone"
                            className={css["input-phone-reporter"]}
                        />
                    </div>
                    <div className={css["container-description-reporter"]}>
                        <label
                            htmlFor="description-reporter"
                            className={css["description-reporter-label"]}
                        >
                            ¿DONDE LO VISTE?
                        </label>
                        <textarea
                            required
                            className={css["description-reporter"]}
                            name="description-reporter"
                            id="description-reporter"
                        ></textarea>
                    </div>
                    <MainButtons type="First">Enviar</MainButtons>
                </form>
            </div>
        </div>
    );
}
