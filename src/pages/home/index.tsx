import React, { useState } from "react";
import { PetCard } from "../../components/petCard";
import { getPetsByLocation } from "../../libs/api";
import { MainButtons } from "../../ui/buttons";
import { MainTexts } from "../../ui/texts";
import css from "./home.css";

export function Home() {
    const [hasPermission, setHasPermission] = useState(false);
    const [pets, setPets] = useState([]);

    //al enviar el formulario obtiene todas las mascotas reportadas
    function onClickButton() {
        function location({ coords }) {
            setHasPermission(true);
            getPetsByLocation({ lat: coords.latitude, lng: coords.longitude }).then((r) => {
                if (!r.message) setPets(r);
                else setPets([1]);
            });
        }
        navigator.geolocation.getCurrentPosition(location, () => {
            alert(
                "Ha rechazado dar su ubicación, si desea volver a intentar, vuelva a cargar el sitio."
            );
        });
    }

    return (
        <div className={css.root}>
            <MainTexts type="Title">Mascotas perdidas cerca tuyo</MainTexts>
            {pets[0] ? (
                <MainTexts type="Paragraph">
                    No se ha encontrado ninguna mascota cerca de tu ubicación.
                </MainTexts>
            ) : null}
            {hasPermission ? (
                <div className={css["container-pets"]}>
                    {pets.map((pet) => {
                        if (pet.state === "perdido") {
                            return (
                                <PetCard
                                    edit={false}
                                    name={pet.name}
                                    location={pet.location}
                                    image={pet.urlImage}
                                    id={pet.id}
                                    userId={pet.UserId}
                                >
                                    REPORTAR INFORMACIÓN
                                </PetCard>
                            );
                        }
                    })}
                </div>
            ) : (
                <div>
                    <MainTexts type="Paragraph">
                        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer
                        tu ubicación.
                    </MainTexts>
                    <MainButtons click={onClickButton} type="First">
                        Dar mi ubicación
                    </MainButtons>
                </div>
            )}
        </div>
    );
}
