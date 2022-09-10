import { useState } from "react";
import { atom, useRecoilValue } from "recoil";
import { getOnePet } from "../libs/api";

const myPet = atom({
    key: "myPet",
    default: { name: "" },
});

export async function useGetPet(petId) {
    const pet = useRecoilValue(myPet);
    const [switcher, setSwitcher] = useState(false);

    if (!pet.name && !switcher) {
        setSwitcher(true);
        const allPets = await getOnePet(petId);
        return await allPets;
    }
    return pet;
}
