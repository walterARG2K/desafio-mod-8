import React, { useState } from "react";
import { PetCard } from "../../components/petCard";
import { useGetPets } from "../../hooks/myPets";
import { MainTexts } from "../../ui/texts";
import css from "./petsReported.css";

export function MyPetsReported() {
    const [pets, setPets] = useState([]);
    useGetPets().then((r) => {
        if (!pets.length) setPets(r);
    });

    return (
        <div className={css.root}>
            <MainTexts type="Title">Mis mascotas reportadas</MainTexts>
            <div className={css.cards}>
                {pets.length ? (
                    pets.map((pet) => (
                        <PetCard
                            edit={true}
                            name={pet.name}
                            location={pet.location}
                            image={pet.urlImage}
                            id={pet.id}
                        >
                            ✏ EDITAR INFORMACIÓN
                        </PetCard>
                    ))
                ) : (
                    <MainTexts type="Paragraph">
                        Aún no has reportado a ninguna mascota como perdida
                    </MainTexts>
                )}
            </div>
        </div>
    );
}
