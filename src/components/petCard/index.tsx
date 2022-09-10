import React, { useState } from "react";
import css from "./petCard.css";
import { MainTexts } from "../../ui/texts";
import { Popup } from "../popup";
import { useNavigate } from "react-router-dom";

type petType = {
    name: string;
    location: string;
    image: string;
    id: number;
    children: string;
    edit: boolean;
    userId?: number;
};

export function PetCard({ name, location, image, id, children, edit, userId }: petType) {
    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);

    function onClickReport() {
        setPopup(true);
    }

    function onEditPet() {
        navigate("/mis-mascotas-reportadas/edit/" + id);
    }

    function closePopup() {
        setPopup(false);
    }

    return (
        <div className={css["card-container"]}>
            <div className={css["container-name"]}>
                <MainTexts type="Subtitle">{name}</MainTexts>
            </div>
            <img className={css["pet-picture"]} src={image} />
            <div className={css["container-info"]}>
                {popup ? <div className={css.background}></div> : null}
                {popup ? (
                    <Popup userId={userId} petId={id} name={name} onClick={closePopup}></Popup>
                ) : null}
                <div className={css["container-report"]}>
                    <MainTexts type="Paragraph">{location}</MainTexts>
                    <a
                        onClick={edit ? onEditPet : onClickReport}
                        style={{
                            color: "#3E91DD",
                            textDecorationLine: "underline",
                            cursor: "pointer",
                        }}
                        className="report-info"
                    >
                        {children}
                    </a>
                </div>
            </div>
        </div>
    );
}
