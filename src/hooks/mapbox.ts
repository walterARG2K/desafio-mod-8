import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

type coordsType = {
    lat: number;
    lng: number;
};

const coordinates = atom({
    key: "coordinates",
    default: {
        lng: 0,
        lat: 0,
    },
});

export function useSetCoordinates({ lat, lng }: coordsType) {
    const [lastCoordinates, setCoordinates] = useRecoilState(coordinates);
    useEffect(() => {
        setCoordinates({ lat, lng });
    }, [lat, lng]);

    return lastCoordinates;
}
