import { useState } from "react";
import { atom, useRecoilValue } from "recoil";
import { getPetsReportedByUser } from "../libs/api";

const myPets = atom({
    key: "myPets",
    default: [],
});

export async function useGetPets() {
    const pets = useRecoilValue(myPets);
    const [switcher, setSwitcher] = useState(false);

    if (!pets.length && !switcher) {
        setSwitcher(true);
        const allPets = await getPetsReportedByUser();
        return await allPets;
    }
    return ["pets"];
}
